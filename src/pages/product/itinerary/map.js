import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import './map.scss';

export default function map() {
  const position = [25.03418, 121.564517];
  return (
    <div id="map">
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[25.03418, 121.564517]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[25.0393607, 121.5026982]}>
          <Popup>
            龍山寺
            <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
