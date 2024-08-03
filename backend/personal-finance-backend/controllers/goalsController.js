// controllers/goalsController.js
const Goal = require('../models/Goal');

// Create a goal
exports.createGoal = async (req, res) => {
  try {
    const { user, goal, amount, achieved, targetDate } = req.body;

    const newGoal = new Goal({ user, goal, amount, achieved, targetDate });
    await newGoal.save();

    res.status(201).json(newGoal);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all goals for a user
exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.params.userId });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update goal
exports.updateGoal = async (req, res) => {
  try {
    const { achieved } = req.body;
    const goal = await Goal.findById(req.params.id);
    if (goal) {
      goal.achieved = achieved || goal.achieved;
      await goal.save();
      res.json(goal);
    } else {
      res.status(404).json({ msg: 'Goal not found' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
