import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import "../styles/Account.css";
import { postSubmitHandler, getAllHandler } from '../api/services';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReCAPTCHA from 'react-google-recaptcha'
import OtpInput from 'react-otp-input';

const TouristAccount = () => {

  const baseURL = "https://localhost:44364/api/Tourist/AddTourist";
  const baseLoginURL = "https://localhost:44364/api/Tourist/Login";
  const baseURLForGetAllTourist = "https://localhost:44364/api/Tourist/GetAllTourists";

  const navigate = useNavigate();
  const [enteredUserName, setName] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [enteredConPassword, setConPassword] = useState('');
  const [enteredLogin, setLogin] = useState([]);
  const [tourists, setTourists] = useState({})
  var [modalContent, setText] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('')

  //For modal Popup
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [otp, setOtp] = useState('');
  const handleOtpOpen = () => setOpen(true);
  const handleOtpClose = () => setOpen(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const CpasswordChangeHandler = (event) => {
    setConPassword(event.target.value);
  };

  const emailLoginChangeHandler = (event) => {
    setOtp()
    // setLoginEmail(event.target.value);
    setLogin({ ...enteredLogin, ['Email']: event.target.value })
  };

  const passwordLoginChangeHandler = (event) => {
    // setLoginPassword(event.target.value);
    setLogin({ ...enteredLogin, ['Password']: event.target.value })
  };

  const setTouristData = () => {
    getAllHandler(baseURLForGetAllTourist).then((response) => {
      setTourists(response);
    });
  }

  useEffect(() => {
    setTouristData()
  }, []);

  function validateEmail(email) {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regex.test(email);
  }

  const submitActionHandler = (event) => {
    var flag = true;
    event.preventDefault();
    if (enteredConPassword !== "" && (enteredLogin.Email === "" || enteredLogin.Email === undefined)) {
      if (!validateEmail(enteredEmail)) {
        modalContent = "Invalid Email";
        setText(modalContent);
        handleOpen();
      }
      else {
        if (enteredConPassword === enteredPassword) {
          for (var i = 0; i < tourists.length; i++) {
            if (tourists[i].email.trim().toLowerCase() === enteredEmail.trim().toLowerCase()) {
              modalContent = tourists[i].email + " is already exists ";
              setText(modalContent);
              handleOpen();
              flag = false;
              break;
            }
          }
          if (flag === true) {
            postSubmitHandler(baseURL, {
              name: enteredUserName, email: enteredEmail, password: enteredPassword, confirmPassword: enteredConPassword
              , country: country, region: region, message: "Registered Successfully"
            })
            navigate("/home");
          }
        }
        else {
          modalContent = "password and confirm password do not match!";
          setText(modalContent);
          handleOpen();
        }
      }
    }
    else {
      if (!validateEmail(enteredLogin.Email)) {
        modalContent = "Invalid Email";
        setText(modalContent);
        handleOpen();
      }
      else {
        const val = tourists.filter(element => {
          return element.email.trim().toLowerCase() === enteredLogin.Email.trim().toLowerCase()
        })

        if (val.length == 1) {
          postSubmitHandler(baseLoginURL, {
            email: enteredLogin.Email, password: enteredLogin.Password, message: "Tourist Login Successfull!"
          }).then(res => {
            console.log(res);
            alert(res)
          })
          localStorage.setItem("Email", enteredLogin.Email);
          navigate("/home");
        }
        else {
          modalContent = enteredLogin.Email + " is not present in our database";
          setText(modalContent);
          handleOpen();
        }
      }
    }
  }

  const cancelHandler = () => {
    //reset the values of input fields
    setName('');
    setEmail('');
    navigate("/home");
  }

  function selectCountry(val) {
    setCountry(val);
  }

  function selectRegion(val) {
    setRegion(val);
  }

  const onChangeRecaptcha = (value) => {
    console.log("onChangeRecaptcha", JSON.stringify(value));
  }

  return (
    <Alert variant='primary' style={{ margin: "0px" }}>
      <OtpInput style={{ width: "2em" }} value={otp} onChange={setOtp} numInputs={4} renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Container style={{ marginTop: "4em", marginBottom: "10em" }}>
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            //onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Alert
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalContent}
              </Typography>
              <br />
              <button style={{ cursor: 'pointer' }} className="btn btn-danger " onClick={handleClose}>Close</button>
            </Box>
          </Modal>
        </div>

        <h3>My Account</h3>
        <div className='row' id="AccountId">
          <div class="col-sm">
            <h3>Register</h3>
            <Form onSubmit={submitActionHandler}>
              <Form.Group controlId="form.Name">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" value={enteredUserName} onChange={nameChangeHandler} placeholder="Enter User Name" required />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={enteredEmail} onChange={emailChangeHandler} placeholder="Enter Email" required />
              </Form.Group>
              <Form.Group controlId="form.Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" value={enteredPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required />
              </Form.Group>
              <Form.Group controlId="form.confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="text" value={enteredConPassword} onChange={CpasswordChangeHandler} placeholder="Confirm Password" required />
              </Form.Group>

              <Form.Group controlId="form.Country">
                <Form.Label class="dropdown">Country</Form.Label>
                <CountryDropdown type="button" className="form-control dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                  value={country}
                  onChange={(val) => selectCountry(val)} />
              </Form.Group>
              <Form.Group controlId="form.Region">
                <Form.Label class="dropdown">Region</Form.Label>
                <RegionDropdown
                  type="button" className="form-control dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                  country={country}
                  value={region}
                  onChange={(val) => selectRegion(val)} />
              </Form.Group>
              <br></br>
              <Button type='submit'>Add Tourist</Button>
              &nbsp;&nbsp;&nbsp;
              <Button type='submit' onClick={() => cancelHandler()}>Cancel</Button>
            </Form>
          </div>
          <div class="col-sm">
            <h3>Login</h3>
            <Form onSubmit={submitActionHandler}>
              <Form.Group controlId="form.Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={enteredLogin.userLoginEmail} onChange={emailLoginChangeHandler} placeholder="Enter Email" required />
              </Form.Group>
              <Form.Group controlId="form.Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" value={enteredLogin.userLoginPassword} onChange={passwordLoginChangeHandler} placeholder="Enter Password" required />
              </Form.Group>
              <br></br>
              <span>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</span>

              {/* <ReCAPTCHA
          onChange={onChangeRecaptcha}
          sitekey="6Lc7SOseAAAAAHBh-joEdg_fmL4wiJXVW8h3lUIU"
        /> */}
              <ReCAPTCHA
                onChange={onChangeRecaptcha}
                sitekey={process.env.REACT_APP_SITE_KEY}
              // ref={captchaReference}
              />
              <Button type='submit' >Login</Button>
              &nbsp;&nbsp;&nbsp;
              <Button type='submit' onClick={() => cancelHandler()}>Cancel</Button>
            </Form>
          </div>
        </div>
      </Container>
    </Alert>
  );
}
export default TouristAccount;