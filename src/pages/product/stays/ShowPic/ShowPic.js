import React from 'react';
import './ShowPic.scss';
import { HOTEL_IMG } from '../hotel-config';

import { useHotelContext } from '../Context/HotelContext';

function ShowPic() {
  const { hotelRoomChoose } = useHotelContext();
  // console.log(hotelRoomChoose);
  return (
    <>
      {hotelRoomChoose.map((v, i) => {
        return (
          <div className="Hotel_showPic" key={i}>
            <img
              src={`${HOTEL_IMG}/${v.room_picture}`}
              alt={`pic${i + 1}`}
            ></img>
            <p>{v.room_type}</p>
          </div>
        );
      })}

      {/* <div className="Hotel_showPic">
        <img src={pic1} alt="pic1"></img>
        <h5>行政雙人房</h5>
      </div>
      <div className="Hotel_showPic">
        <img src={pic2} alt="pic2"></img>
        <h5>豪華雙人房</h5>
      </div>
      <div className="Hotel_showPic">
        <img src={pic3} alt="pic3"></img>
        <h5>豪華三人房</h5>
      </div>
      <div className="Hotel_showPic">
        <img src={pic4} alt="pic4"></img>
        <h5>豪華四人房</h5>
      </div> */}
    </>
  );
}

export default ShowPic;
