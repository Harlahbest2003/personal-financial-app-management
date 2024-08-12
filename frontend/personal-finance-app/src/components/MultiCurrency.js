import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
// import axios from '../api/axios'; // Adjust the path as needed
import axios from 'axios';
const MultiCurrency = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState('');

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/currency', { amount, currency });
      setConvertedAmount(response.data.convertedAmount);
      setError('');
    } catch (err) {
      setError('Failed to convert currency.');
      console.error('Currency conversion error:', err);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Multi-Currency Support</h2>
      <Form>
        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount" 
          />
        </Form.Group>

        <Form.Group controlId="formCurrency">
          <Form.Label>Currency</Form.Label>
          <Form.Control 
            as="select" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={handleConvert}>
          Convert
        </Button>

        {error && <div className="text-danger mt-3">{error}</div>}
        
        {convertedAmount !== null && (
          <div className="mt-3">
            <h4>Converted Amount:</h4>
            <p>{convertedAmount} {currency}</p>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default MultiCurrency;
