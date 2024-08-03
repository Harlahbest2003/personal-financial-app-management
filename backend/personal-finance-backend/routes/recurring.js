// routes/recurring.js
const express = require('express');
const router = express.Router();
const { createRecurring, getRecurring } = require('../controllers/recurringController');

router.post('/', createRecurring);
router.get('/:userId', getRecurring);

module.exports = router;
