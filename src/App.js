import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
//bootstrap
import { Grid } from 'react-bootstrap';
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars);

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
