import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import 'antd/dist/antd.css';
import './Ticket.scss';
import Breadcrumb from './Breadcrumb/Breadcrumb.js';
import Carousel from './Carousel/Carousel.js';
import Rate from './Rate/Rate.js';
import LocationIcon from './LocationIcon/LocationIcon.js';
import Sidebar from './Sidebar/Sidebar.js';

function Ticket() {
  return (
    <>
      <NavBar />
      <div className="container">

        <div className="container marginTop">
          <Breadcrumb />
        </div>

        <Carousel />
        <h2 style={{ color: '#4D4D4D' }}>
          新北瑞芳｜九份茶坊 ／水心月茶坊｜台灣茶文化體驗
        </h2>
        <Rate />
        <LocationIcon />
      </div>

      <Footer />
    </>
  );
}

export default Ticket;
