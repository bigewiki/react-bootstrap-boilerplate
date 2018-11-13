import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Hamburger from './Hamburger';

const Header = (props) => {

  //array of menu items
  const menuItems = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Contact Us", link: "/contact-us"}
  ];

  return (
    <div className="header">
      <Row>
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
  );
};

export default Header;
