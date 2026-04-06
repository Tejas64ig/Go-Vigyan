import api from './axiosInstance';

export const getTodayProduction = () => api.get('/production/today').then(res => res.data);
export const getProductionByDate = (date) => api.get(`/production/date/${date}`).then(res => res.data);
export const getProductionChartData = (date) => api.get(`/production/chart/${date}`).then(res => res.data);
export const createProductionLog = (data) => api.post('/production', data).then(res => res.data);
export const deleteProductionLog = (id) => api.delete(`/production/${id}`).then(res => res.data);
