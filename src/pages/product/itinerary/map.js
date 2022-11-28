import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ITINERARY_ITEM, GOOGLE_ADDRESS } from './site-config';
import Geocode from 'react-geocode';
// import { Key } from './Key';

export default function Map() {
  // Geocode.setApiKey(Key);
  const [iData, setIData] = useState({});
  const [address, setAddress] = useState([]);
  const [position, setPosition] = useState([
    { lat: 25.03418, lng: 121.564517 },
  ]);

  const location = useLocation();

  async function getList() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_ITEM + sid);
    const newData = response.data;
    setIData(newData);
    // console.log(newData[0].map);
    // setAddress(newData[0].map);
    const locations = newData.map((el, i) => {
      return el.map;
    });
    setAddress(locations);

    const newPosition = [];
    for (let i = 0; i < locations.length; i++) {
      Geocode.fromAddress(locations[i]).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log({ lat, lng });
          newPosition.push({ lat, lng });
          console.log(newPosition);
          console.log(position.concat(newPosition));
          setPosition(position.concat(newPosition));
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  // function getPosition() {
  //   const newPosition = [];
  //   for (let i = 0; i < address.length; i++) {
  //     Geocode.fromAddress(address[i]).then(
  //       (response) => {
  //         const { lat, lng } = response.results[0].geometry.location;
  //         console.log({ lat, lng });

  //         newPosition.push({ lat, lng });
  //         console.log(newPosition);
  //         console.log(position.concat(newPosition));
  //         setPosition(position.concat(newPosition));
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }

  // useEffect(() => {
  //   // getPosition();
  //   console.log(location);
  //   getList();
  // }, [location]);

  return (
    <div id="map">
      <MapContainer
        center={[position[0].lat, position[0].lng]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {position.map((el, i) => {
          <Marker position={[el.lat, el.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>;
        })}

        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {/* <Marker position={[25.0393607, 121.5026982]}>
          <Popup>
            龍山寺
            <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}
