import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearch } from "react-icons/io5";


function ButtonSec() {
  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline>
          <Row>
            <Col xs="auto" className='d-flex align-items-center'>
              <Form.Control
                type="search"
                placeholder="Search"
                className=" mr-sm-2"
              />
              <a href="">
                <IoSearch className='fs-4' />
              </a>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  )
}

export default ButtonSec
