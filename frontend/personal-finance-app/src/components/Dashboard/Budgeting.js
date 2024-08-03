// src/components/Dashboard/Budgeting.js
import React, { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const Budgeting = () => {
  const [budget, setBudget] = useState({ category: '', amount: '' });
  const [budgets, setBudgets] = useState([]);

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudgets([...budgets, budget]);
    setBudget({ category: '', amount: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Budgeting</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            name="category" 
            value={budget.category} 
            onChange={handleChange} 
            placeholder="Enter category" 
          />
        </Form.Group>

        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            type="number" 
            name="amount" 
            value={budget.amount} 
            onChange={handleChange} 
            placeholder="Enter amount" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Set Budget
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {budgets.map((bud, index) => (
          <ListGroup.Item key={index}>
            {bud.category}: ${bud.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Budgeting;
