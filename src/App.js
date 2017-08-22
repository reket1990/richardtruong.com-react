import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import './App.css';

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
      </div>
    );
  }
}

export default App;
