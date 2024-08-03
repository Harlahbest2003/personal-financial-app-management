// controllers/reportsController.js
const Expense = require('../models/Expense');
const Income = require('../models/Income');

// Get reports for a user
exports.getReports = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.params.userId });
    const income = await Income.find({ user: req.params.userId });

    // Perform aggregation and generate reports here

    res.json({ expenses, income });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
