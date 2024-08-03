import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand as={Link} to="/">
        <img
          src="path-to-your-logo.png"
          alt="Logo"
          className="d-inline-block align-top"
          width="100" // Adjust the size as needed
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto m-sm-1">
          <Nav.Item>
            <Button as={Link} to="/login" variant="outline-primary" className="me-5 m-sm-2">Login</Button>
          </Nav.Item>
          <Nav.Item>
            <Button as={Link} to="/register" variant="primary" className="me-5">Register</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
