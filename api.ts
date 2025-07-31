import axios from 'axios';

const api = axios.create({
  // The baseURL will be read from the .env file
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// This is an interceptor that automatically adds the authentication token
// to every request you make, so you don't have to do it manually in every component.
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

export default api;