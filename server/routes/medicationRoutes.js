import express from 'express';
import Medication from '../models/Medication.js';
import { logActivity } from '../utils/activityLogger.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // Basic auto-complete logic based on date
    const today = new Date();
    await Medication.updateMany(
      { status: 'Active', endDate: { $lt: today } },
      { $set: { status: 'Completed' } }
    );

    const records = await Medication.find().populate('cowId', 'cowTag name').sort({ createdAt: -1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
});

router.get('/cow/:cowId', async (req, res, next) => {
  try {
    const records = await Medication.find({ cowId: req.params.cowId }).sort({ startDate: -1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = new Medication(req.body);
    const savedEntry = await entry.save();
    await savedEntry.populate('cowId', 'cowTag');
    await logActivity('medication_added', `Medication ${savedEntry.medicineName} started for Cow #${savedEntry.cowId.cowTag}`, savedEntry._id);
    res.status(201).json(savedEntry);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Medication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Record not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const entry = await Medication.findByIdAndDelete(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Record not found' });
    res.json({ message: 'Record deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
