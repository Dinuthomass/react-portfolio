
import React from 'react';
import './about.css'; 

function About() {
  return (
    <div id="about" className="container-fluid p-5">
      <h2 className="text-center fw-bolder mb-5">About Me</h2>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mb-5">
          <div className="position-relative rounded border p-4 text-center" style={{ width: '80%' }}>
            <div className="position-absolute leftbox-experience" style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--bg-color)', borderRadius: '50%', padding: '10px' }}>
              <i className="fa-solid fa-award"></i>
            </div>
            <h4 className="mt-3 fw-bold">Experience</h4>
            <p><span className="fs-5 text-grey">1</span>+ years</p>
            <p className="text-grey">FullStack Developer</p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center mb-5">
          <div className="position-relative rounded border p-4 text-center" style={{ width: '80%' }}>
            <div className="position-absolute" style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--bg-color)', borderRadius: '50%', padding: '10px' }}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h4 className="mt-3 fw-bold">Education</h4>
            <p className="text-grey">MERN Stack</p>
            <p className="text-grey">Bachelor of Computer Science</p>
          </div>
        </div>
      </div>
      <div className="row container">
        <p>I am a passionate Full Stack Developer with a strong foundation in web technologies, recently graduated with a BCA from Calicut University in 2024. Currently, I am interning at Luminar Technolab in Kochi, where I gain hands-on experience in front-end and back-end development, collaborating with a talented team to create innovative solutions.</p>
      </div>
    </div>
  );
}

export default About;
