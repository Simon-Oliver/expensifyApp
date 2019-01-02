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

export default expensesReducer;
