import React from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

class NavLink extends React.Component{
  render(){
    return(
        <NavItem onClick={() => this.props.onClick()} eventKey={this.props.key} href="#" active={this.props.isActive}>
          <Link to={this.props.path}>{this.props.text}</Link>
        </NavItem>
    )
  }
}

export default NavLink;