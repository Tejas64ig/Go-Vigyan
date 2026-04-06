import { create } from 'zustand';
import { getCows, createCow, deleteCow, updateCow } from '../api/cowsApi';

export const useCowStore = create((set, get) => ({
  cows: [],
  isLoading: false,
  error: null,
  
  fetchCows: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getCows();
      set({ cows: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  
  addCow: async (data) => {
    try {
      const newCow = await createCow(data);
      set({ cows: [newCow, ...get().cows] });
      return newCow;
    } catch (err) {
      throw err;
    }
  },

  editCow: async (id, data) => {
    try {
      const updatedCow = await updateCow(id, data);
      set({ cows: get().cows.map(c => c._id === id ? updatedCow : c) });
      return updatedCow;
    } catch (err) {
      throw err;
    }
  },

  removeCow: async (id) => {
    try {
      await deleteCow(id);
      set({ cows: get().cows.filter(c => c._id !== id) });
    } catch (err) {
      throw err;
    }
  }
}));
