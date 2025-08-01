import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api'; // Import the new centralized API client

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for a query parameter to show a success message after registration
    const params = new URLSearchParams(location.search);
    if (params.get('registered') === 'true') {
      setMessage('Account created successfully! Please sign in.');
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/auth/login', formData);
      if (response.data.success) {
        const { accessToken, refreshToken, user } = response.data.data;
        // Store tokens and user data in localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userData', JSON.stringify(user));

        // Redirect based on user role
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      <button type="submit">Login</button>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default Login;
