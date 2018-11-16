import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Grid } from 'react-bootstrap';
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
    },
    menuItems : [
      {title: "Home", link: "#/"},
      {title: "About", link: "#/about"},
      {title: "Contact Us", link: "#/contact-us"}
    ],
    currentURL : "#/",
    currentTitle : "Home",
    handleNavigation : (url, title) => {
      this.setState({currentURL:url,currentTitle:title});
      console.log(this.state)
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
        <div className="App">
          <Grid>
            <Header title="React Bootstrap"/>
              <Body page={this.state.currentTitle}/>
          </Grid>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
