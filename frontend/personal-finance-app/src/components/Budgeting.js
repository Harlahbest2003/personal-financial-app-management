import React, { useState, useEffect } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';
// import axios from '../api/axios'; // Adjust path if necessary
import axios from 'axios';
const Budgeting = () => {
  const [budget, setBudget] = useState({ category: '', amount: '' });
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const response = await axios.get('/budgets');
        setBudgets(response.data);
      } catch (error) {
        console.error('Error fetching budgets:', error);
      }
    };

    fetchBudgets();
  }, []);

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/budgets', budget);
      setBudgets([...budgets, response.data]);
      setBudget({ category: '', amount: '' });
    } catch (error) {
      console.error('Error adding budget:', error);
    }
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

        <Button className='m-2' variant="primary" type="submit">
          Set Budget
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {budgets.map((bud) => (
          <ListGroup.Item key={bud._id}>
            {bud.category}: ${bud.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Budgeting;
