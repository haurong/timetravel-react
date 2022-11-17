import React from 'react';
import './RoomChoose.scss';
function RoomChoose() {
  const Rooms = ['單人房', '雙人房', '三人房', '四人房', '三人房'];
  return (
    <div className="RoomChoose">
      {Rooms.map((v, i) => {
        return (
          <div className="RoomChoose_button">
            <button>{v}</button>
          </div>
        );
      })}
    </div>
  );
}

export default RoomChoose;
