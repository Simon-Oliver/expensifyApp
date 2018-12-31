import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

// Expenses Reducer

const expensesDefault = [];
const expensesReducer = (state = expensesDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.update
          };
        }
        return e;
      });
    default:
      return state;
  }
};

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// Filter Reducer
const filtersDefault = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: 'TEST', amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'COFFE', amount: 300 })
);

store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }));
store.dispatch(setTextFilter('THIS IS A FILTER TEST'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

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
