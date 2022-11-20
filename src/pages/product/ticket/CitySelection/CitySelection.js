import React, { useState } from 'react';
import './CitySelection.scss';
function RoomChoose() {
  const City = ['基隆市', '台北市', '新北市'];
  const [roomChoose, setRoomChoose] = useState(0);
  return (
    <div className="RoomChoose">
      <h2>篩選目的地</h2>
      {City.map((v, i) => {
        return (
          <div
            className="City_button"
            key={i}
            onClick={() => {
              setRoomChoose(i);
            }}
          >
            <button className={roomChoose === i ? 'roomChooseActive' : ''}>
              {v}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RoomChoose;
