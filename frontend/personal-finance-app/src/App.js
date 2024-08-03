
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Auth/Register';
import Login from './components/Auth/login';
import ExpenseTracker from './components/Dashboard/ExpenseTracker';
import IncomeTracker from './components/Dashboard/IncomeTracker';
import Budgeting from './components/Dashboard/Budgeting';
import FinancialGoals from './components/Dashboard/FinancialGoals';
import Reports from './components/Dashboard/Reports';
import RecurringTransactions from './components/Dashboard/RecurringTransactions';
import Notifications from './components/Dashboard/Notifications';
import MultiCurrency from './components/Dashboard/MultiCurrency';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/dashboard/income-tracker" element={<IncomeTracker />} />
        <Route path="/dashboard/budgeting" element={<Budgeting />} />
        <Route path="/dashboard/financial-goals" element={<FinancialGoals />} />
        <Route path="/dashboard/reports" element={<Reports />} />
        <Route path="/dashboard/recurring-transactions" element={<RecurringTransactions />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/multi-currency" element={<MultiCurrency />} />
      </Routes>
    </Router>
  );
};

export default App;
