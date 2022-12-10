import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Map from './map';
import IList from './IList';
import ITitle from './ITitle';
import IRecSite from './iRecSite';
import IRecFood from './iRecFood';
import { useItineraryContext } from './ItineraryContext';
import './Itinerary-detail.scss';
import { ITINERARY_ITEM } from './site-config';

function ItineraryDetail() {
  // const [iData, setIData] = useState({});
  const { iData, setIData } = useItineraryContext();

  return (
    <>
      <NavBar />
      <ITitle />
      <div id="iContainer">
        <div id="iList">
          <IList />
        </div>
        <Map />
      </div>
      <div id="iRecItems">
        <h1>附近景點</h1>
        <IRecSite />
        {/* <IRecFood /> */}
      </div>
      <div className="spaceItineraryDetail"></div>
      <Footer />
    </>
  );
}

export default ItineraryDetail;
