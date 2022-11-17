import React, { useState } from 'react';
import './RoomChoose.scss';
function RoomChoose() {
  const Rooms = ['單人房', '雙人房', '三人房', '四人房', '三人房'];
  const [roomChoose, setRoomChoose] = useState(0);
  return (
    <div className="RoomChoose">
      {Rooms.map((v, i) => {
        return (
          <div
            className="RoomChoose_button"
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
