import { create } from 'zustand';
import { getEmployees, createEmployee, deleteEmployee, updateEmployee } from '../api/employeesApi';

export const useEmployeeStore = create((set, get) => ({
  employees: [],
  isLoading: false,
  error: null,
  
  fetchEmployees: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getEmployees();
      set({ employees: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  
  addEmployee: async (data) => {
    try {
      const newEmp = await createEmployee(data);
      set({ employees: [newEmp, ...get().employees] });
      return newEmp;
    } catch (err) {
      throw err;
    }
  },

  editEmployee: async (id, data) => {
    try {
      const updatedEmp = await updateEmployee(id, data);
      set({ employees: get().employees.map(e => e._id === id ? updatedEmp : e) });
      return updatedEmp;
    } catch (err) {
      throw err;
    }
  },

  removeEmployee: async (id) => {
    try {
      await deleteEmployee(id);
      set({ employees: get().employees.filter(e => e._id !== id) });
    } catch (err) {
      throw err;
    }
  }
}));
