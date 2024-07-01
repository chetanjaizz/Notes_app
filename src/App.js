// import React from 'react';
// import TaskInput from './components/TaskInput';
// import TaskList from './components/TaskList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { Container, Row, Col } from 'react-bootstrap';

// const App = () => {
//   return (
//     <Container >
//       <Row className="justify-content-md-center">
//         <Col md="auto">
//           <h1 style={{padding : "50px" , fontWeight : "bolder"}}>To-Do List</h1>
//           <TaskInput />
//           <TaskList />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskInput from './components/TaskInput';
import TaskListPage from './components/TaskListPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Container>
        {/* <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">To-Do App</Navbar.Brand>
          <Nav className="mr-auto">
            
          </Nav>
        </Navbar> */}
        
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 style={{ padding: "50px", fontWeight: "bolder" }}>Notes - App</h1>
            <Routes>
              <Route path="/" element={<TaskInput />} />
              <Route path="/tasks" element={<TaskListPage />} />
            </Routes>
          </Col>
        </Row>

        <div style ={{display : "flex", justifyContent : "center", paddingTop : "30px"}}>
            <button class="btn btn-info"><Nav.Link as={Link} to="/" style={{ margin: '0 10px', fontSize: '1.5rem' }}>Add New</Nav.Link></button>
            <button class="btn btn-info"><Nav.Link as={Link} to="/tasks" style={{ margin: '0 10px', fontSize: '1.5rem' }}>Show Notes</Nav.Link></button>
        </div>
      </Container>
    </Router>
  );
};

export default App;
