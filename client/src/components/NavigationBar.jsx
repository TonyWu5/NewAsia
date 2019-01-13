import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import NavLink from './NavLink.jsx';

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
          <NavLink key={1} path={'/'} text={'Home'}/>
          <NavLink key={2} path={'/history'} text={'History'}} />
          <NavLink key={3} path={'/menu'} text={'Menu'}/>
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