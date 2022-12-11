import React, { useEffect } from 'react';
import { useState } from 'react';
import Geocode from 'react-geocode';
import { useHotelContext } from '../Context/HotelContext';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function HotelMap() {
  const { hotelListData, setHotelGeocode, hotelGeocode } = useHotelContext();
  // console.log(hotelListData.address);
  // useEffect(() => {
  //   Geocode.setApiKey('AIzaSyDrMC7nsflI8Pel7Q3oOTw5lK__PMSF4Dk');
  //   Geocode.setLanguage('zh-TW');
  //   Geocode.fromAddress(hotelListData.address).then(
  //     (response) => {
  //       console.log(response.results[0].geometry.location);
  //       let lat = response.results[0].geometry.location.lat;
  //       let lng = response.results[0].geometry.location.lng;
  //       setHotelGeocode([lat, lng]);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, [hotelListData]);
  return (
    <div>
      <MapContainer
        center={[25.043099, 121.512984]}
        // center={hotelGeocode ? hotelGeocode : [25.149916, 121.763819]}
        zoom={16}
        scrollWheelZoom={true}
        // bounds={hotelGeocode}
        // panTo={hotelGeocode}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          // position={hotelGeocode[0] ? hotelGeocode : [25.149916, 121.763819]}
          position={[25.043099, 121.512984]}
        >
          <Popup>
            萬祝號 <br /> Easily customizable.
          </Popup>
        </Marker>
        ;
      </MapContainer>
    </div>
  );
}
