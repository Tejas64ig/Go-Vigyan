import express from 'express';
import Employee from '../models/Employee.js';
import { logActivity } from '../utils/activityLogger.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (err) {
    next(err);
  }
});

router.get('/count', async (req, res, next) => {
  try {
    const count = await Employee.countDocuments();
    res.json({ count });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    await logActivity('employee_added', `Employee ${savedEmployee.name} joined the farm`, savedEmployee._id);
    res.status(201).json(savedEmployee);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    await logActivity('employee_updated', `Employee ${updatedEmployee.name} details updated`, updatedEmployee._id);
    res.json(updatedEmployee);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    await logActivity('employee_deleted', `Employee ${employee.name} left the farm`);
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    next(err);
  }
});

export default router;
