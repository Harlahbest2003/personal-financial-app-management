// src/components/Dashboard/FinancialGoals.js
import React, { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const FinancialGoals = () => {
  const [goal, setGoal] = useState({ name: '', targetAmount: '', currentAmount: '' });
  const [goals, setGoals] = useState([]);

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, goal]);
    setGoal({ name: '', targetAmount: '', currentAmount: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Financial Goals</h2>
      <Form onSubmit={handleSubmit}>
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

        <Form.Group controlId="formCurrentAmount">
          <Form.Label>Current Amount</Form.Label>
          <Form.Control 
            type="number" 
            name="currentAmount" 
            value={goal.currentAmount} 
            onChange={handleChange} 
            placeholder="Enter current amount" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Goal
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {goals.map((g, index) => (
          <ListGroup.Item key={index}>
            {g.name}: ${g.currentAmount} / ${g.targetAmount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FinancialGoals;
