import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import {postSubmitHandler} from '../api/services';

//import { navigator } from '@react-navigation';

// const reducer = (state,action) => {
//     switch(action.type) {
//         case 'ADD':
//             state = state + action.payload
//             break;
//         case "substract":
//             state = state - action.payload
//             break;
//     }
//     return state;
// };
// const store = createStore(reducer,1);

// store.subscribe(() => {
//     console.log("store updated" ,store.getState());
// });

// store.dispatch({
//     type:"ADD",
//     payload: 100
// });

// store.dispatch({
//     type:"ADD",
//     payload: 22
// });

// store.dispatch({
//     type:"substract",
//     payload:80
// });

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const addUrlForContactDetail = "https://localhost:44364/api/ContactDetail/AddContact";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, phone } = e.target.elements;
    let details = {name: name.value, email: email.value,message: message.value,phone: phone.value};
    
    postSubmitHandler(addUrlForContactDetail,details).then(res => {
      console.log(res);
      alert(res)
    }).catch(error => {
      alert("error = "+error)
    })
  };

  // const componentDidMount = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }

  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Current Location " + position);
  //   });
  // }

  return (
    <div className='ContactClass' style={{ display: "flex", flexDirection: "column", padding: "2em 2em 10em 2em", background: "aliceblue" }}>
      <div className='row' style={{ textAlign: "center", margin: "5em 0em 6em" }}>
        <div className='col-sm-4'>
          <span className="bi bi-telephone-plus-fill" style={{ fontSize: "3rem", color: "blue" }}></span> <h3>98765435678</h3>
        </div>
        <div className='col-sm-4'>
          <span className="bi bi-envelope-x-fill" style={{ fontSize: "3rem", color: "red" }}></span> <h3>example@email.com</h3>
        </div>
        <div className='col-sm-4'>
          <span className="bi bi-geo-alt-fill" style={{ fontSize: "3rem", color: "green" }}> <a  href = "https://goo.gl/maps/w6NBciHj1NKtCyUx5"/> </span>  <h3>Nirman Vihar ,Delhi</h3>
        </div>
      </div>
      {/* style={{ display: "flex", justifyContent: "center", margin: "4em 0em 8em 0em" }} */}
      <div className='row' style={{ padding: "22px 0px 0px 0px" }}>
        <div className='col-sm-6' style={{border:"inset"}} >
          <Form onSubmit={handleSubmit} style={{ padding: "61px", background: "" }}>
            <Form.Label style={{ textDecoration: "underline", fontSize: "medium", color: "black" }}>Get in Touch</Form.Label>
            <Form.Group >
              <Form.Label>Name : </Form.Label>
              <Form.Control type="text" id="name" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group >
              <Form.Label>Email : </Form.Label>
              <Form.Control type="email" id="email" placeholder="Enter Email" required />
            </Form.Group>
            <Form.Group >
              <Form.Label>Phone : </Form.Label>
              <Form.Control type="phone" id="phone" placeholder="Enter phone" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message : </Form.Label>
              {/* <Form.Control type="textarea" rows={4} cols={40}  placeholder="Enter message" required /> */}
              <textarea className='form-control' name="message" id="message" rows={4} cols={40} />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around", margin: "13px 0px 0px 0px" }}>
              <Button type='submit'>{status}</Button>
            </div>
          </Form>
        </div>
        <div className='col-sm-6' style={{border:"inset"}} >
          <div className='newDiv'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.7887853690213!2d86.69761439999999!3d24.492774100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1173dc5e6aad1%3A0x5ab25f226000fe32!2sDeoghar%20Mandir!5e0!3m2!1sen!2sin!4v1693892258559!5m2!1sen!2sin"
              style={{ width: "600px", height: "430px", border: "0" }}
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;