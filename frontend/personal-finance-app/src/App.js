
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar'; 
import Dashboard from './components/Dashboard/Dashboard';

import ExpenseTracking from './components/ExpenseTracker';
import IncomeTracking from './components/IncomeTracker';
import Budgeting from './components/Budgeting';
import FinancialGoals from './components/FinancialGoals';
import Reports from './components/Reports';
import RecurringTransactions from './components/RecurringTransactions';
import Notifications from './components/Notifications';
import MultiCurrency from './components/MultiCurrency';
import Login from './components/Login';
import Register from './components/Register';
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className ="container mt-4 bg-success bg-opacity-50  rounded-3 shadow-3">
      
      <Routes>
      <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
    
        <Route path="/expense-tracking" element={<ExpenseTracking />} />
        <Route path="/income-tracking" element={<IncomeTracking />} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/financial-goals" element={<FinancialGoals />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/recurring-transactions" element={<RecurringTransactions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/multi-currency" element={<MultiCurrency />} />
      </Routes>
      </div>
    </Router>
  // <>
  // 
  // </>
  );
};

export default App;


  
 

