import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: '123456Lt',
      description: 'Rent',
      note: 'Final Payment',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
