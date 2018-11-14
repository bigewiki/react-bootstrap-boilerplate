import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
//bootstrap
import { Grid } from 'react-bootstrap';
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add({ faBars, faTimes });

export const AppContext = React.createContext();

class App extends Component {
  state = {
    // boolean to indicate whether the menu should be open or closed
    mainMenuOpen : false,
    // function for handling the menu button being clicked
    handleMainMenuClick : () => {
      if(this.state.mainMenuOpen===false){
        this.setState({mainMenuOpen:true})
      } else {
        this.setState({mainMenuOpen:false})
      }
    }
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
