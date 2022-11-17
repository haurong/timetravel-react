import { Swiper, SwiperSlide } from 'swiper/react';
import { imgUrl } from '../../config';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
// import './Carousel.scss';
// import required modules
import { Pagination, Navigation } from 'swiper';
import Card from 'react-bootstrap/Card';
import Star from '../../icon/star.svg';
import Heart from '../../icon/heart_white.svg';
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
        <Card className="Card">
          <Card.Img variant="top" src={`${imgUrl}/uploads/Food/F116-1.jpg`} />
          <button className="Heart_Btn">
            <Card.Img src={Heart} className="Card_Heart" />
          </button>
          <Card.Body>
            <Card.Title className="Card_Title">
              時間之旅 | 現金抵用券
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Star} className="Star_icon" />
              <span class="Card_Score">4.5/5</span>
            </Card.Text>
            <h2 variant="primary" className="Card_Price">
              NT100
            </h2>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card">
          <Card.Img variant="top" src={`${imgUrl}/uploads/Food/F116-2.jpg`} />
          <button className="Heart_Btn">
            <Card.Img src={Heart} className="Card_Heart" />
          </button>
          <Card.Body>
            <Card.Title className="Card_Title">
              時間之旅 | 現金抵用券
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Star} className="Star_icon" />
              <span class="Card_Score">4.5/5</span>
            </Card.Text>
            <h2 variant="primary" className="Card_Price">
              NT100
            </h2>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card">
          <Card.Img variant="top" src={`${imgUrl}/uploads/Food/F116-3.jpg`} />
          <button className="Heart_Btn">
            <Card.Img src={Heart} className="Card_Heart" />
          </button>
          <Card.Body>
            <Card.Title className="Card_Title">
              時間之旅 | 現金抵用券
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Star} className="Star_icon" />
              <span class="Card_Score">4.5/5</span>
            </Card.Text>
            <h2 variant="primary" className="Card_Price">
              NT100
            </h2>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card">
          <Card.Img variant="top" src={`${imgUrl}/uploads/Food/F116-3.jpg`} />
          <button className="Heart_Btn">
            <Card.Img src={Heart} className="Card_Heart" />
          </button>
          <Card.Body >
            <Card.Title className="Card_Title">
              時間之旅 | 現金抵用券
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Star} className="Star_icon" />
              <span class="Card_Score">4.5/5</span>
            </Card.Text>
            <h2 variant="primary" className="Card_Price">
              NT100
            </h2>
          </Card.Body>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}
