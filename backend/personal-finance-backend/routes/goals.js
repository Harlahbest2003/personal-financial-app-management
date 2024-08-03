// routes/goals.js
const express = require('express');
const router = express.Router();
const { createGoal, getGoals, updateGoal } = require('../controllers/goalsController');

router.post('/', createGoal);
router.get('/:userId', getGoals);
router.put('/:id', updateGoal);

module.exports = router;
