import { Swiper, SwiperSlide } from 'swiper/react';
import { SITE_IMG } from './../site-config';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './SiteCarousel.scss';
import 'swiper/scss/effect-fade';
import { Pagination, Navigation } from 'swiper';

export default function SiteCarousel({ img1, img2, img3, img4, img5 }) {
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
        <div className="Site_Img1">
          <img src={SITE_IMG + '/' + img1} alt={'/'} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img2">
          <img src={SITE_IMG + '/' + img2} alt={'/'} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img3">
          <img src={SITE_IMG + '/' + img3} alt={'/'} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img4">
          <img src={SITE_IMG + '/' + img4} alt={'/'} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <div className="Site_Img5">
          <img src={SITE_IMG + '/' + img5} alt={'/'} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
