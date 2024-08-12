// controllers/expensesController.js
const Expense = require('../models/Expense'); // Adjust the path as necessary

const addExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const { userId } = req.params;
    const expenses = await Expense.find({ userId });
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addExpense, getExpenses, deleteExpense };
