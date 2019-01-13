import React from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

class NavLink extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <NavItem eventKey={this.props.key} href="#">
          <Link to={this.props.path}>{this.props.text}</Link>
        </NavItem>
    )
  }
}

export default NavLink;