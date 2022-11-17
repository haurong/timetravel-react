import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Carousel from '../../../Component/Carousel/Carousel';
import Pagination from '../../../Component/Pagination/Pagination';
import Card_Carousel from '../../../Component/Carousel/Card_Carousel';
import Heart_icon from '../../../icon/heart_gray.svg';
import Calendar_icon from '../../../icon/calendar.svg';
import Map_icon from '../../../icon/map_blue.svg';
import Food_icon from '../../../icon/food_blue.svg';
import Phone_icon from '../../../icon/iphone.svg';
import Star_icon from '../../../icon/star.svg';
import Minus_icon from '../../../icon/minus.svg';
import Add_icon from '../../../icon/add.svg';
import Card_List from '../../../Component/Card_List/Card_List';
import './Food.scss';
//breadcrumb還沒導入component
function Food() {
  return (
    <>
      <NavBar />

      <div className="container" style={{ marginTop: '80px' }}>
        <nav aria-label="breadcrumb">
          <div className="container breadcrumb">
            <ol className="breadcrumb" style={{ marginTop: '30px' }}>
              <li className="breadcrumb-item">
                <a href="#">首頁</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">美食列表</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">咖啡</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                萬祝號
              </li>
            </ol>
          </div>
        </nav>
        <Carousel />
        <div className="container">
          <div className="product_name d-flex">
            <div className="product_name_title">
              <h4>萬祝號</h4>
            </div>
            <div className="Heart_Calendar_icon">
              <img src={Heart_icon} className="Heart_icon" alt="" />
              <img src={Calendar_icon} className="Calender_icon" alt="" />
            </div>
          </div>
          <div className="star_group">
            <img src={Star_icon} alt="" />
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
                <p>基隆市｜仁愛區</p>
              </div>
              <div className="cate d-flex">
                <img src={Food_icon} alt="" className="Food_icon" />
                <p>咖啡</p>
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
        <div className="col-lg-9">
          <div className="container product_text">
            <p>
              萬祝號的萬祝，有萬千祝福之意，在造船廠後方開咖啡店，還取了這個有意義的名字，
              <br />
              萬祝號除了有專業的咖啡甜點職人展手藝，布置裝潢混合多種元素，每個角落都是美拍好地方
            </p>
          </div>
        </div>
        <div className="choose col-lg-3 align-items-center ">
          <p className="quantity_title">選擇張數</p>
          <div className="quantity d-flex">
            <img src={Minus_icon} alt="" className="Minus_icon" />
            <p>1</p>
            <img src={Add_icon} alt="" className="Add_icon" />
          </div>
          <div className="price">
            <h2 className="price1">TWD$100</h2>
            <h1 className="price2">TWD$79</h1>
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
      {/* <div className="container">
        <Card_Carousel />
      </div> */}
      {/* <Card_List /> */}
      <Footer />
    </>
  );
}

export default Food;
