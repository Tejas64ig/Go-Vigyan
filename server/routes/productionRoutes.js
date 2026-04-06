import express from 'express';
import DailyProduction from '../models/DailyProduction.js';
import { logActivity } from '../utils/activityLogger.js';

const router = express.Router();

router.get('/today', async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const matchStage = {
      $match: {
        date: { $gte: today }
      }
    };

    const stats = await DailyProduction.aggregate([
      matchStage,
      {
        $group: {
          _id: null,
          totalMilk: { $sum: '$milkLitres' },
          cowsMilkedCount: { $addToSet: '$cowId' }
        }
      }
    ]);

    if (stats.length > 0) {
      res.json({ 
        totalMilk: stats[0].totalMilk, 
        cowsMilked: stats[0].cowsMilkedCount.length 
      });
    } else {
      res.json({ totalMilk: 0, cowsMilked: 0 });
    }
  } catch (err) {
    next(err);
  }
});

router.get('/date/:date', async (req, res, next) => {
  try {
    const targetDate = new Date(req.params.date);
    targetDate.setHours(0, 0, 0, 0);
    const nextDay = new Date(targetDate);
    nextDay.setDate(targetDate.getDate() + 1);

    const production = await DailyProduction.find({
      date: {
        $gte: targetDate,
        $lt: nextDay
      }
    }).populate('cowId', 'cowTag name').populate('employeeId', 'name').sort({ createdAt: -1 });

    res.json(production);
  } catch (err) {
    next(err);
  }
});

router.get('/chart/:date', async (req, res, next) => {
  try {
    const targetDate = new Date(req.params.date);
    targetDate.setHours(0, 0, 0, 0);
    const nextDay = new Date(targetDate);
    nextDay.setDate(targetDate.getDate() + 1);

    const data = await DailyProduction.find({
      date: { $gte: targetDate, $lt: nextDay }
    }).populate('cowId', 'cowTag name').populate('employeeId', 'name');

    // Aggregate manually or via Mongo. Doing manually for simplicity:
    const cowChartData = [];
    const employeeChartData = [];

    const cowMap = {};
    const empMap = {};

    data.forEach(p => {
      const cowIdentifier = p.cowId ? p.cowId.cowTag : 'Unknown';
      if (!cowMap[cowIdentifier]) cowMap[cowIdentifier] = 0;
      cowMap[cowIdentifier] += p.milkLitres;

      const empName = p.employeeId ? p.employeeId.name : 'Unknown';
      if (!empMap[empName]) empMap[empName] = 0;
      empMap[empName] += (p.hoursWorked || 0);
    });

    for (let key in cowMap) {
      cowChartData.push({ name: key, milk: cowMap[key] });
    }
    for (let key in empMap) {
      employeeChartData.push({ name: key, hours: empMap[key] });
    }

    res.json({ cowChartData, employeeChartData });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = new DailyProduction(req.body);
    const savedEntry = await entry.save();
    // Populate for log
    await savedEntry.populate('cowId', 'cowTag');
    await logActivity('production_logged', `Logged ${savedEntry.milkLitres}L of milk from Cow #${savedEntry.cowId.cowTag}`, savedEntry._id);
    res.status(201).json(savedEntry);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const entry = await DailyProduction.findByIdAndDelete(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    await logActivity('production_deleted', `Deleted a production log`);
    res.json({ message: 'Entry deleted successfully' });
  } catch (err) {
    next(err);
  }
});

export default router;
