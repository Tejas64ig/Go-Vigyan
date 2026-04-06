import mongoose from 'mongoose';

const vaccinationSchema = new mongoose.Schema({
  cowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cow',
    required: true,
  },
  vaccineName: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
  },
  batchNumber: {
    type: String,
  },
  dateAdministered: {
    type: Date,
    required: true,
  },
  nextDueDate: {
    type: Date,
    required: true,
    index: true,
  },
  administeredBy: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

vaccinationSchema.virtual('status').get(function() {
  if (!this.nextDueDate) return 'Unknown';
  
  const today = new Date();
  today.setHours(0, 0, 0, 0); // start of today
  
  const dueDate = new Date(this.nextDueDate);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  if (diffDays < 0) {
    return 'Overdue';
  } else if (diffDays <= 7) {
    return 'Due Soon';
  } else {
    return 'On Track';
  }
});

vaccinationSchema.set('toJSON', { virtuals: true });
vaccinationSchema.set('toObject', { virtuals: true });

export default mongoose.model('Vaccination', vaccinationSchema);
