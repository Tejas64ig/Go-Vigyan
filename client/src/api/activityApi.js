import api from './axiosInstance';

export const getRecentActivity = () => api.get('/activity/recent').then(res => res.data);
