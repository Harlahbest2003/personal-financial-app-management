// models/Goal.js
const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goal: { type: String, required: true },
  amount: { type: Number, required: true },
  achieved: { type: Number, default: 0 },
  targetDate: { type: Date, required: true }
});

module.exports = mongoose.model('Goal', GoalSchema);
