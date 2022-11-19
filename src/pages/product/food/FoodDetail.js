import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import BreadCrumb from '../stays/Breadcrumb/Breadcrumb';
import Commit from '../stays/Comment/Comment';
import Carousel from '../../../Component/Carousel/Carousel';
import Card_Carousel from '../../../Component/Carousel/Card_Carousel';
import Heart_icon from '../../../icon/heart_gray.svg';
import Calendar_icon from '../../../icon/calendar.svg';
import Map_icon from '../../../icon/map_blue.svg';
import Map_Green_icon from '../../../icon/map.svg';
import Food_icon from '../../../icon/food_blue.svg';
import Phone_icon from '../../../icon/iphone.svg';
import Star_icon from '../../../icon/star.svg';
import Minus_icon from '../../../icon/minus.svg';
import Add_icon from '../../../icon/add.svg';
import House_icon from '../../../icon/house.svg';
import { imgUrl } from '../../../config.js';
import './FoodDetail.scss';
//breadcrumb還沒導入component
function Food() {
  return (
    <>
      <NavBar />

      <div className="container" style={{ marginTop: '80px' }}>
        <nav aria-label="breadcrumb">
          <div className="container breadcrumb mt-5">
            <BreadCrumb />
          </div>
        </nav>
        <div className="container">
          <Carousel />
        </div>
        <div className="container">
          <div className="product_name d-flex">
            <div className="product_name_title">
              <h1>萬祝號</h1>
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
      <div className="container product_information d-flex ">
        <div className="col-lg-9">
          <h2>商品介紹</h2>
          <div className=" product_information_img">
            <img src={`${imgUrl}/uploads/Food/F116-4.jpg`} alt="" />
            <p>吧台區</p>
            <img src={`${imgUrl}/uploads/Food/F116-3.jpg`} alt="" />
            <p>巴斯克乳酪蛋糕</p>
            <img src={`${imgUrl}/uploads/Food/F116-2.jpg`} alt="" />
            <p>咖啡拿鐵</p>
          </div>
        </div>
        <div className="col-lg-3 hashchange justify-content-center">
          <div className="hashchange_slider"></div>
          <div className="hashchange_text col-lg-4 justify-content-center">
            <div>
              <p>商品介紹</p>
            </div>
            <div>
              <p>如何使用</p>
            </div>
            <div>
              <p>適用店家</p>
            </div>
            <div>
              <p>旅客評價</p>
            </div>
            <div>
              <p>推薦美食</p>
            </div>
            <div>
              <p>回到最上層</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container use_and_store col-lg-10 p-0">
        <div className="how_to_use col-lg-10">
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
        <div className="store col-lg-10">
          <div className="store_title_img d-flex align-items-center">
            <img
              src={House_icon}
              style={{ width: '30px', height: '30px' }}
              alt=""
            />
            <h2>適用店家</h2>
          </div>
          <p>萬祝號</p>
          <p>地址：基隆市中正區中正路560號</p>
          <p>營業時間：1100-1900</p>
          <button type="button" className="btn btn-outline-success map_btn">
            <img src={Map_Green_icon} alt="" width="25" height="25" />
            <span>查看地圖</span>
          </button>
        </div>
      </div>
      <div className="container givePadding col-lg-10 ">
        <Commit className="mt-5" />
      </div>
      <div className="container ">
        <Card_Carousel />
      </div>
      <Footer />
    </>
  );
}

export default Food;
