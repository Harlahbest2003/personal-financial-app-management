import React, { useState, useEffect } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';
// import axios from '../api/axios'; // Adjust the path to where your axios instance is located
import axios from 'axios';

const IncomeTracker = () => {
  const [income, setIncome] = useState({ source: '', amount: '' });
  const [incomes, setIncomes] = useState([]);

  // Fetch incomes from the backend when the component mounts
  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/income');
        setIncomes(response.data);
      } catch (error) {
        console.error('Error fetching incomes:', error);
      }
    };

    fetchIncomes();
  }, []);

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/income', income);
      setIncomes([...incomes, response.data]);
      setIncome({ source: '', amount: '' });
    } catch (error) {
      console.error('Error adding income:', error);
    }
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

        <Button className='m-2' variant="primary" type="submit">
          Add Income
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {incomes.map((inc) => (
          <ListGroup.Item key={inc._id}>
            {inc.source}: ${inc.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default IncomeTracker;
