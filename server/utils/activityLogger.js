import ActivityLog from '../models/ActivityLog.js';

export const logActivity = async (type, description, referenceId = null) => {
  try {
    const log = new ActivityLog({
      type,
      description,
      referenceId,
    });
    await log.save();
  } catch (error) {
    console.error('Failed to save activity log:', error);
  }
};
