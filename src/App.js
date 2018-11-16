import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Grid } from 'react-bootstrap';
import MenuItems from './appData/MenuItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add({ faBars, faTimes });

export const AppContext = React.createContext();

class App extends Component {

  constructor(props) {
    const currentMenuItem = MenuItems.filter(menuItem => menuItem.link === window.location.hash);

    super(props);
    this.state = {
      mainMenuOpen : false,
      handleMainMenuClick : () => {
        if(this.state.mainMenuOpen===false){
          this.setState({mainMenuOpen:true})
        } else {
          this.setState({mainMenuOpen:false})
        }
      },
      menuItems : MenuItems,
      currentURL : currentMenuItem[0].link,
      currentTitle : currentMenuItem[0].title,
      handleNavigation : (url, title) => {
        this.setState({currentURL:url,currentTitle:title});
      }
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
