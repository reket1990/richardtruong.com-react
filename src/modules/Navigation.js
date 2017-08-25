import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

require('smoothscroll-polyfill').polyfill();

window.onscroll = function() {
  // Check to see if nav is fixed
  var fixedHeight = window.innerHeight;
  if (window.innerWidth >= 768) {
    fixedHeight = window.innerHeight - 60;  // Nav becomes fixed earlier
  }

  if (window.pageYOffset > fixedHeight) {
    document.getElementsByClassName("navbar")[0].classList.add("fixed");
  }  else {
    document.getElementsByClassName("navbar")[0].classList.remove("fixed");
  }

  // Check to see which tab is active
  var active = 0;
  var tabs = ['experiences', 'contact'];

  tabs.forEach(function(tab) {
    var modifier = 0;
    if (window.innerWidth < 768) {
      modifier = 50;  // Compensate for nav bar
    }

    if (window.pageYOffset >= document.getElementById(tab).offsetTop - modifier) {
      active++;
    }
  });

  // Check if bottom
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    active++;
  }

  // Set active tab
  tabs = document.getElementById('navigation').getElementsByTagName("li");
  for (var i = 0; i < tabs.length; i++) {
    // Remove active
    tabs[i].classList.remove("active");
  }
  // Add active
  if (active == tabs.length) { active = tabs.length-1 }  // Double counted last tab
  tabs[active].classList.add("active");
};


function smoothScroll(selector) {
  var scrollHeight = document.getElementById(selector).offsetTop;
  if (window.innerWidth < 768) {
    scrollHeight -= 50;  // Compensate for nav bar
  }

  window.scroll({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}


class Navigation extends Component {
  render() {
    return (
      <div id="navigation">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav onSelect={smoothScroll}>
              <NavItem eventKey={'profile'}>Profile</NavItem>
              <NavItem eventKey={'experiences'}>Experiences</NavItem>
              <NavItem eventKey={'contact'}>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
