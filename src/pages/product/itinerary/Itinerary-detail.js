import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Map from './map';
import IList from './I-List';
import './Itinerary-detail.scss';

function ItineraryDetail() {
  return (
    <>
      <NavBar />
      <div id="icontainer">
        <IList />
        <Map />
      </div>

      <Footer />
    </>
  );
}

export default ItineraryDetail;
