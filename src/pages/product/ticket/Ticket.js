import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHotelContext } from '../stays/Context/HotelContext';
import { useLocation } from 'react-router-dom';
import { TICKET_LIST } from './ticket-config';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Ticket.scss';
import '../../../../node_modules/antd/dist/antd.css';

import MyPagination from '../../../Component/Pagination/Pagination';

// import CardList from './Card_List/Ticket_Card_List';
import CardList from './Card_List/Card_List';
import Breadcrumb from './Breadcrumb/Breadcrumb.js';
import Sidebar from './Sidebar/Sidebar.js';
import Slider from './Slider/Slider.js';
import DatePicker from './DatePicker/DatePicker.js';
import RankChoose from './RankChoose/RankChoose.js';
import CitySelection from './CitySelection/CitySelection.js';

function Ticket() {
  const [ticketData, setTicketData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });

  const [ticketPage, setTicketPage] = useState({
    rows: [],
  });

  const { hotelAllData, setHotelAllData, setHotelSortData, setDisplayData } =
  useHotelContext();

  const location = useLocation();
  // const usp = new URLSearchParams(location.search);

  async function getList() {
    // const response = await axios.get(TICKET_LIST + `?` + usp.toString());
    const response = await axios.get(TICKET_LIST);
    console.log(response.data);
    setHotelAllData(response.data);
    setHotelSortData(response.data.rowsAll);
    setDisplayData(response.data.rowsAll);
  }

  useEffect(() => {
    getList();
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="container marginTop">
        <Row>
          <div className="ticket-Breadcrumb">{/* <Breadcrumb /> */}</div>
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
              {/* <RankChoose />
              <RankChoose4 />
              <RankChoose3 />
              <RankChoose2 />
              <RankChoose1 /> */}
            </div>
          </Col>
          <Col className="col-9 ticket_card_list">
            <CardList rows={ticketData.rows} />
          </Col>
        </Row>
      </div>
      <div className="foodPagination">
        <MyPagination
          page={ticketData.page}
          totalPages={ticketData.totalPages}
        />
      </div>

      <Footer />
    </>
  );
}

export default Ticket;
