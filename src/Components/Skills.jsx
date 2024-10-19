
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './skills.css'; 

function Skills() {
  return (
    <>
      <div id='skills' className="container-fluid">
        <h2 className="text-center fw-bolder mb-4">SKILLS</h2>

        <Row>
          <div className="col-md-6 d-flex justify-content-center mb-5">
            <div className="position-relative rounded border p-4 text-center mb-5 skill-card">
              <Row>
                <h4 className="text-center mb-4">Frontend Development</h4>
                <Col xs={12} md={6}>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>HTML</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>CSS</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>JavaScript</h6>
                </Col>
                <Col xs={12} md={6}>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>React</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Angular</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Bootstrap</h6>
                </Col>
              </Row>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center mb-5">
            <div className="position-relative rounded border p-4 text-center mb-5 skill-card">
              <Row>
                <h4 className="text-center mb-4">Backend Development</h4>
                <Col xs={12} md={6}>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Express.js</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Next.js</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Firebase</h6>
                </Col>
                <Col xs={12} md={6}>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>SQL</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Java</h6>
                  <h6 className="d-flex align-items-center"><i className="fa-regular fa-circle-dot me-2"></i>Python</h6>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Skills;
