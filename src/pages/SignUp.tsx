import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Replace with your actual API base URL or import from your config
const API_BASE_URL = 'https://transformer-cycle-hub-backend.onrender.com';


export const SignUp: React.FC = () => {
  const [formData, setFormData] = React.useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, formData);

      console.log('Registration response:', response.data);

      if (response.status === 200 || response.status === 201) {
        alert('Account created successfully! Please sign in to continue.');
        navigate('/login?registered=true');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {error && <div className="signup-error">{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

