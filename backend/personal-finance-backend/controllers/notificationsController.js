// controllers/notificationsController.js
const Notification = require('../models/Notification');

// Create a notification
exports.createNotification = async (req, res) => {
  try {
    const { user, type, message } = req.body;

    const notification = new Notification({ user, type, message });
    await notification.save();

    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all notifications for a user
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.userId });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
