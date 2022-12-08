import React, { useEffect, useState } from 'react';
import './RoomChoose.scss';
import { useTicketContext } from '../../Context/TicketContext';
function TicketChoose(props) {
  const { setTicketTypePrice, typesChooseName, SetTypesChooseName } = useTicketContext();
 
  const [roomChoose, setRoomChoose] = useState(0);
  return (
    <div className="RoomChoose">
      {props.ticketType.map((v, i) => {
        return (
          <div
            className="RoomChoose_button"
            key={i}
            onClick={() => {
              setRoomChoose(i);
            }}
          >
            <button
              data-ticket_price={v.product_price}
              data-ticket_type={v.tickets_types}
              className={roomChoose === i ? 'roomChooseActive' : ''}
              onClick={(e) => {
                setTicketTypePrice(e.target.getAttribute('data-ticket_price'));
                SetTypesChooseName(e.target.getAttribute('data-ticket_type'));
              }}
            >
              {v.tickets_types}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TicketChoose;
