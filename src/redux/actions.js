// // src/redux/actions.js
// export const ADD_TASK = 'ADD_TASK';
// export const DELETE_TASK = 'DELETE_TASK';
// export const EDIT_TASK = 'EDIT_TASK';
// export const TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK';

// export const addTask = (task) => ({
//   type: ADD_TASK,
//   payload: task,
// });

// export const deleteTask = (id) => ({
//   type: DELETE_TASK,
//   payload: id,
// });

// export const editTask = (id, newTask) => ({
//   type: EDIT_TASK,
//   payload: { id, newTask },
// });

// export const toggleCompleteTask = (id) => ({
//   type: TOGGLE_COMPLETE_TASK,
//   payload: id,
// });

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK';

export const addTask = (task, date) => ({
  type: ADD_TASK,
  payload: { task, date },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (id, newTask, newDate) => ({
  type: EDIT_TASK,
  payload: { id, newTask, newDate },
});

export const toggleCompleteTask = (id) => ({
  type: TOGGLE_COMPLETE_TASK,
  payload: id,
});

