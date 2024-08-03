
import React, { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const ExpenseTracker = () => {
  const [expense, setExpense] = useState({ category: '', amount: '' });
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, expense]);
    setExpense({ category: '', amount: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Expense Tracker</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            name="category" 
            value={expense.category} 
            onChange={handleChange} 
            placeholder="Enter category" 
          />
        </Form.Group>

        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            type="number" 
            name="amount" 
            value={expense.amount} 
            onChange={handleChange} 
            placeholder="Enter amount" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Expense
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {expenses.map((exp, index) => (
          <ListGroup.Item key={index}>
            {exp.category}: ${exp.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ExpenseTracker;
