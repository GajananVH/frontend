import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Ensure this matches your Django server URL
});

export const fetchIssues = () => api.get('/api/issues/');
export const fetchComponents = () => api.get('/api/components/');
export const fetchVehicles = () => api.get('/api/vehicles/');
export const createComponent = (data) => api.post('/api/components/', data);
export const createVehicle = (data) => api.post('/api/vehicles/', data);
export const createIssue = (data) => api.post('/api/issues/', data);
