import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import {  postSubmitHandler } from '../api/services';

const EmployeeForm = () => {
  const baseURL = "https://localhost:44364/api/Employee/AddEmployee";
  const navigate = useNavigate();
  const [enteredName, setName] = useState('');
  const [enteredRole, setRole] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const roleChangeHandler = (event) => {
    setRole(event.target.value);
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    var Object = { name: enteredName, role: enteredRole, message: "Employee Added" };
    postSubmitHandler(baseURL, Object);
    navigate("/read");
  };

  const cancelHandler = () => {
    //reset the values of input fields
    setName('');
    setRole('');
    navigate("/read");
  }
  return (
    <Alert variant='primary'>
      <Container>
        <Form onSubmit={submitActionHandler}>
          <Form.Group controlId="form.Name">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Enter User Name" required />
          </Form.Group>
          <Form.Group controlId="form.Role">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" value={enteredRole} onChange={roleChangeHandler} placeholder="Enter Role" required />
          </Form.Group>
          <br></br>
          <Button type='submit'>Add Employee</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type='submit' onClick={() => cancelHandler()}>Cancel</Button>
        </Form>
      </Container>
    </Alert>
  );
}
export default EmployeeForm;