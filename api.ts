import axios from 'axios';

// Determine the base URL from environment variables.
// Fallback to localhost for local development.
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3005';

// Create a new axios instance with a base URL and default headers.
const api = axios.create({
  baseURL: `${API_URL}/api`, // All requests will be prefixed with /api
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to automatically include the JWT token in headers.
// This runs before every request is sent.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // If a token exists, add it to the Authorization header.
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

export const fetchTutorials = (params: string) => api.get(`/tutorials?${params}`);