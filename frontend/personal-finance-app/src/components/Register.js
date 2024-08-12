import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../api/axios'; // Import the Axios instance
import './Register.css'; // Ensure this path is correct

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      setSuccess('Registration successful!');
      console.log('Registration response:', response.data);
      // Reset form
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err.response ? err.response.data : err);
    }
  };

  return (
    <Container className="register-container">
      <h2 className="text-center mb-4">Register</h2>
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
        <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>
        <div className="mt-3">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
