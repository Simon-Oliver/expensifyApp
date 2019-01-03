import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensListFilters from './ExpensesListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
