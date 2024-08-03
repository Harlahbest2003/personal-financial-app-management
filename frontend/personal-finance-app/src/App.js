








import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Dashboard from './components/Dashboard/Dashboard';

import ExpenseTracking from './components/ExpenseTracking';
import IncomeTracking from './components/IncomeTracking';
import Budgeting from './components/Budgeting';
import FinancialGoals from './components/FinancialGoals';
import Reports from './components/Reports';
import RecurringTransactions from './components/RecurringTransactions';
import Notifications from './components/Notifications';
import MultiCurrency from './components/MultiCurrency';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        

  <Route className="container mt-4 bg-success bg-opacity-50  rounded-3 shadow-3"
  path="/" element={<Dashboard />} />

    
        
        <Route path="/expense-tracking" element={<ExpenseTracking />} />
        <Route path="/income-tracking" element={<IncomeTracking />} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/financial-goals" element={<FinancialGoals />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/recurring-transactions" element={<RecurringTransactions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/multi-currency" element={<MultiCurrency />} />
      </Routes>
    </Router>
  );
};

export default App;


  
 





