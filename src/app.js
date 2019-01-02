import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selector/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 800, createdAt: 91000 }));

store.dispatch(
  addExpense({
    description: 'Electricity Bill',
    amount: 900800,
    createdAt: 100
  })
);
store.dispatch(setTextFilter('ele'));

const state = store.getState();
const visiblenexpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visiblenexpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
