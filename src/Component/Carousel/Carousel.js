import { Swiper, SwiperSlide } from 'swiper/react';
import { imgServerUrl } from '../../config';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './Carousel.scss';
// import required modules
import { Pagination, Navigation } from 'swiper';

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={`${imgServerUrl}/uploads/Food/F116-1.jpg`}
          className="carousel_img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${imgServerUrl}/uploads/Food/F116-2.jpg`}
          className="carousel_img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${imgServerUrl}/uploads/Food/F116-3.jpg`}
          className="carousel_img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${imgServerUrl}/uploads/Food/F116-4.jpg`}
          className="carousel_img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${imgServerUrl}/uploads/Food/F116-5.jpg`}
          className="carousel_img"
        />
      </SwiperSlide>
    </Swiper>
  );
}
