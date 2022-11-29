import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Map from './map';
import IList from './IList';
import ITitle from './ITitle';
import IRecSite from './iRecSite';
import IRecFood from './iRecFood';
import ThemeContext from './ThemeContext';
import './Itinerary-detail.scss';
import { ITINERARY_ITEM } from './site-config';

function ItineraryDetail() {
  const [iData, setIData] = useState({});

  const location = useLocation();

  async function getList() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_ITEM + sid);
    setIData(response.data);
  }

  useEffect(() => {
    getList();
  }, [location]);

  return (
    <>
      <NavBar />
      <ITitle />
      <ThemeContext.Provider value={{}}>
        <div id="iContainer">
          <div id="iList">
            <IList iData={iData} />
          </div>
          <Map />
        </div>
      </ThemeContext.Provider>
      <div id="iRecItems">
        <IRecSite />
        <IRecFood />
      </div>
      <Footer />
    </>
  );
}

export default ItineraryDetail;
