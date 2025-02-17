// src/redux/store.js
import { createStore } from 'redux';
import taskReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const persistedState = loadState();
const store = createStore(taskReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
