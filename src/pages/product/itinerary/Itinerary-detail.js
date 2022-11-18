import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Map from './map';
import IList from './IList';
import ITitle from './ITitle';
import IRecSite from './iRecSite';
import IRecFood from './iRecFood';
import './Itinerary-detail.scss';

function ItineraryDetail() {
  return (
    <>
      <NavBar />
      <ITitle />
      <div id="iContainer">
        <IList />
        <Map />
      </div>
      <div id="iRecItems">
        <IRecSite />
        <IRecFood />
      </div>
      <Footer />
    </>
  );
}

export default ItineraryDetail;
