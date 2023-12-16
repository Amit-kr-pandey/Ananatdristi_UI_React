import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { services, postSubmitHandler } from "../api/services"
import { useNavigate } from "react-router-dom";
const Donate = () => {

    const navigate = useNavigate();
    const [inputValue, setValue] = useState('');
    const [show, setShow] = React.useState(Boolean);
    const baseURLForAddDonation = "https://localhost:44364/api/Donation/AddDonationAmount";
    useEffect(() => { setShow(true); }, []);

    const submitActionHandler = (event) => {
        console.log(event.target[0].value);
        event.preventDefault();
        var Object = { donateAmount: event.target[0].value, Email: localStorage.getItem("Email"), message: "Thanks for your donation !" };
        if (localStorage.getItem("Email") == null) {
            alert("please register for donation ");
            navigate("/TouristAccount");
        }
        else {
            postSubmitHandler(baseURLForAddDonation, Object);
            navigate("/read");
        }
    };

    const setClass = () => {
        //event.target.className = "btn btn-outline-warning";
        setShow(true);
    }

    const setInputVal = (event) => {
        setValue(event.target.value);
        event.target.className = "btn btn-outline-primary";
    }

    return (
        <div className='container' style={{ marginBottom: "10em", marginTop: "6em" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, marginTop: "27px" }}>

                <div className="elementor-widget-container" style={{ display: "flex", justifyContent: "center" }}>
                    <img decoding="async" fetchpriority="high" width="450" height="245" alt="Thank You" data-srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU 250w, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU 12w" data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU" data-sizes="(max-width: 250px) 100vw, 250px" class="attachment-large size-large wp-image-4649 lazyloaded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU"
                        sizes="(max-width: 250px) 100vw, 250px" srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU 250w, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU 12w" /><noscript>
                        <img decoding="async" fetchpriority="high" width="250" height="245" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU" class="attachment-large size-large wp-image-4649" alt="Thank You" srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU 250w, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpy-p-4HEzS4epzsnvyJP6muCyGeMTHEl24HtYV1U88P9m4_60O9TDwZM9jG1_15zfcW8&usqp=CAU 12w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                </div>

                <div>
                    <h3>Make a Donation</h3>
                    <span>You can make a donation here</span>
                    <br />
                    <NavDropdown.Divider />
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ margin: "10px", width: "200px" }} value={101} onClick={(e) => setInputVal(e)} >₹101</button>
                                </td>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ margin: "10px", width: "200px" }} value={151} onClick={(e) => setInputVal(e)} >₹151</button>
                                </td>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ margin: "10px", width: "200px" }} value={201} onClick={(e) => setInputVal(e)} >₹201</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ width: "200px", margin: "10px" }} value={501} onClick={(e) => setInputVal(e)} >₹501</button>
                                </td>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ width: "200px", margin: "10px" }} value={1001} onClick={(e) => setInputVal(e)} >₹1001</button>
                                </td>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ width: "200px", margin: "10px" }} value={1501} onClick={(e) => setInputVal(e)} >₹1501</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ margin: "10px", width: "200px" }} value={2100} onClick={(e) => setInputVal(e)} >₹2100</button>
                                </td>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ margin: "10px", width: "200px" }} value={3100} onClick={(e) => setInputVal(e)} >₹3100</button>
                                </td>
                                <td>
                                    <button type="button" onChange={setClass} className={show ? "btn btn-outline-warning" : "btn btn-outline-primary"} style={{ margin: "10px", width: "200px" }} value={4100} onClick={(e) => setInputVal(e)} >₹4100</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <Form onSubmit={submitActionHandler}>
                        <div className='fp_donation_anonymous_1'>
                            <div className='row'>
                                <div className='col-sm-7'>
                                    <label> Custom Amount ₹ : </label>
                                    <input type="number" min="0" name="fp_donation_amount" style={{ textAlign: "center" }} value={inputValue} id="fp_donation_amount" class="fp_donation_amount_predefined_buttons" />
                                </div>
                                <div className='col-sm-5'>
                                    <input type="checkbox" name="fp_donation_anonymous" className="sumo_donation_anonymous_checkbox" /> <label class="make_donation_label" style={{ fontSize: "16px", paddingLeft: "5px" }}> Mark as Anonymous (optional) </label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-sm-2 mx-auto" style={{ margin: "2pc" }}>
                                    <input type="submit" id="fp_donation_submit" name="fp_donation_submit" value="Donate" className="btn btn-warning"></input>
                                </div>
                                {/* style={{ margin: "2em 2em 2em 9em" }} */}
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Donate;