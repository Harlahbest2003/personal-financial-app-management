
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const recurringRoutes = require('./routes/recurring');
const expensesRoutes = require('./routes/expenses');
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/users', require('./routes/users'));
// app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/expenses', expensesRoutes);
app.use('/api/income', require('./routes/income'));
app.use('/api/budget', require('./routes/budget'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/reports', require('./routes/reports'));

app.use('/api/recurring', recurringRoutes);
// app.use('/api/recurring', require('./routes/recurring'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/currency', require('./routes/currency'));

app.use('/api/auth', authRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
