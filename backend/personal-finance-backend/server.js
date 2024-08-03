// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/income', require('./routes/income'));
app.use('/api/budget', require('./routes/budget'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/recurring', require('./routes/recurring'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/currency', require('./routes/currency'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
