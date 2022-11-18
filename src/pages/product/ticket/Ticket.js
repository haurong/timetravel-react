import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import 'antd/dist/antd.css';
import './Ticket.scss';
// import Breadcrumb from './Breadcrumb/Breadcrumb.js';
// import Carousel from './Carousel/Carousel.js';
// import Rate from './Rate/Rate.js';
// import LocationIcon from './LocationIcon/LocationIcon.js';
import Sidebar from './Sidebar/Sidebar.js';
import Slider from './Slider/Slider.js';

function Ticket() {
  return (
    <>
      <NavBar />

      <div className="container">
        <Sidebar />
        <Slider />
      </div>

      <Footer />
    </>
  );
}

export default Ticket;
