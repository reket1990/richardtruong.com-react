import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './App.css';
import Navigation, { smoothScroll } from './modules/Navigation';
import Profile from './modules/Profile';
import Experiences from './modules/Experiences';
import Interests from './modules/Interests';
import Contact from './modules/Contact';
import Footer from './modules/Footer';

function scrollDown() {
  smoothScroll('profile');
}

const App = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1>Richard Truong</h1>
        <hr />
        <p>Interactive Resume</p>
      </Grid>
      <button onClick={scrollDown} className="scroll-down">
        <span className="glyphicon glyphicon-chevron-down" />
      </button>
    </Jumbotron>
    <Navigation />
    <Profile />
    <Experiences />
    <Interests />
    <Contact />
    <Footer />
  </div>
);

export default App;
