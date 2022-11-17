import React from 'react';
import './RoomCounts.scss';
import Add from '../../../../icon/add.svg';
import Minus from '../../../../icon/minus.svg';

function RoomCounts() {
  return (
    <div className="d-flex RoomCounts">
      <div className="icon">
        <img src={Minus} alt=""></img>
      </div>
      <div className="RoomCounts_Number icon">
        <p>5</p>
      </div>
      <div className="icon">
        <img src={Add} alt=""></img>
      </div>
    </div>
  );
}

export default RoomCounts;
