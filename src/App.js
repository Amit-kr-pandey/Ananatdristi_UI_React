import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';

function App() {
  // const navigate = useNavigate();
  // const cursorStyle ={
  //   cursorStyle:"pointer"
  // }
  return (

    <NavBar />
    // <div class="nave">
    //   <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="mynavbar">
    //         <ul class="navbar-nav me-auto">
    //           <li class="nav-item">
    //             {/* <a class="nav-link" ><Link to="/home">Home</Link> */}
    //             <a class="nav-link" style={{cursor: "pointer"}} onClick={() => navigate("/home")}> Home </a>
    //           </li>
    //           <NavDropdown
    //             id="nav-dropdown-dark-example"
    //             title="About"
    //             menuVariant="dark"
    //           >
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //           <li class="nav-item">
    //             {/* <a class="nav-link "><Link to="/Contact">Contact</Link></a> */}
    //             <a class="nav-link" style={{cursor: "pointer"}} onClick={() => navigate("/Contact")}> Contact </a>
    //           </li>

    //           <NavDropdown
    //             id="nav-dropdown-dark-example"
    //             title="Tourist Info"
    //             menuVariant="dark"
    //           >
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //           <li class="nav-item">
    //             {/* <a class="nav-link" ><Link to="/Donate">Donate</Link></a> */}
    //             <a class="nav-link" style={{cursor: "pointer"}} onClick={() => navigate("/Donate")}> Donate </a>
                
    //           </li>
    //           <NavDropdown
    //             id="nav-dropdown-dark-example"
    //             title="Account"
    //             menuVariant="dark"
    //           >
    //             <NavDropdown.Item ><a class="nav-link" style={{cursor: "pointer"}} onClick={() => navigate("/TouristAccount")}> My Account </a></NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </ul>
    //         <form class="d-flex">
    //           <Form.Control type="text" placeholder="Search" required />
    //           <button class="btn btn-primary" type="button">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    //   <Outlet />
    //   <div>
    //     <Spinner animation="border" variant="primary" hidden />
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/read" />} />
    //       <Route exact path="/create" element={<AddEmployee />} />
    //       <Route exact path="/read" element={<EmployeeDataTable />} />
    //       <Route path="/edit/:id" element={<EditEmployee />} />
    //       <Route path="/view/:id" element={<ViewEmployee />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/Contact" element={<Contact />} />
    //       <Route path="/Donate" element={<Donate />} />
    //       <Route path="/TouristAccount" element={<TouristAccount />} />
    //     </Routes>
    //   </div>
    // </div>
  );
}

export default App;