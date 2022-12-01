import React  from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function FoodMap() {
  return (
    <div >
      <MapContainer
        center={[25.149916, 121.763819]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[25.149916, 121.763819]}>
          <Popup>
            萬祝號 <br /> Easily customizable.
          </Popup>
        </Marker>
        ;
      </MapContainer>
    </div>
  );
}
