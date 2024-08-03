// models/RecurringTransaction.js
const mongoose = require('mongoose');

const RecurringTransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  frequency: { type: String, required: true }, // e.g., daily, weekly, monthly
  nextDate: { type: Date, required: true },
  description: { type: String }
});

module.exports = mongoose.model('RecurringTransaction', RecurringTransactionSchema);
