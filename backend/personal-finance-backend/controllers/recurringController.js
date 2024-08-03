// controllers/recurringController.js
const RecurringTransaction = require('../models/RecurringTransaction');

// Create a recurring transaction
exports.createRecurring = async (req, res) => {
  try {
    const { user, amount, category, frequency, nextDate, description } = req.body;

    const recurring = new RecurringTransaction({ user, amount, category, frequency, nextDate, description });
    await recurring.save();

    res.status(201).json(recurring);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all recurring transactions for a user
exports.getRecurring = async (req, res) => {
  try {
    const recurring = await RecurringTransaction.find({ user: req.params.userId });
    res.json(recurring);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
