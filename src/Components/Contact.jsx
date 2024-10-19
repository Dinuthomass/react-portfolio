
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <>
      <div id='contacts' className="container-fluid">
        <h2 className="text-center fw-bolder mb-4">CONTACT ME</h2>
        <p className="text-center">Find me on the following platforms!</p>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="row rounded border mt-3 w-50 contact-card">
            <a href="mailto:dinuthomas066@gmail.com" style={{ textDecoration: "none" }}>
              <p className="text-center email-text">
                <i className="fa-solid fa-envelope me-3"></i>
                dinuthomas066@gmail.com
              </p>
            </a>
          </div>

          <div className="row rounded border mt-3 mb-5 w-50 contact-card">
            <a href="https://www.linkedin.com/in/dinu-k-binu-82078a313/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <p className="text-center linkedin-text">
                <i className="fa-brands fa-linkedin me-3"></i>
                www.linkedin.com/dinu-k-binu
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
