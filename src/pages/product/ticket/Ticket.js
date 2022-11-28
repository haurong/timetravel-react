import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../../../node_modules/antd/dist/antd.css';
import './Ticket.scss';
import Breadcrumb from './Breadcrumb/Breadcrumb.js';
// import Carousel from './Carousel/Carousel.js';
import Sidebar from './Sidebar/Sidebar.js';
import Slider from './Slider/Slider.js';
import DatePicker from './DatePicker/DatePicker.js';
import RankChoose from './RankChoose/RankChoose.js';
import RankChoose4 from './RankChoose/RankChoose4.js';
import RankChoose3 from './RankChoose/RankChoose3.js';
import RankChoose2 from './RankChoose/RankChoose2.js';
import RankChoose1 from './RankChoose/RankChoose1.js';

import CitySelection from './CitySelection/CitySelection.js';

function Ticket() {
  // const [foodData, setFoodData] = useState({
  //   totalRows: 0,
  //   totalPages: 0,
  //   perPage: 0,
  //   page: 1,
  //   rows: [],
  // });

  // const location = useLocation();
  // const usp = new URLSearchParams(location.search);

  // async function getList() {
  //   const response = await axios.get(FOOD_LIST + `?` + usp.toString());
  //   setFoodData(response.data);
  // }
  // console.log(foodData);
  // useEffect(() => {
  //   getList();
  // }, [location]);

  return (
    <>
      <NavBar />
      <div className="container marginTop">
        <Row>
          <div className="ticket-Breadcrumb">
            <Breadcrumb />
          </div>
          <Col className="col-3">
            <div className="shadow ticket-CitySelection">
              <CitySelection />
            </div>
            <div className="shadow ticket-Sidebar">
              <Sidebar />
            </div>
            <div className="shadow ticket-DatePicker">
              <DatePicker />
            </div>
            <div className="shadow ticket-Slider">
              <Slider />
            </div>
            <div className="shadow ticket-RankChoose">
              <div>
                <h2>評分</h2>
              </div>
              <RankChoose />
              <RankChoose4 />
              <RankChoose3 />
              <RankChoose2 />
              <RankChoose1 />
            </div>
          </Col>
          <Col className="col-9 ticket-list-test">
           
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Ticket;
