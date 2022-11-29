import React, { useEffect, useState } from 'react';
import './RoomChoose.scss';
import { useHotelContext } from '../Context/HotelContext';
function RoomChoose(props) {
  const { setHotelRoomPrice, roomsChooseName, setRoomsChooseName } =
    useHotelContext();

  // useEffect(() => {
  //   if (props.hotelRoomData.length !== 0) {
  //     setHotelRoomPrice(props.hotelRoomData[0].room_price);
  //   }
  // }, [props.hotelRoomData]);

  const [roomChoose, setRoomChoose] = useState(0);
  return (
    <div className="RoomChoose">
      {props.hotelRoomData.map((v, i) => {
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
              data-hotel_name={v.room_type}
              className={roomChoose === i ? 'roomChooseActive' : ''}
              onClick={(e) => {
                // console.log(e.target.getAttribute('data-hotel_price'));
                setHotelRoomPrice(e.target.getAttribute('data-hotel_price'));
                setRoomsChooseName(e.target.getAttribute('data-hotel_name'));
              }}
            >
              {v.room_type}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RoomChoose;
