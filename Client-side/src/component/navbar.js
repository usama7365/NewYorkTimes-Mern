import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavigationBar = () => {


        const handleLogout = () => {
          // Clear the token from local storage
          localStorage.removeItem('token');
      
          // Redirect to the default route (login page)
          window.location.replace('/');
        };

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">New York Times Stories</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/dashboard">Home</Nav.Link>
              <NavDropdown title="Sections" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.nytimes.com/international/">Section 1</NavDropdown.Item>
                <NavDropdown.Item href="https://www.nytimes.com/international/">Section 2</NavDropdown.Item>
                <NavDropdown.Item href="https://www.nytimes.com/international/">Section 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://www.nytimes.com/international/">About</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
              <button className="btn" onClick={handleLogout}>
      <FaSignOutAlt style={{color:"white"}} />
      <span style={{color:"white"}} >Log Out</span>
    </button>
      </Navbar>
    );
  };
  
  export default NavigationBar;
  