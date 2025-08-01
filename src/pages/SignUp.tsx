import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthResponse {
  token: string;
  user: {
    _id: string;
    email: string;
    fullName: string;
  };
}

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const apiUrl =
        (import.meta as any).env?.VITE_API_URL || process.env.REACT_APP_API_URL;
      const response = await axios.post<AuthResponse>(
        `${apiUrl}/api/auth/register`,
        formData
      );

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      navigate('/dashboard');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" onChange={handleChange} value={formData.fullName} placeholder="Full Name" />
      <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      <input name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} placeholder="Phone Number" />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignUp;
