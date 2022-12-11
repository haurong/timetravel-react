import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './Carousel.scss';
import 'swiper/scss/effect-fade';
import { Pagination, Navigation } from 'swiper';

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="bannerSwiper"
    >
      <div className="bannerWrap">
        <SwiperSlide className="SwiperSlideBannerNewest" >
          <div
            className="bannerNewest1 "
            // style={{ height: '141px', width: '500px' }}
          ></div>
        </SwiperSlide>
      </div>
      <SwiperSlide className="SwiperSlideBannerNewest">
        <div
          className="bannerNewest2"
          // style={{ height: '141px ', width: '500px' }}
        ></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlideBannerNewest">
        <div
          className="bannerNewest3"
          // style={{ height: '141px ', width: '500px' }}
        ></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlideBannerNewest">
        <div
          className="bannerNewest4"
          // style={{ height: '141px ', width: '500px' }}
        ></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlideBannerNewest">
        <div
          className="bannerNewest5"
          // style={{ height: '141px ', width: '500px' }}
        ></div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlideBannerNewest">
        <div
          className="bannerNewest6"
          // style={{ height: '141px ', width: '500px' }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
}
