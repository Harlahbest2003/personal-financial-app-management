// models/Budget.js
const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  spent: { type: Number, default: 0 }
});

module.exports = mongoose.model('Budget', BudgetSchema);
