import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Hamburger from './Hamburger';
import { AppContext } from '../App';

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
          <Col xs={8} sm={4} md={4}>
            {props.title}
          </Col>
          <Col xs={6} sm={8} md={8} className="hidden-xs">
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
        <Row id="mobile-menu-row">
          <AppContext.Consumer>
            {(context) => (
              (context.mainMenuOpen===true) ?
              <Col xs={12} className="hidden-sm hidden-md hidden-lg hidden-xl">
                <ul>
                  {menuItems.map((menuItems) => {
                    return <li><a href={menuItems.link}>{menuItems.title}</a></li>;
                  })}
                </ul>
              </Col>
              : null
            )}
          </AppContext.Consumer>
        </Row>
      </div>
    </div>
  );
};

export default Header;
