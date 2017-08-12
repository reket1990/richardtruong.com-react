import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <hr></hr>
            <p>Typer Text</p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
