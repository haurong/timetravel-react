import { Swiper, SwiperSlide } from 'swiper/react';
// import { imgUrl } from '../../config';
import { useHotelContext } from '../Context/HotelContext';
import { HOTEL_IMG } from '../hotel-config';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './Carousel.scss';
import 'swiper/scss/effect-fade';
// import required modules
import { Pagination, Navigation } from 'swiper';

export default function Carousel() {
  const { hotelRoomChoose, hotelListData } = useHotelContext();
  // console.log(hotelListData);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="swiperSlide_pic"
          style={{
            backgroundImage: `url(${HOTEL_IMG}/${hotelListData.picture})`,
          }}
        ></div>
      </SwiperSlide>

      {hotelRoomChoose.map((v, i) => {
        return (
          <SwiperSlide key={i}>
            <div
              className="swiperSlide_pic"
              style={{
                backgroundImage: `url(${HOTEL_IMG}/${v.room_picture})`,
              }}
            ></div>
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>
        <div className="swiperSlide_pic"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide_pic"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide_pic"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide_pic"></div>
      </SwiperSlide> */}
    </Swiper>
  );
}
