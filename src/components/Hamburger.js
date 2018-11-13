import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../App';

const Hamburger = () => {
  return (
    <div className="green">
    {/* Context */}
    <AppContext.Consumer>
      {(context) => (
        <Col xs={4} className="hidden-sm hidden-md hidden-lg hidden-xl">
          <FontAwesomeIcon id="mobile-hamburger" icon="bars" />
          {context.number}
        </Col>
      )}
    </AppContext.Consumer>
    {/* Markup */}

    </div>
  )
};



export default Hamburger;
