import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
//引入卡片輪播資料
import { FOOD_CARD_ITEM1 } from '../../config.js';
import { FOOD_CARD_ITEM2 } from '../../config.js';
import { FOOD_CARD_ITEM3 } from '../../config.js';
import { FOOD_CARD_ITEM4 } from '../../config.js';
import { FOOD_CARD_ITEM5 } from '../../config.js';
import { FOOD_CARD_ITEM6 } from '../../config.js';
//引入樣式設定
import './Card_Carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';
import { ADD_COLLECT } from '../../config';
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

  const [collect, setCollect] = useState(false);
  async function getData() {
    const foodCardItem1 = await axios.get(FOOD_CARD_ITEM1);
    setFoodCardData1(foodCardItem1.data);
    console.log(foodCardItem1.data);
    const foodCardItem2 = await axios.get(FOOD_CARD_ITEM2);
    setFoodCardData2(foodCardItem2.data);
    console.log(foodCardItem2.data);
    const foodCardItem3 = await axios.get(FOOD_CARD_ITEM3);
    setFoodCardData3(foodCardItem3.data);
  console.log(foodCardItem3.data);
    const foodCardItem4 = await axios.get(FOOD_CARD_ITEM4);
    setFoodCardData4(foodCardItem4.data);
    //console.log(foodCardData4);
    const foodCardItem5 = await axios.get(FOOD_CARD_ITEM5);
    setFoodCardData5(foodCardItem5.data);
    //console.log(foodCardData5);
    const foodCardItem6 = await axios.get(FOOD_CARD_ITEM6);
    setFoodCardData6(foodCardItem6.data);
    console.log(foodCardData6);
  }

  useEffect(() => {
    getData();
  }, [Location,collect]);

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
        <Card className="Card " style={{ width: '20rem' }}>
          <div className="foodCardDataOutside">
            <Card.Img variant="top" className="foodCardData1Img" />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData1.product_name}
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span class="Card_Score">
                {foodCardData1.city_name} | {foodCardData1.area_name}
              </span>
            </Card.Text>{' '}
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={async () => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const food_product_sid = foodCardData1.sid;
                    const { data } = await axios.post(ADD_COLLECT, {
                      member_sid: member_sid,
                      food_product_sid: food_product_sid,
                    });
                    console.log({ data }.data);
                  }}
                >
                  <img
                    src={
                      foodCardData1.product_sid === foodCardData1.sid
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect
                      ? foodCardData1.collect + 1
                      : foodCardData1.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  NT${foodCardData1.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card " style={{ width: '20rem' }}>
          <div className="foodCardDataOutside">
            <Card.Img variant="top" className="foodCardData2Img" />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData2.product_name}
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span class="Card_Score">
                {foodCardData2.city_name} | {foodCardData2.area_name}
              </span>
            </Card.Text>{' '}
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={async () => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const food_product_sid = foodCardData2.sid;
                    const { data } = await axios.post(ADD_COLLECT, {
                      member_sid: member_sid,
                      food_product_sid: food_product_sid,
                    });
                    console.log({ data }.data);
                  }}
                >
                  <img
                    src={
                      foodCardData2.product_sid === foodCardData2.sid
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect
                      ? foodCardData2.collect + 1
                      : foodCardData2.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  NT${foodCardData2.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card " style={{ width: '20rem' }}>
          <div className="foodCardDataOutside">
            <Card.Img variant="top" className="foodCardData3Img" />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData3.product_name}
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span class="Card_Score">
                {foodCardData3.city_name} | {foodCardData3.area_name}
              </span>
            </Card.Text>{' '}
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={async () => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const food_product_sid = foodCardData3.sid;
                    const { data } = await axios.post(ADD_COLLECT, {
                      member_sid: member_sid,
                      food_product_sid: food_product_sid,
                    });
                    console.log({ data }.data);
                  }}
                >
                  <img

                  
                    src={
                      foodCardData3.sid === foodCardData3.product_sid
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect
                      ? setCollect(foodCardData3.collect + 1)
                      : foodCardData3.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  NT${foodCardData3.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card " style={{ width: '20rem' }}>
          <div className="foodCardDataOutside">
            <Card.Img variant="top" className="foodCardData4Img" />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData4.product_name}
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span class="Card_Score">
                {foodCardData4.city_name} | {foodCardData4.area_name}
              </span>
            </Card.Text>{' '}
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={async () => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const food_product_sid = foodCardData4.sid;
                    const { data } = await axios.post(ADD_COLLECT, {
                      member_sid: member_sid,
                      food_product_sid: food_product_sid,
                    });
                    console.log({ data }.data);
                  }}
                >
                  <img
                    src={
                      foodCardData4.product_sid === foodCardData4.sid
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect
                      ? foodCardData4.collect + 1
                      : foodCardData4.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  NT${foodCardData4.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card " style={{ width: '20rem' }}>
          <div className="foodCardDataOutside">
            <Card.Img variant="top" className="foodCardData5Img" />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData5.product_name}
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span class="Card_Score">
                {foodCardData5.city_name} | {foodCardData5.area_name}
              </span>
            </Card.Text>{' '}
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={async () => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const food_product_sid = foodCardData5.sid;
                    const { data } = await axios.post(ADD_COLLECT, {
                      member_sid: member_sid,
                      food_product_sid: food_product_sid,
                    });
                    console.log({ data }.data);
                  }}
                >
                  <img
                    src={
                      foodCardData5.sid === foodCardData5.product_sid
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect
                      ? foodCardData5.collect + 1
                      : foodCardData5.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  NT${foodCardData5.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="Card " style={{ width: '20rem' }}>
          <div className="foodCardDataOutside">
            <Card.Img variant="top" className="foodCardData6Img" />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData6.product_name}
            </Card.Title>
            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span class="Card_Score">
                {foodCardData6.city_name} | {foodCardData6.area_name}
              </span>
            </Card.Text>{' '}
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={async () => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const food_product_sid = foodCardData6.sid;
                    const { data } = await axios.post(ADD_COLLECT, {
                      member_sid: member_sid,
                      food_product_sid: food_product_sid,
                    });
                    console.log({ data }.data);
                  }}
                >
                  <img
                    src={
                      foodCardData6.sid === foodCardData6.product_sid
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect
                      ? foodCardData6.collect + 1
                      : foodCardData6.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  NT${foodCardData6.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
    
    </Swiper>
  );
}
