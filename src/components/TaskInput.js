// src/components/TaskInput.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/actions';
// import { Button, InputGroup, FormControl } from 'react-bootstrap';

// const TaskInput = () => {
//   const [task, setTask] = useState('');
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (task.trim()) {
//       dispatch(addTask(task));
//       setTask('');
//     }
//   };

//   return (
//     <InputGroup className="mb-3">
//       <FormControl
//         placeholder="Enter a task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
//       />
//       <Button variant="primary" onClick={handleAddTask}>
//         Add Task
//       </Button>
//     </InputGroup>
//   );
// };

// export default TaskInput;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() && date) {
      dispatch(addTask(task, date));
      setTask('');
      setDate('');
    }
  };

  return (
    <>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
      </InputGroup>
      <InputGroup className="mb-4">
        <FormControl
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </InputGroup>
    </>
  );
};

export default TaskInput;
