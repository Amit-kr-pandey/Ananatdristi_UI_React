import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css";
import { removeByIdHandler, getAllHandler } from '../api/services';


const EmployeeDataTable = () => {
  const navigate = useNavigate();
  const baseURLForGetAllEmployee = "https://localhost:44364/api/Employee/GetAllEmployees";
  const baseURLForRemoveEmployee = "https://localhost:44364/api/Employee/DeleteEmployee";
  const baseURLForRemoveAllEmployee = "https://localhost:44364/api/Employee/RemoveAllEmployees";
  const [employees, setEmployees] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = employees.slice(firstIndex, lastIndex);
  const npage = Math.ceil(employees.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const setEmployeeData = () => {
    getAllHandler(baseURLForGetAllEmployee).then((response) => {
      setEmployees(response);
    });
  }

  useEffect(() => { setEmployeeData(); }, []);

  const removeEmployee = (id) => {
    removeByIdHandler(baseURLForRemoveEmployee, id);
    setEmployeeData();
    navigate('/read')
    // axios.delete(baseURLForRemoveEmployee +'/'+ id).then((response) => {
    //   alert("Employee record " + id + " deleted!");
    //   setEmployeeData();
    //   navigate('/read')
    // }).catch(error => {
    //   alert("Error Ocurred in removeEmployee:" + error);
    // });
  }

  const removeAllEmployee = () => {
    axios.delete(baseURLForRemoveAllEmployee).then((response) => {
      alert("All Employees deleted!");
      setEmployeeData();
      navigate('/read')
    }).catch(error => {
      alert("Error Ocurred in removeEmployee:" + error);
    });
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Employee
        </button>
      </nav>
      <br></br>
      <div className="col-md-6">
        <h4>Employees List</h4>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    records && records.map((employee, index) => (
                      <tr>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.name}</td>
                        <td>{employee.role}</td>
                        <td className='ActionClass'>
                          <Link to={"/view/" + employee.id}> <i id="boot-icon" className="bi bi-view-list"></i>
                          </Link>

                          <Link to={"/edit/" + employee.id}> <i id="boot-icon" className="bi bi-pencil-square"></i>
                          </Link>

                          <button
                            onClick={() => removeEmployee(employee.id)} className="button"
                          > <i className="bi bi-trash"> </i>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <nav>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a href='#' className='page-link' onClick={prePage}>
                      prev
                    </a>
                  </li>
                  {
                    numbers.map((n, i) => (
                      <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                        <a href='#' className='page-link' onClick={() => changeCPage(n)}>{n}</a>

                      </li>
                    ))
                  }
                  <li className='page-item'>
                    <a href='#' className='page-link' onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-danger"
          onClick={() => removeAllEmployee()}>
          Remove All
        </button>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
}
export default EmployeeDataTable;