import React, { useState, useEffect } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

import axios from 'axios';
const ExpenseTracker = () => {
  const [expense, setExpense] = useState({ category: '', amount: '' });
  const [expenses, setExpenses] = useState([]);
  const userId = '123';

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/expenses/${userId}`);
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, [userId]);


  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/expenses', expense);
      setExpenses([...expenses, response.data]);
      setExpense({ category: '', amount: '' });
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Expense Tracker</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.name}: ${expense.amount}</li>
        ))}
      </ul>

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

        <Button className='m-2' variant="primary" type="submit">
          Add Expense
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {expenses.map((exp) => (
          <ListGroup.Item key={exp._id}>
            {exp.category}: ${exp.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ExpenseTracker;
