// src/components/Dashboard/IncomeTracker.js
import React, { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const IncomeTracker = () => {
  const [income, setIncome] = useState({ source: '', amount: '' });
  const [incomes, setIncomes] = useState([]);

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncomes([...incomes, income]);
    setIncome({ source: '', amount: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Income Tracker</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSource">
          <Form.Label>Source</Form.Label>
          <Form.Control 
            type="text" 
            name="source" 
            value={income.source} 
            onChange={handleChange} 
            placeholder="Enter source" 
          />
        </Form.Group>

        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            type="number" 
            name="amount" 
            value={income.amount} 
            onChange={handleChange} 
            placeholder="Enter amount" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Income
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {incomes.map((inc, index) => (
          <ListGroup.Item key={index}>
            {inc.source}: ${inc.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default IncomeTracker;
