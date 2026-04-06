import api from './axiosInstance';

export const getMedications = () => api.get('/medications').then(res => res.data);
export const getMedicationsForCow = (cowId) => api.get(`/medications/cow/${cowId}`).then(res => res.data);
export const createMedication = (data) => api.post('/medications', data).then(res => res.data);
export const updateMedication = (id, data) => api.put(`/medications/${id}`, data).then(res => res.data);
export const deleteMedication = (id) => api.delete(`/medications/${id}`).then(res => res.data);
