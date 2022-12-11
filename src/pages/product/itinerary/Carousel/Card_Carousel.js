import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Map from '../../../../icon/map.svg';
import { SITE_LIST, SITE_IMG } from '../site-config';
//引入樣式設定
import './Card_Carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';
import { height } from '@mui/system';

export default function Card_Carousel() {
  //設定６張卡片狀態
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get(SITE_LIST);
    const remove = response.data.rows.splice(6, 6);
    // console.log(remove);
    // console.log(response.data.rows);
    setData(remove);
  }
  const location = useLocation();
  useEffect(() => {
    getData();
  }, [location]);

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
      {data === []
        ? ''
        : data.map((el, i) => {
            return (
              <SwiperSlide key={i} style={{ height: '500px' }}>
                <Card
                  className="cardSlide1 "
                  style={{ width: '20rem', height: '420px' }}
                >
                  <div
                    className="foodCardDataOutside"
                    style={{
                      overflow: 'hidden',
                      width: '280px',
                      height: '225px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      className="foodCardData1Img"
                      src={SITE_IMG + '/' + el.img1.split(',')[0]}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="Card_Title">{el.name}</Card.Title>
                    <Card.Text className="Card_Text">
                      <Card.Img src={Map} className="Map_icon" />
                      <span className="Card_Score">
                        {el.city_name} | {el.area_name}
                      </span>
                    </Card.Text>{' '}
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}
