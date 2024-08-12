const express = require('express');
const router = express.Router();
const RecurringTransaction = require('../models/RecurringTransaction'); // Adjust path if necessary


router.post('/', async (req, res) => {
  try {
    const newTransaction = new RecurringTransaction(req.body);
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ message: 'Failed to add transaction' });
  }
});

module.exports = router;

