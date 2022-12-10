import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { SITE_DETAIL } from './site-config';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Map from './SiteMap';
import { SITE_IMG } from './site-config';
import map1 from './../../../icon/map.svg';

export default function SiteDes({ siteData, allPart }) {
  const [position, setPosition] = useState(null);
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');
  const [img5, setImg5] = useState('');
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];

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

  const Site_part0 = useRef();
  const Site_part1 = useRef();
  const Site_part2 = useRef();
  const Site_part3 = useRef();
  const Site_part4 = useRef();

  return (
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
      <h2 ref={Site_part3} id="Site_part3">
        如何前往
      </h2>
      <p>地址:{siteData.map}</p>
      <p>
        捷運 淡水信義線士林站(R16)於 2號出口出站後左轉，步行約10分鐘 公車
        「台電北區分處站」203、216副、220、260、267、277、279、280、285、310、606、612、646、中山幹線、休閒公車109
        「小北街站」68、216、218、250、277、280、290、304、310、606 、承德幹線
        「士林官邸站」111、203、206、220、255、260、267、279、280、285、303、304、310、557、606、612、620、646、680、683、685、902、1717、中山幹線、重慶幹線
      </p>
      {position === null ? (
        ''
      ) : (
        <div id="map" style={{ margin: '20px 0' }}>
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
  );
}
