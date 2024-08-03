// routes/budget.js
const express = require('express');
const router = express.Router();
const { createBudget, getBudgets, updateBudget } = require('../controllers/budgetController');

router.post('/', createBudget);
router.get('/:userId', getBudgets);
router.put('/:id', updateBudget);

module.exports = router;
