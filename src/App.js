import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './App.css';
import Profile from './modules/Profile';
import Experiences from './modules/Experiences';
import Contact from './modules/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Richard Truong</h1>
            <hr />
            <p>Interactive Resume</p>
          </Grid>
          <a href="#profile" className="scroll-down">
            <span className="glyphicon glyphicon-chevron-down" />
          </a>
        </Jumbotron>
        <Profile />
        <Experiences />
        <Contact />
      </div>
    );
  }
}

export default App;
