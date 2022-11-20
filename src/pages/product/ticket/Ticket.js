import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'antd/dist/antd.css';
import './Ticket.scss';
// import Breadcrumb from './Breadcrumb/Breadcrumb.js';
// import Carousel from './Carousel/Carousel.js';
// import Rate from './Rate/Rate.js';
// import LocationIcon from './LocationIcon/LocationIcon.js';
import Sidebar from './Sidebar/Sidebar.js';
import Slider from './Slider/Slider.js';
import DatePicker from './DatePicker/DatePicker.js';
import CitySelection from './CitySelection/CitySelection.js';
import CardList from '../../../Component/Card_List/Card_List';

function Ticket() {
  return (
    <>
      <NavBar />

      <div className="container marginTop">
        <Row className="container d-flex ">
          <Col className="col-3">
            <CitySelection />
            <Sidebar />
            <DatePicker />
            <Slider />
          </Col>
          <Col className="col-9">
            <CardList />
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Ticket;
