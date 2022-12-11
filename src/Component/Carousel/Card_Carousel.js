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
import { MY_HOST } from '../../config.js';
import { useFoodContext } from '../../pages/product/food/FoodContext/FoodContext';
export default function Card_Carousel() {
  const { collect, setCollect } = useFoodContext();
  //設定６張卡片狀態
  const [foodCardData1, setFoodCardData1] = useState({});
  const [foodCardData2, setFoodCardData2] = useState({});
  const [foodCardData3, setFoodCardData3] = useState({});
  const [foodCardData4, setFoodCardData4] = useState({});
  const [foodCardData5, setFoodCardData5] = useState({});
  const [foodCardData6, setFoodCardData6] = useState({});

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
  }, [Location]);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper cardMySwiper"
    >
      <SwiperSlide className="cardSlide">
        <Card className="MyCard col-3" style={{ width: '20rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={MY_HOST + `/uploads/` + foodCardData1.product_photo}
            />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData1.product_name}
            </Card.Title>

            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span className="Card_Score">
                {foodCardData1.city_name} | {foodCardData1.area_name}
              </span>
            </Card.Text>
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = foodCardData1.sid;
                    const collect_product_name = foodCardData1.product_name;

                    //後端先發送移除收藏
                    if (collect.includes(foodCardData1.product_name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log(1111);
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== foodCardData1.product_name;
                        })
                      );
                    } else {
                      //前端發送新增收藏
                      axios.post(
                        'http://localhost:3001/productAll/AddCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, foodCardData1.product_name]);
                    }
                  }}
                >
                  <img
                    src={
                      collect.includes(foodCardData1.product_name)
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect.includes(foodCardData1.product_name)
                      ? Number(foodCardData1.collect) + 1
                      : foodCardData1.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  {`NT$` + foodCardData1.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="cardSlide">
        <Card className="MyCard col-3" style={{ width: '20rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={MY_HOST + `/uploads/` + foodCardData2.product_photo}
            />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData2.product_name}
            </Card.Title>

            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span className="Card_Score">
                {foodCardData2.city_name} | {foodCardData2.area_name}
              </span>
            </Card.Text>
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = foodCardData2.sid;
                    const collect_product_name = foodCardData2.product_name;

                    //後端先發送移除收藏
                    if (collect.includes(foodCardData2.product_name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log(1111);
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== foodCardData2.product_name;
                        })
                      );
                    } else {
                      //前端發送新增收藏
                      axios.post(
                        'http://localhost:3001/productAll/AddCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, foodCardData2.product_name]);
                    }
                  }}
                >
                  <img
                    src={
                      collect.includes(foodCardData2.product_name)
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect.includes(foodCardData2.product_name)
                      ? Number(foodCardData2.collect) + 1
                      : foodCardData2.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  {`NT$` + foodCardData2.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="cardSlide">
        <Card className="MyCard col-3" style={{ width: '20rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={MY_HOST + `/uploads/` + foodCardData3.product_photo}
            />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData3.product_name}
            </Card.Title>

            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span className="Card_Score">
                {foodCardData3.city_name} | {foodCardData3.area_name}
              </span>
            </Card.Text>
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = foodCardData3.sid;
                    const collect_product_name = foodCardData3.product_name;

                    //後端先發送移除收藏
                    if (collect.includes(foodCardData3.product_name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log(1111);
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== foodCardData3.product_name;
                        })
                      );
                    } else {
                      //前端發送新增收藏
                      axios.post(
                        'http://localhost:3001/productAll/AddCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, foodCardData3.product_name]);
                    }
                  }}
                >
                  <img
                    src={
                      collect.includes(foodCardData3.product_name)
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect.includes(foodCardData3.product_name)
                      ? Number(foodCardData3.collect) + 1
                      : foodCardData3.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  {`NT$` + foodCardData3.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="cardSlide">
        <Card className="MyCard col-3" style={{ width: '20rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={MY_HOST + `/uploads/` + foodCardData4.product_photo}
            />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData4.product_name}
            </Card.Title>

            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span className="Card_Score">
                {foodCardData4.city_name} | {foodCardData4.area_name}
              </span>
            </Card.Text>
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = foodCardData4.sid;
                    const collect_product_name = foodCardData4.product_name;

                    //後端先發送移除收藏
                    if (collect.includes(foodCardData4.product_name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log(1111);
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== foodCardData4.product_name;
                        })
                      );
                    } else {
                      //前端發送新增收藏
                      axios.post(
                        'http://localhost:3001/productAll/AddCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, foodCardData4.product_name]);
                    }
                  }}
                >
                  <img
                    src={
                      collect.includes(foodCardData4.product_name)
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect.includes(foodCardData4.product_name)
                      ? Number(foodCardData4.collect) + 1
                      : foodCardData4.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  {`NT$` + foodCardData4.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="cardSlide">
        <Card className="MyCard col-3" style={{ width: '20rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={MY_HOST + `/uploads/` + foodCardData5.product_photo}
            />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData5.product_name}
            </Card.Title>

            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span className="Card_Score">
                {foodCardData5.city_name} | {foodCardData5.area_name}
              </span>
            </Card.Text>
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = foodCardData5.sid;
                    const collect_product_name = foodCardData5.product_name;

                    //後端先發送移除收藏
                    if (collect.includes(foodCardData5.product_name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log(1111);
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== foodCardData5.product_name;
                        })
                      );
                    } else {
                      //前端發送新增收藏
                      axios.post(
                        'http://localhost:3001/productAll/AddCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, foodCardData5.product_name]);
                    }
                  }}
                >
                  <img
                    src={
                      collect.includes(foodCardData5.product_name)
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect.includes(foodCardData5.product_name)
                      ? Number(foodCardData5.collect) + 1
                      : foodCardData5.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  {`NT$` + foodCardData5.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="cardSlide">
        <Card className="MyCard col-3" style={{ width: '20rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={MY_HOST + `/uploads/` + foodCardData6.product_photo}
            />
          </div>
          <Card.Body>
            <Card.Title className="Card_Title">
              {foodCardData6.product_name}
            </Card.Title>

            <Card.Text className="Card_Text">
              <Card.Img src={Map} className="Map_icon" />
              <span className="Card_Score">
                {foodCardData6.city_name} | {foodCardData6.area_name}
              </span>
            </Card.Text>
            <div className="d-flex PriceAndCollect">
              <div>
                <button
                  className="Heart_btn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = foodCardData6.sid;
                    const collect_product_name = foodCardData6.product_name;

                    //後端先發送移除收藏
                    if (collect.includes(foodCardData6.product_name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log(1111);
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== foodCardData6.product_name;
                        })
                      );
                    } else {
                      //前端發送新增收藏
                      axios.post(
                        'http://localhost:3001/productAll/AddCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, foodCardData6.product_name]);
                    }
                  }}
                >
                  <img
                    src={
                      collect.includes(foodCardData6.product_name)
                        ? PinkHeart
                        : Heart
                    }
                    style={{ width: '25px', height: '25px' }}
                    alt=""
                  />
                  <span>
                    {collect.includes(foodCardData6.product_name)
                      ? Number(foodCardData6.collect) + 1
                      : foodCardData6.collect}
                  </span>
                </button>
              </div>
              <div>
                <h2 variant="primary" className="Card_Price">
                  {`NT$` + foodCardData6.p_selling_price}
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}
