import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { editSubmitHandler } from '../api/services';

const EmployeeForm = () => {

  const editURL = "https://localhost:44364/api/Employee/UpdateEmployee";
  const editURLForFill = "https://localhost:44364/api/Employee/GetEmpById"
  const navigate = useNavigate();
  const param = useParams();
  // const [empId, setEmpId] = useState('');
  // const [empName, setName] = useState('');
  // const [empRole, setRole] = useState('');
  const [userData, setUserData] = useState({});

  async function getVal() {
    const res = await fetch(editURLForFill + '/' + param.id, { method: "GET", mode: "cors" });
    const result = await res.json();
    result.error ? alert(result.error) : setUserData(result);
    console.log(result);
  }

  useEffect(() => {
    getVal();
  }, []);

  const nameChangeHandler = (event) => {
    setUserData({ ...userData, ["name"]: event.target.value }); //...userData it means it will copy all the value and update only on name.
  };

  const roleChangeHandler = (event) => {
    setUserData({ ...userData, ['role']: event.target.value }); //...userData it means it will copy all the value and update only on role.
  };

  const submitActionHandler = (event) => {
    // console.log(userData);
    editSubmitHandler(editURL, { id: userData.id, name: userData.name, role: userData.role })
    navigate('/read');
  };

  return (
    <Alert variant='primary'>
      <Container>
        <Form onSubmit={submitActionHandler} id="data">
          <Form.Group controlId="form.id">
            <Form.Label>Id</Form.Label>
            <Form.Control value={userData.id} readonly='readonly' />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" onChange={nameChangeHandler} value={userData.name} placeholder="Enter User Name" required />
          </Form.Group>
          <Form.Group controlId="form.Role">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" onChange={roleChangeHandler} value={userData.role} placeholder="Enter Role" required />
          </Form.Group>
          <br></br>
          <Button type='submit'>Update Employee</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type='submit' onClick={() => navigate("/read")}>Cancel</Button>
        </Form>
      </Container>
    </Alert>

  );
}
export default EmployeeForm;