import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Card1 from '../.././Component/Card_List/Card';
import { useLocation } from 'react-router-dom';
import { FOOD_LIST } from '../../config';
import { SITE_LIST } from '../product/itinerary/site-config';
import { HOTEL_LIST } from '../product/stays/hotel-config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
//import GridExample from '../.././Component/Card_List/Card_List';
//import BasicPagination from '../.././Component/Pagination/Pagination';
function ProductList({ foodRows, siteRows }) {
  // console.log({ foodRows, siteRows });
  const [foodData, setFoodData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });

  const [siteData, setSiteData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });
  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getFoodList() {
    const response = await axios.get(FOOD_LIST);
    setFoodData(response.data);
    const response_site = await axios.get(SITE_LIST);
    console.log(response_site.data.rows);
    setSiteData(response_site.data);
  }

  // async function getSiteList() {
  // }

  // if (foodData.length !== 0) {
  // const foodDataList = foodData.rows;
  // const siteDataList = siteData.rows;
  // }

  useEffect(() => {
    // getSiteList();

    getFoodList();
  }, []);

  // console.log(foodDataList);
  // console.log(foodData);
  // console.log(siteData);
  // console.log(hotelData);
  return (
    <>
      <NavBar />
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {foodData.rows.map((el) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={el.product_number}
              >
                <Card.Img
                  variant="top"
                  className="foodCardImg1"
                  src={`${FOOD_IMG}${el.product_photo}`}
                />
                <button
                  data-product-number={el.product_number}
                  className="Heart_Btn"
                  // onClick={() => {
                  //   addLikeListHandler(el.product_number);

                  //   toggleLike1();
                  // }}
                >
                  <img
                    // src={like ? PinkHeart : Heart}
                    className="Card_Heart"
                    alt=""
                  />
                </button>
                <Card.Body>
                  <Card.Title className="Card_Title">
                    {el.product_name}
                  </Card.Title>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span class="Card_Score">
                      {el.city_name} | {el.area_name}
                    </span>
                  </Card.Text>
                  <h2 variant="primary" className="Card_Price">
                    NT$ {el.p_selling_price}
                  </h2>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4">
          {siteData.rows.map((el) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={el.product_number}
              >
                <Card.Img
                  variant="top"
                  className="foodCardImg1"
                  // src={`${FOOD_IMG}${el.product_photo}`}
                />
                <button
                  data-product-number={el.product_number}
                  className="Heart_Btn"
                  // onClick={() => {
                  //   addLikeListHandler(el.product_number);

                  //   toggleLike1();
                  // }}
                >
                  <img
                    // src={like ? PinkHeart : Heart}
                    className="Card_Heart"
                    alt=""
                  />
                </button>
                <Card.Body>
                  <Card.Title className="Card_Title">
                    {el.product_name}
                  </Card.Title>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span class="Card_Score">
                      {el.city_name} | {el.area_name}
                    </span>
                  </Card.Text>
                  <h2 variant="primary" className="Card_Price">
                    NT$
                  </h2>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
