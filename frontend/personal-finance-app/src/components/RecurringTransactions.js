// src/components/Dashboard/RecurringTransactions.js
import React, { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const RecurringTransactions = () => {
  const [transaction, setTransaction] = useState({ type: '', amount: '', frequency: '' });
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]);
    setTransaction({ type: '', amount: '', frequency: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Recurring Transactions</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Control 
            type="text" 
            name="type" 
            value={transaction.type} 
            onChange={handleChange} 
            placeholder="Enter type" 
          />
        </Form.Group>

        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            type="number" 
            name="amount" 
            value={transaction.amount} 
            onChange={handleChange} 
            placeholder="Enter amount" 
          />
        </Form.Group>

        <Form.Group controlId="formFrequency">
          <Form.Label>Frequency</Form.Label>
          <Form.Control 
            type="text" 
            name="frequency" 
            value={transaction.frequency} 
            onChange={handleChange} 
            placeholder="Enter frequency" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Transaction
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {transactions.map((trans, index) => (
          <ListGroup.Item key={index}>
            {trans.type}: ${trans.amount} ({trans.frequency})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default RecurringTransactions;
