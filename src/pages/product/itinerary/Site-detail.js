import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import map1 from './../../../icon/map.svg';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { Container } from 'react-bootstrap';
import SiteCarousel from './Carousel/SiteCarousel';
import BreadCrumb from '../../../Component/BreadCrumb/BreadCrumb';
// import SiteDes from './SiteDes';
import HashChange from './HashChange';
import { ReactComponent as CalendarAdd } from '../../../icon/calendar+add.svg';
import './Site-detail.scss';
// import './Carousel/SiteCarousel.scss';
import {
  SITE_DETAIL,
  ITINERARY_ADDITEM,
  ITINERARY_LIST,
  ITINERARY_ADDLIST,
  SITE_IMG,
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
import { useFoodContext } from '../food/FoodContext/FoodContext.js';

function SiteDetail() {
  const { collect, setCollect } = useFoodContext();
  const [siteData, setSiteData] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');
  const [img5, setImg5] = useState('');
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];
  const [allPart, setAllPart] = useState({});
  const [isScroll, setIsScroll] = useState(false);

  const Site_part0 = useRef();
  const Site_part1 = useRef();
  const Site_part2 = useRef();
  const Site_part3 = useRef();
  const Site_part4 = useRef();

  window.addEventListener('scroll', () => {
    if (isScroll === false) {
      setIsScroll(true);
    }
  });
  useEffect(() => {
    if (isScroll) {
      let part0 = Site_part0.current.offsetTop;
      let part1 = Site_part1.current.offsetTop;
      let part2 = Site_part2.current.offsetTop;
      let part3 = Site_part3.current.offsetTop;
      let part4 = Site_part4.current.offsetTop;
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

  async function getData() {
    const response = await axios.get(SITE_DETAIL + sid);
    setSiteData(response.data);
    const img1 = response.data.img1.split(',')[0];
    setImg1(img1);
    const img2 = response.data.img1.split(',')[1];
    setImg2(img2);
    const img3 = response.data.img1.split(',')[2];
    setImg3(img3);
    const img4 = response.data.img1.split(',')[3];
    setImg4(img4);
    const img5 = response.data.img1.split(',')[4];
    setImg5(img5);
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
    category_id: 239 + +sid,
    time: null,
  });

  useEffect(() => {
    getData();
    userDatas();
  }, [location]);

  const mySubmit = async () => {
    // 判斷是否登入 如果沒登入
    if (localStorage.getItem('auth') === null) {
      return await Swal.fire({
        title: '請先登入',
        confirmButtonText: '立即登入',
        confirmButtonColor: '#59d8a1',
        showCancelButton: true,
        cancelButtonText: '返回頁面',
        cancelButtonColor: '#D9D9D9',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = '/logIn';
        }
      });
    }
    let selOptions = {};
    let j = 1;
    userData.map((el, i) => {
      selOptions[i] = el.list_name;
      j++;
    });
    const newOpt = { ...selOptions, newList: `建立行程` };
    const { value: selected } = await Swal.fire({
      title: '新增至哪個行程?',
      input: 'select',
      inputOptions: newOpt,
      inputPlaceholder: '',
      confirmButtonText: '確認',
      confirmButtonColor: '#59d8a1',
      showCancelButton: true,
      cancelButtonText: '取消',
      cancelButtonColor: '#D9D9D9',
    });
    console.log(selected);

    if (selected === 'newList') {
      const { value: listname } = await Swal.fire({
        title: '新增行程名稱',
        input: 'text',
        inputValue: `我的行程${j}`,
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
        allowOutsideClick: false,
        inputValidator: (value) => {
          if (!value) {
            return '請輸入行程名稱';
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
          category_id: 239 + +sid,
          time: null,
        });
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: `新增成功`,
            confirmButtonText: '確認',
            confirmButtonColor: '#59d8a1',
          });
        } else {
          console.log('error1');
        }
      }
    } else if (selected <= userData.length) {
      setFormData({
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 1,
        category_id: 239 + +sid,
        time: null,
      });
      const { data } = await axios.post(ITINERARY_ADDITEM, {
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 1,
        category_id: 239 + +sid,
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
        console.log('error2');
      }
    }
  };

  const [position, setPosition] = useState(null);

  async function getPosition() {
    const response = await axios.get(SITE_DETAIL + sid);
    const lat = response.data.lat;
    const lng = response.data.lng;
    setPosition([lat, lng]);
    const img1 = response.data.img1.split(',')[0];
    setImg1(img1);
    const img2 = response.data.img1.split(',')[1];
    setImg2(img2);
    const img3 = response.data.img1.split(',')[2];
    setImg3(img3);
    const img4 = response.data.img1.split(',')[3];
    setImg4(img4);
    const img5 = response.data.img1.split(',')[4];
    setImg5(img5);
    // console.log([lat, lng]);
  }
  const customMarker1 = new L.Icon({
    iconUrl: map1,
    iconSize: [40, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  // console.log(siteData.img1);
  // console.log(siteData.img1.split(','));

  useEffect(() => {
    getPosition();
  }, [location]);

  return (
    <>
      <NavBar />
      <div style={{ marginTop: '160px' }}></div>

      <Container ref={Site_part0} id="Site_part0" style={{ marginTop: '80px' }}>
        <BreadCrumb siteData={siteData} />
        <SiteCarousel
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
        />
        <div className="container ">
          <div className="product_name d-flex">
            <div className="product_name_title">
              <h1>{siteData.name}</h1>
            </div>

            <div className="Heart_Calendar_icon d-flex">
              {/* <button className="HeartBtn" onClick={toggleLike}>
                <img
                  src={like ? PinkHeart : Heart}
                  className="Heart_icon"
                  alt=""
                />
              </button> */}
              <div style={{ paddingRight: '20px' }}>
                <button
                  className="HeartBtn"
                  onClick={() => {
                    const member_sid = JSON.parse(
                      localStorage.getItem('auth')
                    ).sid;
                    const product_sid = siteData.sid;
                    const collect_product_name = siteData.name;

                    //後端先發送移除收藏
                    if (collect.includes(siteData.name)) {
                      axios.post(
                        'http://localhost:3001/productAll/DelCollect',
                        {
                          member_sid: member_sid,
                          product_sid: product_sid,
                          collect_product_name: collect_product_name,
                        }
                      );
                      console.log('移除收藏');
                      //前端顯示空心
                      setCollect(
                        collect.filter((el) => {
                          return el !== siteData.name;
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
                      console.log('新增收藏');
                      //解構出原收藏陣列,把新的收藏塞回去
                      setCollect([...collect, siteData.name]);
                    }
                  }}
                >
                  <img
                    src={collect.includes(siteData.name) ? PinkHeart : Heart}
                    style={{ width: '40px', height: '40px' }}
                    alt=""
                  />
                </button>
              </div>
              <div className="icon">
                <CalendarAdd
                  className="noActiveHotelCalendarAdd"
                  onClick={() => {
                    mySubmit();
                  }}
                />
              </div>
              {/* <button
                className="CalendarBtn"
                onClick={() => {
                  mySubmit();
                }}
              >
                <img src={Calendar} className="Calendar_icon" alt="" />
              </button> */}
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
              {/* <button type="button" className="btn btn-secondary">
                查看相關票卷
              </button> */}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: '80px' }}>
          <div className="siteDesCon col-lg-8" style={{ marginRight: 'auto' }}>
            <h2 ref={Site_part1} id="Site_part1">
              旅遊攻略
            </h2>
            <p style={{ margin: '14px 0' }}>{siteData.description}</p>
            <p style={{ margin: '14px 0' }}>
              每年2月至3月的鬱金香展，讓你一秒進入歐洲
              每年4月為玫瑰展，情侶夫妻的約會聖地
              每年11月至12月的菊展為臺北最盛大的花展
              園藝館、新蘭亭、凱歌堂...等值得走訪的特色建築
            </p>
            <div className="siteDetailSpace"></div>
            <h2 ref={Site_part2} id="Site_part2">
              景點介紹
            </h2>
            <p style={{ margin: '14px 0' }}>
              位在八里的十三行博物館是臺灣第一個考古博物館，當初是為了保護國家二級古蹟的「十三行遺址」而興建，1955年，一架空軍飛機行經八里上空，因為飛機上的羅盤出現磁力異常的反應，因而發現了十三行遺址。接著地質學家、考古學家前來探勘，發現了這裡是史前遺址，也成立了這座考古博物館。
            </p>
            <img src={SITE_IMG + '/' + img2} alt={'/'} />
            <p style={{ margin: '14px 0' }}>
              十三行文化屬於北臺灣地區的鐵器時代，是目前臺灣唯一確定擁有煉鐵技術的史前居民。不但是北臺灣唯一的考古博物館，也是新北市第一所榮獲環境教育場域認證的博物館。全館藉由三組不同型態的建築群，架構成完整的概念，分別表達山與海、過去與現在的意象，並以真實透心的材質，如清水混凝土、砂岩及老化的金屬板等，構築成完整的理念。
            </p>
            <img src={SITE_IMG + '/' + img3} alt={'/'} />
            <p style={{ margin: '14px 0' }}>
              博物館設有遺址出土各項重要文物常設展、特展廳、考古學習體驗室，詳細介紹了有關十三行文化、圓山文化等臺灣過往的遺跡與背景。一千多年前，淡水河左岸的居民住的是干欄屋，用的是人面陶罐，相傳以前食人族原住民都會有出草的活動，到後面就漸漸改用這類的祭祀物品來代替。日常飲食則是取自大海裡的魚蝦貝類。他們的生活方式不是今日的我們能夠想像，但是從十三行博物館則可窺知一二。
            </p>
            <img src={SITE_IMG + '/' + img4} alt={'/'} />
            <p style={{ margin: '14px 0' }}>
              博物館豐富有趣的方式，詳細介紹遺址所發現的十三行文化，讓我們知道十三行人在千年以前過的是什麼的生活；同時還不定期舉辦特展，有時介紹淡水河發展的歷史軌跡，有時也會有富含科學教育意味的考古探索，讓遊客在娛樂之餘，也能吸收到豐富的知識，同時還能啟發孩子對歷史的興趣。
            </p>
            <img src={SITE_IMG + '/' + img5} alt={'/'} />

            <div className="siteDetailSpace"></div>
            <h2 ref={Site_part3} id="Site_part3">
              如何前往
            </h2>
            <p style={{ margin: '14px 0' }}>地址:{siteData.map}</p>
            <p style={{ margin: '14px 0' }}>
              一、搭乘捷運： 捷運淡水站1號出口→渡船→紅13公車→十三行博物館
              捷運關渡站1號出口→紅13公車→十三行博物館
              捷運關渡站1號出口→紅22公車→八里行政中心(十三行博物館)→十三行路→步行5分鐘→十三行博物館
              捷運蘆洲站1號出口→704公車→八里行政中心(十三行博物館)→十三行路→步行5分鐘→十三行博物館
              捷運徐匯中學站(集賢路)→927公車→八里行政中心(十三行博物館)→十三行路→步行5分鐘→十三行博物館
              捷運板橋站→板橋公車站→963公車→八里行政中心(十三行博物館)→十三行路→步行5分鐘→十三行博物館
              <br />
              二、自行開車：
              關渡大橋→臺15線八里方向→中華路→文昌路→博物館路→十三行博物館
              臺64線快速道路八里交流道→中華路→八里大道→商港三路→博物館路→十三行博物館
            </p>
            {position === null ? (
              ''
            ) : (
              <div id="map" style={{ margin: '20px 0' }}>
                <MapContainer
                  center={[
                    siteData.lat || 25.033028,
                    siteData.lng || 121.563593,
                  ]}
                  zoom={14}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position} icon={customMarker1}></Marker>
                </MapContainer>
              </div>
            )}
            {/* <div id="map" style={{ margin: '20px 0' }}>
        <MapContainer
          center={[siteData.lat || 25.033028, siteData.lng || 121.563593]}
          zoom={14}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customMarker1}></Marker>
        </MapContainer>
      </div> */}
            {/* <Map lat={siteData.lat} lng={siteData.lng} /> */}
            <div className="siteDetailSpace"></div>
            <h2 ref={Site_part4} id="Site_part4">
              開放時間
            </h2>
            <p>
              星期日 <br />
              09:30 - 18:00 <br />
              星期一 <br />
              09:30 - 17:00 <br />
              星期二 <br />
              09:30 - 17:00 <br />
              星期三 <br />
              09:30 - 17:00 <br />
              星期四 <br />
              09:30 - 17:00 <br />
              星期五 <br />
              09:30 - 17:00 <br />
              星期六 <br />
              09:30 - 18:00 <br />
            </p>
          </div>
          {/* <SiteDes siteData={siteData} allPart={allPart} /> */}
          <div className="col-lg-3">
            <HashChange allPart={allPart} />
          </div>

          {/* <div
            className="hashchange col-lg-3"
            style={{
              // width: '240px',
              // marginLeft: '10px',
              alignItems: 'center',
              color: ' #8a8a8a',
            }}
          >
            <div>
              <p>旅遊攻略</p>
            </div>
            <div>
              <Link to={'#sec2'}>景點介紹</Link>
            </div>
            <div>
              <Link to={'#sec3'}>如何前往</Link>
            </div>
            <div>
              <Link to={'#sec4'}>開放時間</Link>
            </div>
            <div>
              <Link to={'#sec0'}>回到頂部</Link>
            </div>
          </div> */}
        </div>
      </Container>
      <div className="siteDetailSpace"></div>
      <Footer />
    </>
  );
}

export default SiteDetail;
