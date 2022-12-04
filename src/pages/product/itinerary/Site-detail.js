import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { Container } from 'react-bootstrap';
import SiteCarousel from './Carousel/SiteCarousel';
import BreadCrumb from '../../../Component/BreadCrumb/BreadCrumb';
import SiteDes from './SiteDes';
import './Site-detail.scss';
// import './Carousel/SiteCarousel.scss';
import {
  SITE_DETAIL,
  ITINERARY_ADDITEM,
  ITINERARY_LIST,
  ITINERARY_ADDLIST,
} from './site-config';

import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';
import Calendar from '../../../icon/calendar+add.svg';
import Map_icon from '../../../icon/map_blue.svg';
import Map_Green_icon from '../../../icon/map.svg';
import Food_icon from '../../../icon/food_blue.svg';
import Site_icon from '../../../icon/itinerary_blue.svg';
import Phone_icon from '../../../icon/iphone.svg';
import Star_icon from '../../../icon/star.svg';
import HashChange from '../food/HashChange';

function SiteDetail() {
  const [siteData, setSiteData] = useState('');
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];

  async function getData() {
    const response = await axios.get(SITE_DETAIL + sid);
    setSiteData(response.data);
  }

  const [userData, setUserData] = useState([]);

  async function userDatas() {
    if (localStorage.getItem('auth') !== null) {
      const membersid = JSON.parse(localStorage.getItem('auth')).sid;
      const response = await axios.get(ITINERARY_LIST + '/' + membersid);
      setUserData(response.data);
    }
  }

  const [formData, setFormData] = useState({
    list_number: 0,
    day: 1,
    sequence: 10,
    category: 1,
    category_id: sid,
    time: null,
  });

  useEffect(() => {
    getData();
    userDatas();
  }, [location]);

  const mySubmit = async () => {
    if (localStorage.getItem('auth') === null) {
      return Swal.fire({
        title: '請先登入',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
    }
    let selOptions = {};
    let j = 1;
    userData.map((el, i) => {
      selOptions[i] = el.list_name;
      j++;
    });
    const newOpt = { ...selOptions, newList: `新增行程` };
    console.log(newOpt);
    const { value: selected } = await Swal.fire({
      title: '請選擇要新增至哪個行程?',
      input: 'select',
      inputOptions: newOpt,
      inputPlaceholder: '請選擇行程',
      confirmButtonText: '確認',
      confirmButtonColor: '#59d8a1',
      showCancelButton: true,
      cancelButtonText: '取消',
      cancelButtonColor: '#D9D9D9',
    });
    console.log(selected);

    if (selected === 'newList') {
      const { value: listname } = await Swal.fire({
        title: '請輸入行程名稱',
        input: 'text',
        inputValue: `我的行程${j}`,
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
        allowOutsideClick: false,
        inputValidator: (value) => {
          if (!value) {
            return '請輸入名稱';
          }
        },
      });

      const membersid = JSON.parse(localStorage.getItem('auth')).sid;
      const listNumber = uuidv4();
      const { data } = await axios.post(ITINERARY_ADDLIST, {
        member_sid: membersid,
        list_number: listNumber,
        list_name: listname,
        day: 1,
        status: 1,
      });
      if (data.success) {
        const { data } = await axios.post(ITINERARY_ADDITEM, {
          list_number: listNumber,
          day: 1,
          sequence: 10,
          category: 1,
          category_id: +sid,
          time: null,
        });
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: `建立並新增至${listname}`,
            confirmButtonText: '確認',
            confirmButtonColor: '#59d8a1',
          });
        } else {
          alert('註冊失敗');
        }
      }
    } else if (selected <= userData.length) {
      setFormData({
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 1,
        category_id: sid,
        time: null,
      });
      const { data } = await axios.post(ITINERARY_ADDITEM, {
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 1,
        category_id: +sid,
        time: null,
      });
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: `新增至${selOptions[selected]}`,
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
      } else {
        alert('註冊失敗');
      }
    }
  };

  return (
    <>
      <NavBar />
      <Container className="spaceSite">
        <BreadCrumb siteData={siteData} />
        <SiteCarousel />
        <div className="container ">
          <div className="product_name d-flex">
            <div className="product_name_title">
              <h1>{siteData.name}</h1>
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
                  mySubmit();
                }}
              >
                <img src={Calendar} className="Calendar_icon" alt="" />
              </button>
            </div>
          </div>
          <div
            className="container location d-flex "
            style={{ justifyContent: 'space-between' }}
          >
            <div className="map_cate d-flex " style={{ alignItems: 'center' }}>
              <div className="map d-flex">
                <img src={Map_icon} alt="" className="Map_icon" />
                <p style={{ padding: 0 }}>
                  {siteData.city_name} | {siteData.area_name}
                </p>
              </div>
              <div className="cate d-flex" style={{ alignItems: 'center' }}>
                <img src={Site_icon} alt="" className="Food_icon" />
                <p style={{ padding: 0 }}>{siteData.site_category_name}</p>
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-secondary">
                查看相關票卷
              </button>
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
