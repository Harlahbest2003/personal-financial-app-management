// controllers/budgetController.js
const Budget = require('../models/Budget');

// Create a budget
exports.createBudget = async (req, res) => {
  try {
    const { user, amount, category, startDate, endDate } = req.body;

    const budget = new Budget({ user, amount, category, startDate, endDate });
    await budget.save();

    res.status(201).json(budget);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all budgets for a user
exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.params.userId });
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update budget
exports.updateBudget = async (req, res) => {
  try {
    const { amount, spent } = req.body;
    const budget = await Budget.findById(req.params.id);
    if (budget) {
      budget.amount = amount || budget.amount;
      budget.spent = spent || budget.spent;
      await budget.save();
      res.json(budget);
    } else {
      res.status(404).json({ msg: 'Budget not found' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
