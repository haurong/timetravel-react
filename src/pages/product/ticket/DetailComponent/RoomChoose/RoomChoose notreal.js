import React, { useEffect, useState } from 'react';
import './RoomChoose.scss';
import { useHotelContext } from '../../../stays/Context/HotelContext';
function RoomChoose(props) {
  const { setHotelRoomPrice } = useHotelContext();
  const ticketChoose = ['成人票', '老人票', '優待票'];
  // useEffect(() => {
  //   if (props.hotelRoomData.length !== 0) {
  //     setHotelRoomPrice(props.hotelRoomData[0].room_price);
  //   }
  // }, [props.hotelRoomData]);

  const [roomChoose, setRoomChoose] = useState(0);
  return (
    <div className="RoomChoose">
      {ticketChoose.map((v, i) => {
        return (
          <div
            className="RoomChoose_button"
            key={i}
            onClick={() => {
              setRoomChoose(i);
            }}
          >
            <button
              data-hotel_price={v.room_price}
              className={roomChoose === i ? 'roomChooseActive' : ''}
              onClick={(e) => {
                // console.log(e.target.getAttribute('data-hotel_price'));
                setHotelRoomPrice(e.target.getAttribute('data-hotel_price'));
              }}
            >
              {v}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RoomChoose;
