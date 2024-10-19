import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import profilepic1 from '../assets/images/img2.png'
import './home.css'


function Home() {
  return (
    <>
       <div id='home' className="container-fluid bg-body-danger">
        <Row className="justify-content-between align-items-center">
          <Col sm={12} md={6} lg={4} className="text-center text-md-start order-2 order-md-1 home-left">
            <h5>Hello, I'm</h5>
            <h1 className='fw-bolder'>DINU K BINU</h1>
            <h4>FULL STACK DEVELOPER</h4>
            <div className="mt-3 d-none d-md-block"> 
            <a href="https://github.com/Dinuthomass" target='_blank' style={{textDecoration:"none",color: "inherit" }}><Button variant="outline-dark" className="me-2">
                <i className="fa-brands fa-github" ></i>
              </Button></a>
              <a href="https://www.linkedin.com/in/dinu-k-binu-82078a313/" target='_blank' style={{textDecoration:"none",color: "inherit" }}><Button variant="outline-dark" className="me-2">
              <i class="fa-brands fa-linkedin"></i>
            </Button></a>
            </div>
            <div className="mt-3 d-none d-md-block download-cv">
            <a href="./dinucv.pdf" style={{textDecoration:"none",color:"inherit"}} target='_blank'><Button variant="outline-dark"> Download CV </Button></a>
            </div>
          </Col>
          
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center order-1 order-md-2 home-right">
            <img src={profilepic1} alt="Profile" width={"100%"} style={{ marginBottom: "30px"}} />
          </Col>
          
          <Col sm={12} className="text-center mt-3 d-md-none order-3 home-center"> 
          <a href="https://github.com/Dinuthomass" target='_blank' style={{textDecoration:"none",color: "inherit" }}><Button variant="outline-dark" className="me-2">
                <i className="fa-brands fa-github" ></i>
              </Button></a>
              <a href="https://www.linkedin.com/in/dinu-k-binu-82078a313/" target='_blank' style={{textDecoration:"none",color: "inherit" }}><Button variant="outline-dark" className="me-2">
              <i class="fa-brands fa-linkedin"></i>
            </Button></a>
            <div className="mt-3 download-cv" >
            <a href="./dinucv.pdf" style={{textDecoration:"none",color:"inherit"}} target='_blank'><Button variant="outline-dark"> Download CV </Button></a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
