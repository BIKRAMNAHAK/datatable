import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './createform.css';
import generateUniqueId from 'generate-unique-id';
import { getItem } from '../Helper/Helper.js';
import { useNavigate } from 'react-router-dom';

function CreateForm() {
  let navigate = useNavigate();

  const [Employees, setEmployees] = useState({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
  });

  const EmployeData = getItem("employeedata") || [];
  const [Employeeviewdata, setEmployeeviewdata] = useState(EmployeData);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployees({ ...Employees, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeId = {
      ...Employees,
      id: generateUniqueId({ length: 4, useLetters: false }),
    };

    setEmployeeviewdata([...Employeeviewdata, employeeId]);
    setIsSubmit(true);

    setEmployees({
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  useEffect(() => {
    localStorage.setItem("employeedata", JSON.stringify(Employeeviewdata));
  }, [Employeeviewdata]);

  useEffect(() => {
    if (isSubmit) {
      navigate("/DisplayData");
    }
  }, [isSubmit, navigate]);

  return (
    <section>
      <Container className='mt-5 p-0'>
        <h1 className='border-bottom border-warning pb-3 bg-blueviolet'>Employee Registration Form</h1>
        <Row>
          <div className="col-5 body-color p-4 rounded-4">
            <form action="/submit_registration" method="post" onSubmit={handleSubmit}>
              <div className='d-flex column-gap-2'>
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" placeholder='Enter your First Name' id="first-name" name="firstname" value={Employees.firstname} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" placeholder='Enter your Last Name' id="last-name" name="lastname" value={Employees.lastname} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter your Email' id="email" name="email" value={Employees.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" placeholder='Enter your 10 digit mobile number' id="phone" name="phone" value={Employees.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" value={Employees.address} rows="4" onChange={handleChange} ></textarea>
              </div>
              <div className='d-flex justify-content-center align-items-center column-gap-3'>
                <button type="submit" className='rounded-pill'>Register</button>
                <button type="reset" className='rounded-pill bg-danger text-white'>Clear</button>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default CreateForm;
