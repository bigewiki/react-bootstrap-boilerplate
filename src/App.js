import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Header title="React Bootstrap Template"/>
        </Grid>
      </div>
    );
  }
}

export default App;
