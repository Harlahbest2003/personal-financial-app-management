import React, { useState, useEffect } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';
import axios from 'axios'; // Directly import axios

const RecurringTransactions = () => {
  const [transaction, setTransaction] = useState({ type: '', amount: '', frequency: '' });
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions when component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recurring');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/recurring', transaction);
      setTransactions([...transactions, response.data]);
      setTransaction({ type: '', amount: '', frequency: '' });
    } catch (error) {
      console.error('Error adding recurring transaction:', error);
      alert('Error adding recurring transaction. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recurring/${id}`);
      setTransactions(transactions.filter((trans) => trans._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
      alert('Error deleting transaction. Please try again.');
    }
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
        {transactions.map((trans) => (
          <ListGroup.Item key={trans._id}>
            {trans.type}: ${trans.amount} ({trans.frequency})
            <Button 
              variant="danger" 
              className="ms-2" 
              onClick={() => handleDelete(trans._id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default RecurringTransactions;
