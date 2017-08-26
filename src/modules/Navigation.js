import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

require('smoothscroll-polyfill').polyfill();

var tabs = [{
  id: "profile",
  text: "Profile"
}, {
  id: "experiences",
  text: "Experiences"
}, {
  id: "contact",
  text: "Contact"
}];

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
  var active = -1;

  for (var i = 0; i < tabs.length; i++) {
    var modifier = 0;
    if (window.innerWidth < 768) {
      modifier = 50;  // Compensate for nav bar
    }

    if (window.pageYOffset >= document.getElementById(tabs[i].id).offsetTop - modifier) {
      active++;
    }
  }

  // Check if bottom
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    active++;
  }
  if (active === -1) { active = 0 }  // Highlight first tab to start
  if (active === tabs.length) { active -= 1 }  // Double counted last tab

  // Set active tab
  var tabElements = document.getElementById('navigation').getElementsByTagName("li");
  for (i = 0; i < tabElements.length; i++) {
    // Remove active
    tabElements[i].classList.remove("active");
  }
  // Add active
  tabElements[active].classList.add("active");
};


export function smoothScroll(tabId) {
  console.log(tabId);
  var scrollHeight = document.getElementById(tabId).offsetTop;
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
              {tabs.map(tab =>
                <NavItem eventKey={tab.id}>{tab.text}</NavItem>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;