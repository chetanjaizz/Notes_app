

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
  const ExampleButton = () => {
    const handleClick = () => {
      alert('Button clicked!');
    }
  };
  return (
    <>
      <InputGroup className="mb-4">
        <FormControl
          style={{height : "80px"}}
          placeholder="Make your note"
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
          Add Note
        </Button>
      </InputGroup>
    </>
  );
};

export default TaskInput;
