import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  dateOfJoining: {
    type: Date,
  },
  shift: {
    type: String,
    enum: ['Morning', 'Afternoon', 'Night', 'Full Day'],
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('Employee', employeeSchema);
