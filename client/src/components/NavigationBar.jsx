import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const NavigationBar = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">New Asia</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/history">History</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/menu">Menu</Link>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavigationBar;