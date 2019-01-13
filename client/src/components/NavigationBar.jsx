import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import NavLink from './NavLink.jsx';

const NavigationBar = (props) => (
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
          {
            props.links.map((link, i)=>
                <NavLink path={link.path} 
                        text={link.text} 
                        isActive={link.isActive}
                        key={link.path} 
                        onClick={() => props.handleClick(i)}/>
            )
          }
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