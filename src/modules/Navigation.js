import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">{/* Don't use Navbar to remove container div */}
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#profile" className="active">Profile</NavItem>
            <NavItem eventKey={2} href="#experiences">Experiences</NavItem>
            <NavItem eventKey={3} href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </nav>
    );
  }
}

export default Navigation;
