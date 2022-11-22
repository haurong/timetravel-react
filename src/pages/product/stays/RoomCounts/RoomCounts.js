import React, { useState } from 'react';
import './RoomCounts.scss';
import { ReactComponent as Add } from '../../../../icon/add.svg';
import { ReactComponent as Minus } from '../../../../icon/minus.svg';
import { useHotelContext } from '../Context/HotelContext';
// import Minus from '../../../../icon/minus.svg';

function RoomCounts() {
  const { roomCounts, setRoomCounts } = useHotelContext();

  return (
    <div className="d-flex RoomCounts">
      <div
        className={`${`icon canClick`} ${roomCounts > 1 ? '' : 'not_canClick'}`}
        // className="icon canClick"
        onClick={() => {
          if (roomCounts > 1) {
            setRoomCounts(roomCounts - 1);
          }
        }}
      >
        <Minus className="RoomCounts_SVG" />
      </div>
      <div className="RoomCounts_Number icon">
        <p>{roomCounts}</p>
      </div>
      <div
        className="icon canClick "
        onClick={() => {
          if (roomCounts >= 1) {
            setRoomCounts(roomCounts + 1);
          }
        }}
      >
        <Add className="RoomCounts_SVG" />
      </div>
    </div>
  );
}

export default RoomCounts;
