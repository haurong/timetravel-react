import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { Container } from 'react-bootstrap';
import Carousel from '../../../Component/Carousel/Carousel';
import BreadCrumb from '../../../Component/BreadCrumb/BreadCrumb';
import SiteDes from './SiteDes';
import './Site-detail.scss';
import { SITE_DETAIL } from './site-config';

import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';
import Calendar from '../../../icon/calendar+add.svg';
import Map_icon from '../../../icon/map_blue.svg';
import Map_Green_icon from '../../../icon/map.svg';
import Food_icon from '../../../icon/food_blue.svg';
import Phone_icon from '../../../icon/iphone.svg';
import Star_icon from '../../../icon/star.svg';
import HashChange from '../food/HashChange';

function SiteDetail() {
  const [siteData, setSiteData] = useState({});
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];
  async function getData() {
    const response = await axios.get(SITE_DETAIL + sid);
    // const response = await axios.get(SITE_DETAIL);
    setSiteData(response.data);
  }

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <>
      <NavBar />
      <Container className="spaceSite">
        <BreadCrumb siteData={siteData} />
        <Carousel />
        <div className="container ">
          <div className="product_name d-flex">
            <div className="product_name_title">
              <h1>{siteData.product_name} WANCHUHAO</h1>
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
                }}
              >
                <img src={Calendar} className="Calendar_icon" alt="" />
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
                  {siteData.city_name} | {siteData.area_name}
                </p>
              </div>
              <div className="cate d-flex">
                <img src={Food_icon} alt="" className="Food_icon" />
                <p>{siteData.categorise_name}</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: '80px' }}>
          <SiteDes siteData={siteData} />
          <div
            className="hashchange"
            style={{
              width: '240px',
              marginLeft: '10px',
              alignItems: 'center',
              color: ' #8a8a8a',
            }}
          >
            <div>
              <Link>旅遊攻略</Link>
            </div>
            <div>
              <Link>景點介紹</Link>
            </div>
            <div>
              <Link>如何前往</Link>
            </div>
            <div>
              <Link>開放時間</Link>
            </div>
            <div>
              <Link>回到頂部</Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SiteDetail;
