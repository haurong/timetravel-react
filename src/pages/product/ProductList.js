import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Card1 from '../.././Component/Card_List/Card';
import { useLocation } from 'react-router-dom';
import { FOOD_LIST } from '../../config';
import { SITE_LIST } from '../product/itinerary/site-config';
import { HOTEL_LIST } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import MyPagination from '../../Component/Pagination/Pagination';
import Sidebar1 from '../../Component/Sidebar1/Sidebar1';
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
  const [hotelData, setHotelData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });
  const allProductTotalPage =
    hotelData.totalPages + foodData.totalPages + siteData.totalPages;
  const allProductPage = hotelData.page + siteData.page + foodData.page;

  console.log(allProductTotalPage);
  const [like, setLike] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const toggleLike1 = () => setLike(!like);

  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getFoodList() {
    const response_food = await axios.get(FOOD_LIST);
    setFoodData(response_food.data);
    const response_site = await axios.get(SITE_LIST);
    console.log(response_site.data.rows);
    setSiteData(response_site.data);
    const response_hotel = await axios.get(HOTEL_LIST);
    setHotelData(response_hotel.data);
    console.log(response_hotel.data.rows);
  }
  const addLikeListHandler = (id) => {
    if (likeList.includes(id)) {
      return;
    } else {
      setLikeList([...likeList, id]);
      return;
    }
  };

  useEffect(() => {
    // getSiteList();

    getFoodList();
  }, []);

  return (
    <>
      <NavBar />
      <div className="givePadding"></div>

      <div className="container givePadding col12 d-flex">
        <div className="col-3">
          <Sidebar1 />
        </div>
        <div className="col-lg-9 ">
          <Row xs={1} md={2} lg={3} className="g-4 ">
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
                    onClick={() => {
                      addLikeListHandler(el.product_number);

                      toggleLike1();
                    }}
                  >
                    <img
                      src={like ? PinkHeart : Heart}
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
          <Row xs={1} md={2} lg={3} className="g-4 ">
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
                      src={like ? PinkHeart : Heart}
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
                    <h2 variant="primary" className="Card_Price"></h2>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4 ">
            {hotelData.rows.map((el) => {
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
                      src={like ? PinkHeart : Heart}
                      className="Card_Heart"
                      alt=""
                    />
                  </button>
                  <Card.Body>
                    <Card.Title className="Card_Title">
                      {el.hotel_name}
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
      </div>
      <div className=" col-12 givePadding">
        <MyPagination page={allProductPage} totalPages={allProductTotalPage} />
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
