import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Map from '../../../icon/map.svg';
import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';
//引入卡片輪播資料
import { FOOD_CARD_ITEM1 } from '../../../../src/config';
import { FOOD_CARD_ITEM2 } from '../../../../src/config.js';
import { FOOD_CARD_ITEM3 } from '../../../../src/config.js';
import { FOOD_CARD_ITEM4 } from '../../../../src/config.js';
import { FOOD_CARD_ITEM5 } from '../../../../src/config.js';
import { FOOD_CARD_ITEM6 } from '../../../../src/config.js';
//引入樣式設定
import './Card_Carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';

export default function Card_Carousel() {
  //設定６張卡片收藏功能
  const [like1, setLike1] = useState(false);
  const toggleLike1 = () => setLike1(!like1);
  const [like2, setLike2] = useState(false);
  const toggleLike2 = () => setLike2(!like2);
  const [like3, setLike3] = useState(false);
  const toggleLike3 = () => setLike3(!like3);
  const [like4, setLike4] = useState(false);
  const toggleLike4 = () => setLike4(!like4);
  const [like5, setLike5] = useState(false);
  const toggleLike5 = () => setLike5(!like5);
  const [like6, setLike6] = useState(false);
  const toggleLike6 = () => setLike6(!like6);
  //設定６張卡片狀態
  const [foodCardData1, setFoodCardData1] = useState({});
  const [foodCardData2, setFoodCardData2] = useState({});
  const [foodCardData3, setFoodCardData3] = useState({});
  const [foodCardData4, setFoodCardData4] = useState({});
  const [foodCardData5, setFoodCardData5] = useState({});
  const [foodCardData6, setFoodCardData6] = useState({});

  const path = window.location.pathname.split('/');
  const sid = path[2];

  async function getData() {
    const foodCardItem1 = await axios.get(FOOD_CARD_ITEM1 + sid);
    setFoodCardData1(foodCardItem1.data);
    //console.log(foodCardData1);
    const foodCardItem2 = await axios.get(FOOD_CARD_ITEM2 + sid);
    setFoodCardData2(foodCardItem2.data);
    //console.log(foodCardData2);
    const foodCardItem3 = await axios.get(FOOD_CARD_ITEM3 + sid);
    setFoodCardData3(foodCardItem3.data);
    //console.log(foodCardData3);
    const foodCardItem4 = await axios.get(FOOD_CARD_ITEM4 + sid);
    setFoodCardData4(foodCardItem4.data);
    //console.log(foodCardData4);
    const foodCardItem5 = await axios.get(FOOD_CARD_ITEM5 + sid);
    setFoodCardData5(foodCardItem5.data);
    //console.log(foodCardData5);
    const foodCardItem6 = await axios.get(FOOD_CARD_ITEM6 + sid);
    setFoodCardData6(foodCardItem6.data);
    //console.log(foodCardData6);
  }

  useEffect(() => {
    getData();
  }, [Location]);

  return (
    <div className="bannerHotwrap">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="bannerSlider"
      >
        <SwiperSlide>
          <Card className="Card " style={{ width: '20rem' }}>
            <Card.Img variant="top" className="foodCardData1Img" />
            <button className="Heart_Btn" onClick={toggleLike1}>
              <img
                src={like1 ? PinkHeart : Heart}
                className="Card_Heart"
                alt=""
              />
            </button>
            <Card.Body>
              <Card.Title className="Card_Title">
                {foodCardData1.product_name}
              </Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {foodCardData1.city_name} | {foodCardData1.area_name}
                </span>
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT${foodCardData1.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card " style={{ width: '20rem' }}>
            <Card.Img variant="top" className="foodCardData2Img" />
            <button className="Heart_Btn" onClick={toggleLike2}>
              <img
                src={like2 ? PinkHeart : Heart}
                className="Card_Heart"
                alt=""
              />
            </button>

            <Card.Body>
              <Card.Title className="Card_Title">
                {foodCardData2.product_name}
              </Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {foodCardData2.city_name} | {foodCardData2.area_name}
                </span>
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT${foodCardData2.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="foodCardData3Img" />
            <button className="Heart_Btn" onClick={toggleLike3}>
              <img
                src={like3 ? PinkHeart : Heart}
                className="Card_Heart"
                alt=""
              />
            </button>

            <Card.Body>
              <Card.Title className="Card_Title">
                {foodCardData3.product_name}
              </Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {foodCardData3.city_name} | {foodCardData3.area_name}
                </span>
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT${foodCardData3.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="foodCardData4Img" />
            <button className="Heart_Btn" onClick={toggleLike4}>
              <img
                src={like4 ? PinkHeart : Heart}
                className="Card_Heart"
                alt=""
              />
            </button>

            <Card.Body>
              <Card.Title className="Card_Title">
                {foodCardData4.product_name}
              </Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {foodCardData4.city_name} | {foodCardData4.area_name}
                </span>
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT${foodCardData4.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="foodCardData5Img" />
            <button className="Heart_Btn" onClick={toggleLike5}>
              <img
                src={like5 ? PinkHeart : Heart}
                className="Card_Heart"
                alt=""
              />
            </button>
            <Card.Body>
              <Card.Title className="Card_Title">
                {foodCardData5.product_name}
              </Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {foodCardData5.city_name} | {foodCardData5.area_name}
                </span>
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT${foodCardData5.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="foodCardData6Img" />
            <button className="Heart_Btn" onClick={toggleLike6}>
              <img
                src={like6 ? PinkHeart : Heart}
                className="Card_Heart"
                alt=""
              />
            </button>

            <Card.Body>
              <Card.Title className="Card_Title">
                {foodCardData6.product_name}
              </Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {foodCardData6.city_name} | {foodCardData6.area_name}
                </span>
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT${foodCardData6.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
