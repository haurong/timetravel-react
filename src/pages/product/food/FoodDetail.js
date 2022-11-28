import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

import { FOOD_ITEM } from '../../../config.js';
import { FOOD_COMMIT } from '../../../config.js';
import FoodMap from './FoodMap';
import Commit from './Commit';
import CommitSelect from './CommitSelect';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import BreadCrumb from './BreadCrumb';
import Carousel from '../../../Component/Carousel/Carousel';
import Card_Carousel from '../../../Component/Carousel/Card_Carousel';
import HashChange from './HashChange';
import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';
import Calendar from '../../../icon/calendar+add.svg';
import ActiveCalendar from '../../../icon/calendar+greenadd.svg';

import Map_icon from '../../../icon/map_blue.svg';
import Food_icon from '../../../icon/food_blue.svg';
import Phone_icon from '../../../icon/iphone.svg';
import Star_icon from '../../../icon/star.svg';
import Minus_icon from '../../../icon/minus.svg';
import Add_icon from '../../../icon/add.svg';
import House_icon from '../../../icon/house.svg';

import './FoodDetail.scss';
//breadcrumb還沒導入component
function FoodDetail() {
  //拿到單筆資料
  const [foodData, setFoodData] = useState({});

  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);
  const [add, setAdd] = useState(false);
  const toggleAdd = () => setAdd(!add);

  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(foodData.p_selling_price);
  const a = foodData.p_selling_price;
  console.log(a);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];

  async function getData() {
    const response = await axios.get(FOOD_ITEM + sid);
    // const response = await axios.get(SITE_DETAIL);
    setFoodData(response.data);
    setTotalPrice(response.data.p_selling_price);
  }

  const [commitData, setCommitData] = useState([]);

  const usp = new URLSearchParams(location.search);

  const Food_part0 = useRef();
  const Food_part1 = useRef();
  const Food_part2 = useRef();
  const Food_part3 = useRef();
  const Food_part4 = useRef();
  const [allPart, setAllPart] = useState({});
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener('scroll', () => {
    if (isScroll === false) {
      setIsScroll(true);
    }
  });
  useEffect(() => {
    if (isScroll) {
      let part0 = Food_part0.current.offsetTop;
      let part1 = Food_part1.current.offsetTop;
      let part2 = Food_part2.current.offsetTop;
      let part3 = Food_part3.current.offsetTop;
      let part4 = Food_part4.current.offsetTop;
      // console.log(part0, part1, part2, part3, part4);
      setAllPart({
        part0: part0,
        part1: part1,
        part2: part2,
        part3: part3,
        part4: part4,

        bodyOffsetY: document.body.offsetHeight,
      });
    }
  }, [isScroll]);

  async function getList() {
    const response = await axios.get(FOOD_COMMIT);
    setCommitData(response.data);
  }
  console.log(commitData);
  useEffect(() => {
    getList();
  }, [location]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container" style={{ marginTop: '80px' }}>
        <div ref={Food_part0} id="Food_part0"></div>
        <nav aria-label="breadcrumb">
          <div className="container breadcrumb mt-5">
            <BreadCrumb foodData={foodData} />
          </div>
        </nav>
        <div className="ComputerHidden">
          <HashChange allPart={allPart} />
        </div>
        <div className="container carousel">
          <Carousel />
        </div>
        <div className="container ">
          <div className="product_name d-flex">
            <div className="product_name_title">
              <h1>{foodData.product_name} WANCHUHAO</h1>
            </div>

            <div className="Heart_Calendar_icon">
              <button className="HeartBtn" onClick={toggleLike}>
                <img
                  src={like ? PinkHeart : Heart}
                  className="Heart_icon"
                  alt=""
                />
              </button>
              <button
                className="CalendarBtn"
                onClick={() => {
                  Swal.fire({
                    icon: 'success',
                    title: '新增至我的行程',
                  });
                  toggleAdd();
                }}
              >
                <img
                  src={add ? ActiveCalendar : Calendar}
                  className="Calendar_icon"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="star_group">
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <p>4.3顆星</p>
          </div>
          <div className="container location d-flex ">
            <div className="map_cate d-flex ">
              <div className="map d-flex">
                <img src={Map_icon} alt="" className="Map_icon" />
                <p>
                  {foodData.city_name} | {foodData.area_name}
                </p>
              </div>
              <div className="cate d-flex">
                <img src={Food_icon} alt="" className="Food_icon" />
                <p>{foodData.categorise_name}</p>
              </div>
            </div>
            <div className="tickets_group d-flex ">
              <img src={Phone_icon} alt="" className="Phone_icon" />
              <p className="tickets">請出示電子票券</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="col-lg-8  product_text">
          <div className="container product_text">
            <p>{foodData.product_introdution}</p>
          </div>
        </div>
        <div className="choose col-lg-3 align-items-center ">
          <p className="quantity_title">選擇張數</p>
          <div className="quantity d-flex">
            <button
              className="countBtn"
              onClick={() => {
                const newMinusCount = count - 1;
                if (count === 1) {
                  return count;
                } else {
                  setCount(newMinusCount);
                }
                const newMinusTotalPrice =
                  totalPrice - foodData.p_selling_price;
                if (totalPrice === foodData.p_selling_price) {
                  return totalPrice;
                } else {
                  setTotalPrice(newMinusTotalPrice);
                }
              }}
            >
              <img src={Minus_icon} alt="" className="Minus_icon" />
            </button>
            <p>{count}</p>
            <button
              className="countBtn"
              onClick={() => {
                const newAddCount = count + 1;
                setCount(newAddCount);
                const newAddTotalPrice = foodData.p_selling_price * newAddCount;
                setTotalPrice(newAddTotalPrice);
              }}
            >
              <img src={Add_icon} alt="" className="Add_icon" />
            </button>
          </div>
          <div className="price">
            <h2 className="price1">TWD{foodData.p_discounted_price}</h2>
            <h1 className="price2">
              TWD
              {foodData.p_selling_price ? totalPrice : foodData.p_selling_price}
            </h1>
          </div>
          <div className="btnGroup">
            <button type="button" className="btn add_cart">
              加入購物車
            </button>
            <button type="button" className="btn buy_now">
              立即購買
            </button>
          </div>
        </div>
      </div>
      <div className="Food_partHidden" id="Food_part1" ref={Food_part1}></div>
      <div className="container product_information d-flex ">
        <div className="col-lg-8" style={{ marginRight: 'auto' }}>
          <h2>商品介紹</h2>
          <div className=" product_information_img">
            <div className="product_information_img_div1 col-lg-8">
              <div className="product_information_img1"></div>
            </div>
            <p>衣索比亞谷吉(冰)</p>
            <div className="product_information_img_div2 col-lg-8">
              <div className="product_information_img2"></div>
            </div>
            <p>巴斯克乳酪</p>
            <div className="product_information_img_div3 col-lg-8">
              <div className="product_information_img3"></div>
            </div>
            <p>鳳梨冰美式</p>
          </div>
          <div
            className="Food_partHidden"
            id="Food_part2"
            ref={Food_part2}
          ></div>
          <div className="how_to_use ">
            <div className="use_title_img d-flex align-items-center">
              <img
                src={Phone_icon}
                style={{ width: '30px', height: '30px' }}
                alt=""
              />

              <h2>如何使用</h2>
            </div>
            <ul>
              <li>現場請出示QRCODE</li>
            </ul>
          </div>
          <div
            className="Food_partHidden"
            id="Food_part3"
            ref={Food_part3}
            // style={{ backgroundColor: 'red', height: '5px' }}
          ></div>
          <div className="store ">
            <div className="store_title_img d-flex align-items-center">
              <img
                src={House_icon}
                style={{ width: '30px', height: '30px' }}
                alt=""
              />
              <h2>適用店家</h2>
            </div>
            <p>{foodData.product_name}</p>
            <p>地址：{foodData.product_address}</p>
            <p>營業時間：{foodData.p_business_hours}</p>
            {/* <button
              type="button"
              className="btn btn-outline-success map_btn 
            "
              onClick={() => {
                // const name = foodData.product_name;
                // Swal.fire({
                //   title: '萬祝號',
                //   target: <FoodMap />,
                //   targetWidth: 400,
                //   targetHeight: 200,
                //   imageAlt: 'Custom image',
                // });
                // <FoodMap />;
              }}
            >
              <img src={Map_Green_icon} alt="" width="25" height="25" />
              <span>查看地圖</span>
            </button> */}
            <div className="foodmap">
              <FoodMap />
            </div>
          </div>
          <div
            className="Food_partHidden"
            id="Food_part4"
            ref={Food_part4}
          ></div>
          <div className="container commitGroup ">
            <div className="">
              <div
                className="d-flex  commitTitle"
                style={{ alignItems: 'center' }}
              >
                <h2
                  style={{
                    color: '#4D4D4D',
                    margin: '40px 0px',
                    marginRight: 'auto',
                  }}
                >
                  旅客評價
                </h2>
                <CommitSelect />
              </div>
              <Commit rows={commitData} className="commit" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 foodHashChange">
          <HashChange allPart={allPart} />
        </div>
      </div>
      <div className="givePadding"></div>
      <div className="container ">
        <h2 className="cardCarouselTitle">更多美食推薦</h2>
        <Card_Carousel className="cardCarousel" />
      </div>
      <Footer />
    </>
  );
}

export default FoodDetail;
