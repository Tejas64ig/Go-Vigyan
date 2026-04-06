import express from 'express';
import ActivityLog from '../models/ActivityLog.js';

const router = express.Router();

router.get('/recent', async (req, res, next) => {
  try {
    const logs = await ActivityLog.find().sort({ createdAt: -1 }).limit(10);
    res.json(logs);
  } catch (err) {
    next(err);
  }
});

export default router;
