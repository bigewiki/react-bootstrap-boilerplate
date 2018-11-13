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

export const AppContext = React.createContext();

class App extends Component {
  state = {
    mainMenuOpen : false,
    number: 10
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
        <div className="App">
          <Grid>
            <Header title="React Bootstrap Template"/>
          </Grid>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
