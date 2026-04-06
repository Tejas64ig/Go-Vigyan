import mongoose from 'mongoose';

const cowSchema = new mongoose.Schema({
  cowTag: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['Female', 'Male'],
    default: 'Female',
  },
  healthStatus: {
    type: String,
    enum: ['Healthy', 'Under Observation', 'Pregnant', 'Lactating', 'Sick'],
    default: 'Healthy',
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

cowSchema.virtual('age').get(function () {
  if (!this.dateOfBirth) return null;
  const today = new Date();
  const birthDate = new Date(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
});

cowSchema.set('toJSON', { virtuals: true });
cowSchema.set('toObject', { virtuals: true });

export default mongoose.model('Cow', cowSchema);
