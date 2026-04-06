import api from './axiosInstance';

export const getEmployees = () => api.get('/employees').then(res => res.data);
export const getEmployeeCount = () => api.get('/employees/count').then(res => res.data);
export const createEmployee = (data) => api.post('/employees', data).then(res => res.data);
export const updateEmployee = (id, data) => api.put(`/employees/${id}`, data).then(res => res.data);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`).then(res => res.data);
