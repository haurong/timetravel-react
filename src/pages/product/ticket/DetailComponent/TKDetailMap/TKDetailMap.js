import React, { useEffect } from 'react';
import { useState } from 'react';
import Geocode from 'react-geocode';
import { useTicketContext } from '../../Context/TicketContext';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function HotelMap() {
  const { hotelListData, setHotelGeocode, hotelGeocode } = useTicketContext();
  // console.log(hotelListData.address);
 
  return (
    <div>
      <MapContainer
        center={[25.097240, 121.514967]}
        zoom={16}
        scrollWheelZoom={true}
     
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          // position={hotelGeocode[0] ? hotelGeocode : [25.149916, 121.763819]}
          position={[25.097240, 121.514967]}
        >
          <Popup> </Popup>
        </Marker>
        ;
      </MapContainer>
    </div>
  );
}
