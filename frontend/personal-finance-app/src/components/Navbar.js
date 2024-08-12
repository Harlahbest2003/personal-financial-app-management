import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand as={Link} to="/">
   
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <Button as={Link} to="/login" variant="outline-primary" className="me-2">
              Login
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button as={Link} to="/register" variant="primary">
              Register
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
