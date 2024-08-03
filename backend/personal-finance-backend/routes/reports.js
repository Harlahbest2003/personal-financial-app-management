// routes/reports.js
const express = require('express');
const router = express.Router();
const { getReports } = require('../controllers/reportsController');

router.get('/:userId', getReports);

module.exports = router;
