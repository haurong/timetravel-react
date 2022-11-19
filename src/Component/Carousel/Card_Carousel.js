import { Swiper, SwiperSlide } from 'swiper/react';
import { imgUrl } from '../../config';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
// import './Carousel.scss';
// import required modules
import { Pagination, Navigation } from 'swiper';
import Card1 from '../Card/Card';
import './Card_Carousel.scss';

export default function Card_Carousel() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card1 />
      </SwiperSlide>
      <SwiperSlide>
        <Card1 />
      </SwiperSlide>
      <SwiperSlide>
        <Card1 />
      </SwiperSlide>
      <SwiperSlide>
        <Card1 />
      </SwiperSlide>
    </Swiper>
  );
}
