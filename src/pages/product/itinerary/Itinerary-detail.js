import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Map from './map';
import IList from './IList';
import ITitle from './ITitle';
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

      <Footer />
    </>
  );
}

export default ItineraryDetail;
