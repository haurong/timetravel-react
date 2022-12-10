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
import SiteDes from './SiteDes';
import HashChange from './HashChange';
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

function SiteDetail() {
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
    category_id: 174 + +sid,
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
          category_id: 174 + +sid,
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
        category_id: 174 + +sid,
        time: null,
      });
      const { data } = await axios.post(ITINERARY_ADDITEM, {
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 1,
        category_id: 174 + +sid,
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
            <p>{siteData.description}</p>
            <p>
              每年2月至3月的鬱金香展，讓你一秒進入歐洲
              每年4月為玫瑰展，情侶夫妻的約會聖地
              每年11月至12月的菊展為臺北最盛大的花展
              園藝館、新蘭亭、凱歌堂...等值得走訪的特色建築
            </p>
            <div className="siteDetailSpace"></div>
            <h2 ref={Site_part2} id="Site_part2">
              景點介紹
            </h2>
            <p>
              士林官邸有精緻的庭園造景設計，蟲鳴鳥叫、景色秀麗，是休閒遊憩的絕佳場所。當年因為緊鄰著中山北路，佔據極佳的地理位置，可快速直達總統府，加上後有福山做為倚靠，優越的地勢，所以成為蔣故總統官邸。
            </p>
            <img src={SITE_IMG + '/' + img1} alt={'/'} />
            <p>
              1996年，官邸首度開放市民觀賞園藝與休憩使用。玫瑰園，是蔣夫人最喜愛的花園；西式庭園中浪漫美好的風光，是新人婚紗照最常取景的地方；中式庭園裡的拱橋、曲池、流水等東方庭園造景，則令人彷彿置身古代中式庭院。
            </p>
            <img src={SITE_IMG + '/' + img2} alt={'/'} />
            <p>
              官邸公園周圍為福山山系所環抱，佔地9.28公頃。其中的士林官邸於民國三十九年因先總統蔣公居住於此而設立，因為總統居住於此的關係，附近嚴禁改建及新建，使得官邸公園能維持原有的自然景觀。
              凱歌堂為蔣家人禮拜及受洗之處。新蘭亭建於民國三十九年，又名壽亭，為中式四角狀建築，是每年蔣公作壽的地方，也是舉辦各類蘭花展覽之地。慈雲亭建於福山之上，為兩層樓方形亭，是老總統為懷念母親所建。
            </p>
            <img src={SITE_IMG + '/' + img3} alt={'/'} />
            <p>
              官邸公園主要分為外花園、內花園、正房、栽種蘭花的溫室盆栽區、玫瑰園、凱歌堂、新蘭亭和慈雲亭。其中內花園屬中式庭園，其中有曲折的小橋流水、假山、奇石及一座紅色的中式涼亭。外花園區為西式庭園，區內設計成毛氈花壇，廣植花卉，美不勝收，是每年辦理菊展的主題園區。玫瑰園，育有200餘玫瑰品種，4000多株玫瑰，盛開期在每年的11月至翌年4月間，色彩繽紛為蔣夫人最喜愛散步的地方。
            </p>
            <img src={SITE_IMG + '/' + img4} alt={'/'} />
            <p>
              士林官邸每年年初及年末都會舉辦各式花展，像是鬱金香展、玫瑰花展、蝴蝶蘭展、菊展…等，而最為廣為人知的就是菊展和鬱金香展，利用花卉搭配上園區造景，打造出色彩繽紛的展
            </p>
            <img src={SITE_IMG + '/' + img5} alt={'/'} />
            <p>
              菊展
              接近秋冬的11至12月就是全台知名花展之一的菊展。藉由大立菊、造型菊、小菊及菊科草花搭配每年不同主題的展場造型物與園藝造景，將士林官邸打造成大型花園，吸引各地遊客前來觀賞。
              鬱金香展
              每年春節過後的2至3月為士林官邸鬱金香展，種植著11萬株的荷蘭及日本鬱金香花海，並設置異國裝置藝術，讓人彷彿置身於國外。
              士林官邸公園於民國八十五年正式開放民眾參觀，為提供更多更好的服務，也積極加強各項的整理規劃及建設，成為臺北市區中另一處供民眾休憩的景點。
            </p>
            <div className="siteDetailSpace"></div>
            <h2 ref={Site_part3} id="Site_part3">
              如何前往
            </h2>
            <p>地址:{siteData.map}</p>
            <p>
              捷運 淡水信義線士林站(R16)於 2號出口出站後左轉，步行約10分鐘 公車
              「台電北區分處站」203、216副、220、260、267、277、279、280、285、310、606、612、646、中山幹線、休閒公車109
              「小北街站」68、216、218、250、277、280、290、304、310、606
              、承德幹線
              「士林官邸站」111、203、206、220、255、260、267、279、280、285、303、304、310、557、606、612、620、646、680、683、685、902、1717、中山幹線、重慶幹線
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
              09:30 - 12:00 <br />
              13:30 - 17:00 <br />
              星期一 <br />
              休息 <br />
              星期二 <br />
              09:30 - 12:00 <br />
              13:30 - 17:00 <br />
              星期三 <br />
              09:30 - 12:00 <br />
              13:30 - 17:00 <br />
              星期四 <br />
              09:30 - 12:00 <br />
              13:30 - 17:00 <br />
              星期五 <br />
              09:30 - 12:00 <br />
              13:30 - 17:00 <br />
              星期六 <br />
              09:30 - 12:00 <br />
              13:30 - 17:00 <br />
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
