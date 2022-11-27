import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import './map.scss';
import './FoodMap.scss';
export default function FoodMap() {
  const position = [25.149916, 121.7628087];
  return (
    <div id="foodmap">
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[25.149916, 121.763819]} className="marker">
          <Popup>萬祝號<br />WanChuHao</Popup>
        </Marker>
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
