import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api'; // Import the new centralized API client

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      // Use the new API client. The base URL is already configured.
      const response = await api.post('/auth/register', formData);

      if (response.data.success) {
        // On successful registration, redirect to login with a success message
        navigate('/login?registered=true');
      }
    } catch (error: any) {
      // Provide more specific error feedback to the user
      if (error.response?.data?.errors) {
        const errorMessages = error.response.data.errors.map((e: any) => e.msg).join('. ');
        setError(errorMessages);
      } else {
        setError(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input name="firstName" onChange={handleChange} value={formData.firstName} placeholder="First Name" required />
      <input name="lastName" onChange={handleChange} value={formData.lastName} placeholder="Last Name" required />
      <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      <input name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone Number (e.g., +254...)" required />
      <button type="submit">Sign Up</button>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUp;
