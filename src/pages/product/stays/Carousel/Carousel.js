import React from 'react';
import { Carousel } from 'antd';
import { useHotelContext } from '../Context/HotelContext';

import pic1 from './pic/1-1.jpg';
import pic2 from './pic/1-2.jpg';
import pic3 from './pic/1-3.jpg';
import pic4 from './pic/1-4.jpg';

function HotelCarousel() {
  const { hotelRoomChoose } = useHotelContext();
  const CarouselPic = {
    width: '100%',
    height: '360px',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <>
      <Carousel autoplay style={{ zIndex: '-1' }}>
        {hotelRoomChoose.map((v, i) => {
          return (
            <>
              <div>
                <img
                  style={CarouselPic}
                  src={`http://192.168.0.74:3001/uploads/hotel/${v.room_picture}`}
                  alt=""
                ></img>
              </div>
              ;
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default HotelCarousel;
