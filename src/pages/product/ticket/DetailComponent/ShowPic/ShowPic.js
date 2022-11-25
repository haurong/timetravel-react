import React from 'react';
import './ShowPic.scss';
import { HOTEL_IMG } from '../../hotel-config';

import pic1 from '../pic/14-3.jpg';
import pic2 from '../pic/14-4.jpg';
import pic3 from '../pic/14-5.jpg';

import { useHotelContext } from '../../../stays/Context/HotelContext';

function ShowPic() {
  const { hotelRoomChoose } = useHotelContext();
  // console.log(hotelRoomChoose);
  return (
    <>
      {/* {hotelRoomChoose.map((v, i) => {
        return (
          <div className="Hotel_showPic" key={i}>
            <img
              src={`${HOTEL_IMG}/${v.room_picture}`}
              alt={`pic${i + 1}`}
            ></img>
            <h5>{v.room_type}</h5>
          </div>
        );
      })} */}

      <div className="Hotel_showPic">
        <img src={pic1} alt="pic1"></img>
        <h5>波利摩天輪</h5>
      </div>
      <div className="Hotel_showPic">
        <img src={pic2} alt="pic2"></img>
        <h5>飛天神奇號（飛天巴士）</h5>
      </div>
      <div className="Hotel_showPic">
        <img src={pic3} alt="pic3"></img>
        <h5>宇宙迴旋（輻射飛椅）</h5>
      </div>
      {/* <div className="Hotel_showPic">
        <img src={pic4} alt="pic4"></img>
        <h5>豪華四人房</h5>
      </div> */}
    </>
  );
}

export default ShowPic;
