import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './SiteCarousel.scss';
import 'swiper/scss/effect-fade';
import { Pagination, Navigation } from 'swiper';

export default function SiteCarousel() {
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
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img1 ">1</div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img2">2</div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img3">3</div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img4">4</div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img5">5</div>
      </SwiperSlide>
    </Swiper>
  );
}
