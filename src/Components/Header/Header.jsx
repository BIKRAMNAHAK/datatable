import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavSection from './NavSection'
import ButtonSec from './ButtonSec'


function Header() {
  return (
    <>
      <div className="header fixed-top">

        <Container fluid className='px-5'>
          <Row className='align-items-center'>
            <div className="col-2">
              <div className=''>
                <span className='text-success fw-bold fs-3 text-decoration-underline'>Registation</span><span className='text-warning fw-bold fs-4'>Form</span>
              </div>
            </div>
            <div className="col-6">
              <NavSection />
            </div>
            <div className="col-4 d-flex align-items-center ">
              <div className='col-7'>
                <ButtonSec />
              </div>
              <div className="col-5 text-end">
                <div className='btn btn-primary w-50 rounded-pill'>
                  Login
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Header
