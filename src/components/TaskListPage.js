// src/components/TaskListPage.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleCompleteTask } from '../redux/actions';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';

const TaskListPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEditTask = (id, task, date) => {
    const newTask = prompt("Edit task", task);
    const newDate = prompt("Edit date", date);
    if (newTask && newDate) {
      dispatch(editTask(id, newTask, newDate));
    }
  };

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item
          key={task.id}
          className={`d-flex justify-content-between align-items-center ${
            task.completed ? 'bg-success text-white' : ''
          }`
        }
        >
          <div >
            <span
              onClick={() => dispatch(toggleCompleteTask(task.id))}
              style={{ cursor: 'pointer' }}
            >
              {task.task}
            </span>
            <br />
            <small>{task.date}</small>
          </div>
          <ButtonGroup>
            <Button variant="warning" onClick={() => handleEditTask(task.id, task.task, task.date)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskListPage;
