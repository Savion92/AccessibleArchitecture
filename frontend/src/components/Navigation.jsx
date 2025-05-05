import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Stack>
          <Navbar.Brand href="/">👁️‍🗨️ Accessible Architecture</Navbar.Brand>
          For HTML
        </Stack>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">🏠</Nav.Link>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item href="/login" eventKey={4}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup" eventKey={5}>
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link eventKey={3} href="/checklists">
              Checklists
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
