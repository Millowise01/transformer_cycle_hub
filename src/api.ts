import axios from 'axios';

const api = axios.create({
  baseURL: 'https://transformer-cycle-hub-backend.onrender.com',
});

// Attach auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fetch tutorials with optional query string
export const fetchTutorials = async (queryParams: string) => {
  return api.get(`/api/tutorials?${queryParams}`);
};

export default api;
