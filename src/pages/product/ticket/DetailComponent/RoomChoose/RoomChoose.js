import React, { useEffect, useState } from 'react';
import './RoomChoose.scss';
import { useHotelContext } from '../../../stays/Context/HotelContext';
function RoomChoose(props) {
  const { setHotelRoomPrice } = useHotelContext();
  // useEffect(() => {
  //   if (props.hotelRoomData.length !== 0) {
  //     setHotelRoomPrice(props.hotelRoomData[0].room_price);
  //   }
  // }, [props.hotelRoomData]);

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
              className={roomChoose === i ? 'roomChooseActive' : ''}
              onClick={(e) => {
                // console.log(e.target.getAttribute('data-hotel_price'));
                setHotelRoomPrice(e.target.getAttribute('data-ticket_price'));
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

export default RoomChoose;
