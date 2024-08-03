// routes/expenses.js
const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expensesController');

router.post('/', addExpense);
router.get('/:userId', getExpenses);
router.delete('/:id', deleteExpense);

module.exports = router;
