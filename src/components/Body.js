import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../App';

const Body = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <Row id="nav-row">
          <Col>
            {props.page}
          </Col>
        </Row>
      )}
    </AppContext.Consumer>
  )
};



export default Body;
