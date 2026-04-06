import express from 'express';
import Cow from '../models/Cow.js';
import { logActivity } from '../utils/activityLogger.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { breed, status } = req.query;
    let query = {};
    if (breed) query.breed = breed;
    if (status) query.healthStatus = status;

    const cows = await Cow.find(query).sort({ createdAt: -1 });
    res.json(cows);
  } catch (err) {
    next(err);
  }
});

router.get('/count', async (req, res, next) => {
  try {
    const count = await Cow.countDocuments();
    res.json({ count });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const cow = await Cow.findById(req.params.id);
    if (!cow) return res.status(404).json({ message: 'Cow not found' });
    res.json(cow);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCow = new Cow(req.body);
    const savedCow = await newCow.save();
    await logActivity('cow_added', `Cow #${savedCow.cowTag} was registered`, savedCow._id);
    res.status(201).json(savedCow);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updatedCow = await Cow.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedCow) return res.status(404).json({ message: 'Cow not found' });
    await logActivity('cow_updated', `Cow #${updatedCow.cowTag} was updated`, updatedCow._id);
    res.json(updatedCow);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const cow = await Cow.findByIdAndDelete(req.params.id);
    if (!cow) return res.status(404).json({ message: 'Cow not found' });
    await logActivity('cow_deleted', `Cow #${cow.cowTag} was deleted`);
    res.json({ message: 'Cow deleted successfully' });
  } catch (err) {
    next(err);
  }
});

export default router;
