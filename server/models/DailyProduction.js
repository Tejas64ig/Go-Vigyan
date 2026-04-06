import mongoose from 'mongoose';

const dailyProductionSchema = new mongoose.Schema({
  cowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cow',
    required: true,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  milkLitres: {
    type: Number,
    required: true,
    min: 0,
    max: 50,
  },
  hoursWorked: {
    type: Number,
    min: 0,
    max: 12,
  },
  milkingTime: {
    type: String,
    enum: ['Morning', 'Afternoon', 'Evening'],
  },
  date: {
    type: Date,
    required: true,
    index: true,
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('DailyProduction', dailyProductionSchema);
