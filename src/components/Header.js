import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Hamburger from './Hamburger';
import { AppContext } from '../App';
import { CSSTransition } from 'react-transition-group';

const Header = (props) => {

  //array of menu items
  const menuItems = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Contact Us", link: "/contact-us"}
  ];

  return (
    <div>
    {/* Primary Nav */}
      <div className="header">
        <Row id="nav-row">
          <Col xs={8} sm={6} md={6}>
            <h2>{props.title}</h2>
          </Col>
          <Col xs={6} sm={6} md={6} className="hidden-xs">
            <ul>
              {menuItems.map((menuItems) => {
                return <li><a href={menuItems.link}>{menuItems.title}</a></li>;
              })}
            </ul>
          </Col>
          <Hamburger/>
        </Row>
      </div>
    {/* Mobile Menu */}
      <div>
        <AppContext.Consumer>
          {(context) => (
            <CSSTransition
              in={context.mainMenuOpen}
              timeout={500}
              classNames="message"
              unmountOnExit
            >
              <Row id="mobile-menu-row" className="hidden-sm hidden-md hidden-lg hidden-xl">
                <Col xs={12}>
                  <ul>
                    {menuItems.map((menuItems) => {
                      return <li><a href={menuItems.link}>{menuItems.title}</a></li>;
                    })}
                  </ul>
                </Col>
              </Row>
            </CSSTransition>
          )}
        </AppContext.Consumer>
      </div>
    </div>
  );
};

export default Header;
