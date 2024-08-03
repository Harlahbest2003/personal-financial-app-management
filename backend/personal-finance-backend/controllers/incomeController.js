// controllers/incomeController.js
const Income = require('../models/Income');

// Add income
exports.addIncome = async (req, res) => {
  try {
    const { user, amount, source, date, description } = req.body;

    const income = new Income({ user, amount, source, date, description });
    await income.save();

    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all income for a user
exports.getIncome = async (req, res) => {
  try {
    const income = await Income.find({ user: req.params.userId });
    res.json(income);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete income
exports.deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Income deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
