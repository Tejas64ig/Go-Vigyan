import mongoose from 'mongoose';

const activityLogSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      'cow_added', 
      'cow_deleted', 
      'cow_updated',
      'employee_added', 
      'employee_deleted',
      'employee_updated',
      'production_logged', 
      'production_deleted',
      'vaccination_added', 
      'medication_added'
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  referenceId: {
    type: mongoose.Schema.Types.ObjectId,
  },
}, { timestamps: { updatedAt: false } }); // Only need createdAt

// Index for sorting
activityLogSchema.index({ createdAt: -1 });

export default mongoose.model('ActivityLog', activityLogSchema);
