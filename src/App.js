import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './App.css';
import Navigation from './modules/Navigation';
import Profile from './modules/Profile';
import Experiences from './modules/Experiences';
import Contact from './modules/Contact';
import Footer from './modules/Footer';

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
        <Navigation />
        <Profile />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
