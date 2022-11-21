import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { ITINERARY_LIST } from './site-config';

import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Itinerary_Card_List from './Itinerary_Card_List';

function Itinerary() {
  const [iData, setIData] = useState([]);
  async function getList() {
    const response = await axios.get(ITINERARY_LIST);
    setIData(response.data);
  }
  const location = useLocation();

  useEffect(() => {
    getList();
  }, [location]);

  return (
    <>
      <Itinerary_Card_List rows={iData} />

      {/* <NavBar />
      <Row className="container d-flex ">
        <Col className="Accordion col-3 g-4">
          <Card style={{ width: '18rem' }}>
            <Accordions className="col-2 " />
          </Card>
        </Col>
        <Col className="col-9">
          <Itinerary_Card_List rows={iData.rows} />
        </Col>
      </Row>
      <Footer /> */}
    </>
  );
}

export default Itinerary;
