import { createStore } from 'redux';

// Action  generators - function that return action objects

// const add = ({ a, b }, c) => a + b * c;

// console.log(add({ a: 2, b: 5 }, 1000));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET': {
      return {
        count: action.count
      };
    }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount({ incrementBy: 10000 }));

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 5
// });

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 90 }));

store.dispatch(setCount({ count: 101 }));
store.dispatch(resetCount());
