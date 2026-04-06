import { create } from 'zustand';
import { getProductionByDate, createProductionLog } from '../api/productionApi';

export const useProductionStore = create((set, get) => ({
  dailyLogs: [],
  isLoading: false,
  error: null,
  
  fetchLogsByDate: async (date) => {
    set({ isLoading: true, error: null });
    try {
      const isoDate = new Date(date).toISOString().split('T')[0];
      const data = await getProductionByDate(isoDate);
      set({ dailyLogs: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  
  addProductionLog: async (data) => {
    try {
      const newLog = await createProductionLog(data);
      set({ dailyLogs: [newLog, ...get().dailyLogs] });
      return newLog;
    } catch (err) {
      throw err;
    }
  }
}));
