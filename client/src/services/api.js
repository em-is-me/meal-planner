
import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/me'),
};

// Recipes API calls
export const recipesAPI = {
  getAll: () => api.get('/recipes'),
  getById: (id) => api.get(`/recipes/${id}`),
  create: (recipe) => api.post('/recipes', recipe),
  update: (id, recipe) => api.put(`/recipes/${id}`, recipe),
  delete: (id) => api.delete(`/recipes/${id}`),
};

// Pantry API calls
export const pantryAPI = {
  getAll: () => api.get('/pantry'),
  getById: (id) => api.get(`/pantry/${id}`),
  create: (item) => api.post('/pantry', item),
  update: (id, item) => api.put(`/pantry/${id}`, item),
  delete: (id) => api.delete(`/pantry/${id}`),
};

// Health check
export const healthCheck = () => api.get('/health');

export default api;
