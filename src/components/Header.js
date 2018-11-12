import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = (props) => {

  //array of menu items
  const menuItems = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Contact Us", link: "/contact-us"}
  ];

  //render menu items
  const showMenuItems = () => {
    return `somesuch`;
  }

  return (
    <div className="header">
      <Row>
        <Col xs={12} md={8}>
          {props.title}
        </Col>
        <Col xs={6} md={4}>
          <ul>
            {menuItems.map((menuItems) => {
              return <li><a href={menuItems.link}>{menuItems.title}</a></li>;
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
