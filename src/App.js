import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './App.css';
import Profile from './modules/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Richard Truong</h1>
            <hr></hr>
            <p>Typer Text</p>
          </Grid>
          <a href="#profile" className="scroll-down">
            <span className="glyphicon glyphicon-chevron-down"></span>
          </a>
        </Jumbotron>
        <Profile />
      </div>
    );
  }
}

export default App;
