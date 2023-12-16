import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeDataTable from './EmployeeDataTable';
import ViewEmployee from './ViewEmployee';
import Home from './Home';
import Donate from './Donate';
import Spinner from 'react-bootstrap/Spinner';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
import TouristAccount from './TouristAccount';
import { getAllHandler } from '../api/services';
import Contact from '../components/Contact';
import About from '../components/About';
import Maheshwar_Dham from '../components/MaheshwarDham';


function NavBar() {
  const navigate = useNavigate();
  const baseURLForGetAllTourist = "https://localhost:44364/api/Tourist/GetAllTourists";
  const [tourists, setTourists] = useState([])
  const cursorStyle = {
    cursorStyle: "pointer"
  }

  const userName = tourists && tourists.filter((element, index) => element.email == localStorage.getItem('Email'))[0]?.name;

  const setTouristData = () => {
    getAllHandler(baseURLForGetAllTourist).then((response) => {
      setTourists(response);
      //console.log(response)
    });
  }

  useEffect(() => {
    setTouristData()
  }, []);

  const logOut = () =>{
    localStorage.removeItem("Email");
    navigate("/home");
  }
  
  return (
    <div className="nave">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                {/* <a class="nav-link" ><Link to="/home">Home</Link> */}
                <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/home")}> Home </a>
              </li>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="About"
                menuVariant="dark"
              >
                <NavDropdown.Item > <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/About")}> About Us </a></NavDropdown.Item>
                <NavDropdown.Item > <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/Maheshwar_Dham")}> Maheshwar Dham </a></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shakti Peeth</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  Temple Campus
                </NavDropdown.Item>
              </NavDropdown>
              <li className="nav-item">
                {/* <a class="nav-link "><Link to="/Contact">Contact</Link></a> */}
                <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/Contact")}> Contact </a>
              </li>

              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Tourist Info"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <li className="nav-item">
                {/* <a class="nav-link" ><Link to="/Donate">Donate</Link></a> */}
                <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/Donate")}> Donate </a>

              </li>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Account"
                menuVariant="dark"
              >
                <NavDropdown.Item ><a className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/TouristAccount")}> My Account </a></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </ul>

            <form {...localStorage.getItem("Email") == null ? { className: "d-flex" } : { style: { display: "none" }}}>
              <Form.Control type="text" placeholder="Search" required />
              <button className="btn btn-primary" type="button">Search</button>
            </form>
            <div {...localStorage.getItem("Email") != null ? { className: "row" } : { style: { display: "none" }}}>
              {/* {tourists && tourists.filter((element,index) => { */}
              <div className="col-sm-12" style={{margin: "9px 0px 9px 0px"}}>
                <label id="textID">welcome: {userName}</label>
              
                <button onClick={logOut} {...localStorage.getItem("Email") != null ? { className: "btn btn-info btn-sm" } : { style: { display: "none" }}}>
                  <span className="glyphicon glyphicon-log-out"></span> Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <div>
        <Spinner animation="border" variant="primary" hidden />
        <Routes>
          <Route path="/" element={<Navigate to="/read" />} />
          <Route exact path="/create" element={<AddEmployee />} />
          <Route exact path="/read" element={<EmployeeDataTable />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/view/:id" element={<ViewEmployee />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/TouristAccount" element={<TouristAccount />} />
          <Route path="/About" element={<About />} />    
          <Route path="/Maheshwar_Dham" element={<Maheshwar_Dham />} />
        </Routes>
      </div>
    </div >
  )
}

export default NavBar;