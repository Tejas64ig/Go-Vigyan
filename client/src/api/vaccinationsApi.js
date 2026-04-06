import api from './axiosInstance';

export const getVaccinations = () => api.get('/vaccinations').then(res => res.data);
export const getUpcomingVaccinations = () => api.get('/vaccinations/upcoming').then(res => res.data);
export const getVaccinationStats = () => api.get('/vaccinations/stats').then(res => res.data);
export const getVaccinationsForCow = (cowId) => api.get(`/vaccinations/cow/${cowId}`).then(res => res.data);
export const createVaccination = (data) => api.post('/vaccinations', data).then(res => res.data);
export const updateVaccination = (id, data) => api.put(`/vaccinations/${id}`, data).then(res => res.data);
export const deleteVaccination = (id) => api.delete(`/vaccinations/${id}`).then(res => res.data);
