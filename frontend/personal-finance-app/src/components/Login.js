
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // Adjust the path as needed
import './Login.css'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save JWT token
      setSuccess('Login successful!');
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect to dashboard after 2 seconds
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };

  return (
    <Container className="login-container">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <div className="text-danger mt-2">{error}</div>}
        {success && <div className="text-success mt-2">{success}</div>}
        <Button variant="primary" type="submit" className="mt-4">
          Login
        </Button>
        <div className="mt-3">
          <Link to="/register">Don't have an account? Register</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
