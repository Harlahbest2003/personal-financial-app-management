// controllers/expensesController.js
const Expense = require('../models/Expense');

// Add an expense
exports.addExpense = async (req, res) => {
  try {
    const { user, amount, category, date, description } = req.body;

    const expense = new Expense({ user, amount, category, date, description });
    await expense.save();

    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all expenses for a user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.params.userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
