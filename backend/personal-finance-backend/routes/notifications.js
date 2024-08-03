// routes/notifications.js
const express = require('express');
const router = express.Router();
const { createNotification, getNotifications } = require('../controllers/notificationsController');

router.post('/', createNotification);
router.get('/:userId', getNotifications);

module.exports = router;
