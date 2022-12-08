import React, { useState } from 'react';
import './RoomCounts.scss';
import { ReactComponent as Add } from '../../../../../icon/add.svg';
import { ReactComponent as Minus } from '../../../../../icon/minus.svg';
import { useTicketContext } from '../../Context/TicketContext';
// import Minus from '../../../../icon/minus.svg';

function RoomCounts() {
  const { ticketCounts, setTicketCounts } = useTicketContext();

  return (
    <div className="d-flex RoomCounts">
      <div
        className={`${`icon canClick`} ${ticketCounts > 1 ? '' : 'not_canClick'}`}
        // className="icon canClick"
        onClick={() => {
          if (ticketCounts > 1) {
            setTicketCounts(ticketCounts - 1);
          }
        }}
      >
        <Minus className="RoomCounts_SVG" />
      </div>
      <div className="RoomCounts_Number icon">
        <p>{ticketCounts}</p>
      </div>
      <div
        className="icon canClick "
        onClick={() => {
          if (ticketCounts >= 1) {
            setTicketCounts(ticketCounts + 1);
          }
        }}
      >
        <Add className="RoomCounts_SVG" />
      </div>
    </div>
  );
}

export default RoomCounts;
