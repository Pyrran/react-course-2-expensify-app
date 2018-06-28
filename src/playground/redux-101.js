import { createStore } from 'redux';

// Action generators - functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = ((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// Actions - an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// RESET - set the count equal to zero

// store.dispatch({
//   type: 'RESET',
// });

store.dispatch(resetCount());

// I'd like to decrement the count

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// Now set the count to a specific value

store.dispatch(setCount({ count: 101 }));

// store.dispatch({
//   type: 'SET',
//   count: 101,
// });

unsubscribe();
