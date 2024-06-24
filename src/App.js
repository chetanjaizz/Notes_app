// src/App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 style={{padding : "50px" , fontWeight : "bolder"}}>To-Do List</h1>
          <TaskInput />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
