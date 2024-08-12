import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
// import axios from '../api/axios'; // Adjust the path as needed
import axios from 'axios';
const AddGoal = () => {
  const [goal, setGoal] = useState({ name: '', targetAmount: '', targetDate: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!goal.name || !goal.targetAmount || !goal.targetDate) {
      setError('Please fill out all fields.');
      return;
    }
    if (goal.targetAmount <= 0) {
      setError('Target amount must be a positive number.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/goals', goal);
      setSuccess('Goal added successfully!');
      console.log('Goal response:', response.data);
      // Reset form
      setGoal({ name: '', targetAmount: '', targetDate: '' });
    } catch (err) {
      setError('Failed to add goal. Please try again.');
      console.error('Goal error:', err.response ? err.response.data : err);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Add Financial Goal</h2>
      <Form onSubmit={handleSubmit}>
        {error && <div className="text-danger">{error}</div>}
        {success && <div className="text-success">{success}</div>}
        <Form.Group controlId="formName">
          <Form.Label>Goal Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={goal.name} 
            onChange={handleChange} 
            placeholder="Enter goal name" 
          />
        </Form.Group>

        <Form.Group controlId="formTargetAmount">
          <Form.Label>Target Amount</Form.Label>
          <Form.Control 
            type="number" 
            name="targetAmount" 
            value={goal.targetAmount} 
            onChange={handleChange} 
            placeholder="Enter target amount" 
          />
        </Form.Group>

        <Form.Group controlId="formTargetDate">
          <Form.Label>Target Date</Form.Label>
          <Form.Control 
            type="date" 
            name="targetDate" 
            value={goal.targetDate} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Add Goal
        </Button>
      </Form>
    </Container>
  );
};

export default AddGoal;
