import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
  cowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cow',
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
  },
  dosage: {
    type: String,
  },
  routeOfAdministration: {
    type: String,
    enum: ['Oral', 'Injection (IM)', 'Injection (IV)', 'Topical', 'Intranasal'],
  },
  frequency: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  prescribingDoctor: {
    type: String,
  },
  doctorContact: {
    type: String,
  },
  // Auto-update logic to "Completed" can be handled in a pre-save/find hook or controller.
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Discontinued'],
    default: 'Active',
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('Medication', medicationSchema);
