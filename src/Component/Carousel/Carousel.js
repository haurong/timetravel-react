import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import 'swiper/scss/effect-fade';
import { Pagination, Navigation } from 'swiper';

export default function Carousel() {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      // loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="SwiperSlide">
        <div className="Food_Img1 "></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Food_Img2"></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Food_Img3"></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Food_Img4"></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Food_Img5"></div>
      </SwiperSlide>
    </Swiper>
  );
}
