import useState from 'react';
//import CheckIcon from '@material-ui/icons/Check';
//import ToggleButton from '@material-ui/lab/ToggleButton';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/button'
// import {useState} from 'react'
import './Card_List.scss';
import Card1 from '../Card/Card';

function Card_List() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col>
          <Card1 />
        </Col>
      ))}
    </Row>
  );
}

export default Card_List;
