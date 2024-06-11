import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { getItem } from '../Helper/Helper';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";


function DisplayData() {


  const [EmployeeData, setEmployeeData] = useState(getItem("employeedata") || []);
  const [search, setSearch] = useState('');

  const handlesort = (type, key) => {
    let sortdata;

    switch (type) {
      case 'asc':
        sortdata = [...EmployeeData].sort((empfname, empsname) => empfname[key].localeCompare(empsname[key]));
        break;
      case 'dac':
        sortdata = [...EmployeeData].sort((empfname, empsname) => empsname[key].localeCompare(empfname[key]));
        break;
      default:
        return;
    }

    setEmployeeData(sortdata);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let rec = getItem("employeedata");
    let serc = rec.filter((record) => {
      return record.firstname.toLowerCase().includes(search.toLowerCase());
    });

    setEmployeeData(serc);
  }

 

  return (
    <Container className='data-table'>
      <Row className='bg-light row-gap-2 justify-content-end'>
        <div className='d-flex justify-content-end align-items-center'>
          <Form noValidate className='d-flex justify-content-end align-items-center m-0' onSubmit={handleSubmit}>
            <Form.Control
              required
              className='rounded-0'
              type="search"
              placeholder="Search Name"
              name='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-primary rounded-0'>Search</button>
          </Form>
        </div>

        <div className="panel-heading border">
          <h2 className='bg-info text-black py-2'>
            Data table of Student list
          </h2>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-striped table-condensed datatable">
            <thead>
              <tr>
                <th>
                  <button className='button1' onClick={() => handlesort("dac", "id")}><FaSortAlphaDownAlt /></button>
                  Employee id
                  <button className='button1' onClick={() => handlesort("asc", "id")}><FaSortAlphaDown /></button>
                </th>

                <th>
                  <button className='button1' onClick={() => handlesort("dac", "firstname")}><FaSortAlphaDownAlt /></button>
                  Employee Name
                  <button className='button1' onClick={() => handlesort("asc", "firstname")}><FaSortAlphaDown /></button>
                </th>

                <th>
                  <button className='button1' onClick={() => handlesort("dac", "email")}><FaSortAlphaDownAlt /></button>
                  Email
                  <button className='button1' onClick={() => handlesort("asc", "email")}><FaSortAlphaDown /></button>
                </th>

                <th>
                  <button className='button1' onClick={() => handlesort("dac", "phone")}><FaSortAlphaDownAlt /></button>
                  Mobile No
                  <button className='button1' onClick={() => handlesort("asc", "phone")}><FaSortAlphaDown /></button>
                </th>
                <th>
                  <button className='button1' onClick={() => handlesort("dac", "address")}><FaSortAlphaDownAlt /></button>
                  Address
                  <button className='button1' onClick={() => handlesort("asc", "address")}><FaSortAlphaDown /></button>
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                EmployeeData.map((emp)=>{
                  return(
                    <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.firstname + " " + emp.lastname}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.address}</td>
                    <td className='d-flex'>
                      <div><FaEdit /></div>
                      <div><RiDeleteBin6Line /></div>
                    </td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  )
}

export default DisplayData;
