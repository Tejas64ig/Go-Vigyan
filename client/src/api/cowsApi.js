import api from './axiosInstance';

export const getCows = () => api.get('/cows').then(res => res.data);
export const getCowCount = () => api.get('/cows/count').then(res => res.data);
export const createCow = (data) => api.post('/cows', data).then(res => res.data);
export const updateCow = (id, data) => api.put(`/cows/${id}`, data).then(res => res.data);
export const deleteCow = (id) => api.delete(`/cows/${id}`).then(res => res.data);
