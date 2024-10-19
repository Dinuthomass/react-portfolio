import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const tooltipMessage = darkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary w-100" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand href="#home" className="fs-4 fw-bold me-5">Portfolio</Navbar.Brand>
          <div className="d-flex d-lg-none ms-auto align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <i className="fa-solid fa-bars" style={{ color: 'grey' }}></i>
            </Navbar.Toggle>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{tooltipMessage}</Tooltip>}
            >
              <i
                className={`fa-solid fa-toggle-off ms-3 ${darkMode ? 'active' : ''}`}
                style={{ color: darkMode ? 'white' : 'grey', cursor: 'pointer' }}
                onClick={toggleTheme}
              ></i>
            </OverlayTrigger>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse ms-5">
            <Nav className="ms-auto w-50 justify-content-between links">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Project</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{tooltipMessage}</Tooltip>}
            >
              <i
                className={`fa-solid fa-toggle-off d-none d-lg-block ms-5 ${darkMode ? 'active' : ''}`}
                style={{ color: darkMode ? 'white' : 'grey', cursor: 'pointer' }}
                onClick={toggleTheme}
              ></i>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
