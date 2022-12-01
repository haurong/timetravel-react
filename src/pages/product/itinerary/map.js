import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ITINERARY_ITEM, GOOGLE_ADDRESS } from './site-config';
import map1 from './../../../icon/map.svg';
import map2 from './../../../icon/map_blue.svg';
import map3 from './../../../icon/map_darkblue.svg';

const customMarker1 = new L.Icon({
  iconUrl: map1,
  iconSize: [40, 40],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
const customMarker2 = new L.Icon({
  iconUrl: map2,
  iconSize: [40, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
const customMarker3 = new L.Icon({
  iconUrl: map3,
  iconSize: [40, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

export default function Map() {
  const [iData, setIData] = useState([{ lat: 25.033028, lng: 121.563593 }]);
  const [position, setPosition] = useState();

  const location = useLocation();

  async function getList() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_ITEM + sid);
    const newData = response.data;
    setIData(newData);
  }

  useEffect(() => {
    getList();
  }, [location]);

  return (
    <div id="map">
      <MapContainer
        center={[iData[0].lat, iData[0].lng]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {iData.map((el, i) => {
          return (
            <Marker
              position={[el.lat, el.lng]}
              icon={
                el.day === 1
                  ? customMarker1
                  : el.day === 2
                  ? customMarker2
                  : customMarker3
              }
              key={i}
            >
              <Popup>
                {el.name}
                <br /> {el.map}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
