
const express = require('express');
const router = express.Router();
const { addIncome, getIncome, deleteIncome } = require('../controllers/incomeController');

router.post('/', addIncome);
router.get('/:userId', getIncome);
router.delete('/:id', deleteIncome);

module.exports = router;
