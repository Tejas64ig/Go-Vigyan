import express from 'express';
import Vaccination from '../models/Vaccination.js';
import { logActivity } from '../utils/activityLogger.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const records = await Vaccination.find().populate('cowId', 'cowTag name').sort({ nextDueDate: 1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
});

router.get('/upcoming', async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inSevenDays = new Date(today);
    inSevenDays.setDate(today.getDate() + 7);

    const records = await Vaccination.find({
      nextDueDate: { $lte: inSevenDays }
    }).populate('cowId', 'cowTag name').sort({ nextDueDate: 1 });

    res.json(records);
  } catch (err) {
    next(err);
  }
});

router.get('/stats', async (req, res, next) => {
  try {
    const records = await Vaccination.find({}, 'nextDueDate');
    let overdue = 0;
    let dueSoon = 0;
    let onTrack = 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    records.forEach(r => {
      const dueDate = new Date(r.nextDueDate);
      dueDate.setHours(0, 0, 0, 0);
      const diffTime = dueDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

      if (diffDays < 0) overdue++;
      else if (diffDays <= 7) dueSoon++;
      else onTrack++;
    });

    res.json({ overdue, dueSoon, onTrack });
  } catch (err) {
    next(err);
  }
});

router.get('/cow/:cowId', async (req, res, next) => {
  try {
    const records = await Vaccination.find({ cowId: req.params.cowId }).sort({ dateAdministered: -1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = new Vaccination(req.body);
    const savedEntry = await entry.save();
    await savedEntry.populate('cowId', 'cowTag');
    await logActivity('vaccination_added', `Vaccination ${savedEntry.vaccineName} scheduled/administered for Cow #${savedEntry.cowId.cowTag}`, savedEntry._id);
    res.status(201).json(savedEntry);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Vaccination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Record not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const entry = await Vaccination.findByIdAndDelete(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Record not found' });
    res.json({ message: 'Record deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
