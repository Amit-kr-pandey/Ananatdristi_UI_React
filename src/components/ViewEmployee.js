import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ViewForm = () => {
  const editURLForFill = "https://localhost:44364/api/Employee/GetEmpById"
  const navigate = useNavigate();
  const param = useParams();
  const [empId, setEmpId] = useState('');
  const [empName, setName] = useState('');
  const [empRole, setRole] = useState('');
  
 useEffect(() => {
  const Id = param.id;
  axios.get(editURLForFill+'/'+Id).then((response) => {
 
    const empData = response.data;
    setEmpId(empData.id);
    setName(empData.name);
    setRole(empData.role);

  }).catch(error => {
    alert("Error Ocurred getting employee detail:"+ error.data);
  });
 }, []);


  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const roleChangeHandler = (event) => {
    setRole(event.target.value);
  };

    return(
      <Alert variant='primary'>
      <Container>
      <Form id="data">
      <Form.Group  controlId="form.id">
            <Form.Label>Id</Form.Label>
            <Form.Control value={empId} readonly='readonly'/>
        </Form.Group>
        <Form.Group controlId="form.Name">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={empName} readonly='readonly' onChange={nameChangeHandler} placeholder="Enter User Name" required/>
        </Form.Group>
        <Form.Group  controlId="form.Role">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" value={empRole} readonly='readonly' onChange={roleChangeHandler} placeholder="Enter Role" required/>
        </Form.Group>
        <br></br>
        <Button type='submit' onClick={()=>navigate("/read")}>Cancel</Button>
      </Form>
    </Container>
    </Alert>

    );
}
export default ViewForm;