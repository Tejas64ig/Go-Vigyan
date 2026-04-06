import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import cowRoutes from './routes/cowRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import productionRoutes from './routes/productionRoutes.js';
import vaccinationRoutes from './routes/vaccinationRoutes.js';
import medicationRoutes from './routes/medicationRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet());

// Rate Limiting (100 req per 15 min for same IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});
app.use(limiter);

// CORS
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

// Body parsing
app.use(express.json());

// API Routes
app.use('/api/cows', cowRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/production', productionRoutes);
app.use('/api/vaccinations', vaccinationRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/activity', activityRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Global Error Handler
app.use(errorHandler);

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Tejas64ig:Tejas69ig@cluster0.cihgkxu.mongodb.net/?appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
