import React, { useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import '../stays/TimeTravel_Hotel.scss';

import axios from 'axios';
import { useHotelContext } from '../stays/Context/HotelContext';
import { TICKET_DETAIL } from './ticket-config';

import Carousel from '../ticket/DetailComponent/CarouselDo/Carousel';
import Breadcrumb from '../ticket/DetailComponent/Breadcrumb/Breadcrumb';
import Rate from './Rate/Rate';
import IconBar from './DetailComponent/IconBar/IconBar';
import ShowPic from '../ticket/DetailComponent/ShowPic/ShowPic';
import HotelNotice from '../../product/ticket/DetailComponent/HotelNotice/HotelNotice';
import HotelDetail from '../ticket/DetailComponent/HotelDetail/HotelDetail';
import Comment from './DetailComponent/Comment/Comment';
import MapButton from '../stays/MapButton/MapButton';
import CommentSelector from '../stays/Comment/CommentSelector';
import BottomBar from '../stays/BottomBar/BottomBar';
import MobileFooter from '../stays/MobileFooter/MobileFooter';
import HashChange from './DetailComponent/HashChange/HashChange';
import ComputerLikeAdd from './DetailComponent/ComputerLikeAdd/ComputerLikeAdd';
import ComDatePicker from '../../product/ticket/DetailComponent/ComDatePicker/ComDatePicker';
import BookingBar from '../../product/ticket/DetailComponent/BookingBar/BookingBar';

function Stays() {
  const dataFrom = '14';
  const {
    roomCounts,
    hotelRoomPrice,
    hotelListData,
    setHotelListData,
    hotelRoomChoose,
    setHotelRoomChoose,
    setHotelRoomPrice,
    setHotelCommentData,
  } = useHotelContext();
  // const { roomCounts, hotelRoomPrice } = useHotelContext();

  async function getHotelDetail() {
    //  拿到飯店所有資料
    const res_hotelListData = await axios.get(TICKET_DETAIL + dataFrom);
    console.log(res_hotelListData);
    setHotelListData(res_hotelListData.data);

    //  拿到房型所有資料
    // const res_hotelRoomData = await axios.get(
    //   TICKET_DETAIL + dataFrom + '/room'
    // );
    // const toArray = res_hotelRoomData.data;
    // setHotelRoomChoose(toArray);
    //  設定最便宜的價格
    // setHotelRoomPrice(toArray[0].room_price);
    //  拿到所有評論的資料
    // const res_hotelCommentData = await axios.get(
    //   TICKET_DETAIL + dataFrom + '/hotelComment'
    // );
    // setHotelCommentData(res_hotelCommentData.data);
    // console.log(res_hotelCommentData.data);
  }
  const Hotel_part0 = useRef();
  const Hotel_part1 = useRef();
  const Hotel_part2 = useRef();
  const Hotel_part3 = useRef();
  const Hotel_part4 = useRef();
  const Hotel_part5 = useRef();
  const [allPart, setAllPart] = useState({});
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener('scroll', () => {
    if (isScroll === false) {
      setIsScroll(true);
    }
  });
  useEffect(() => {
    getHotelDetail();

    if (isScroll) {
      let part0 = Hotel_part0.current.offsetTop;
      let part1 = Hotel_part1.current.offsetTop;
      let part2 = Hotel_part2.current.offsetTop;
      let part3 = Hotel_part3.current.offsetTop;
      let part4 = Hotel_part4.current.offsetTop;
      let part5 = Hotel_part5.current.offsetTop;
      // console.log(part0, part1, part2, part3, part4);
      setAllPart({
        part0: part0,
        part1: part1,
        part2: part2,
        part3: part3,
        part4: part4,
        part5: part5,
        bodyOffsetY: document.body.offsetHeight,
      });
    }
    // let part1 = Hotel_part1.current.offsetTop;
    // let part2 = Hotel_part2.current.offsetTop;
    // let part3 = Hotel_part3.current.offsetTop;
    // let part4 = Hotel_part4.current.offsetTop;
    // console.log(document.body.offsetHeight);
    // console.log(part1, part2, part3, part4); // 787 2478 4260 4761
    // setAllPart({
    // 	part1: part1,
    // 	part2: part2,
    // 	part3: part3,
    // 	part4: part4,
    // 	bodyOffsetY: document.body.offsetHeight,
    // });
  }, [isScroll]);
  return (
    <>
      <NavBar />
      <div className="MobileHidden">
        <BookingBar />
      </div>
      <div style={{ width: '100%', height: '79px' }}></div>
      <BottomBar />
      <div ref={Hotel_part0} id="Hotel_part0"></div>
      <div className="MobileHidden container">
        <Breadcrumb />
      </div>
      <div className="container ticket_carousel">
        <Carousel />
      </div>
      <div className="ComputerHidden">
        <HashChange allPart={allPart} />
      </div>
      <div style={{ width: '100%', height: '79px' }}></div>
      <div className="container">
        <div className="">
          <div className="d-flex">
            <div className="Hotel_part0 Hotel_partHidden"></div>
            <div className="Hotel_part0_left">
              <div className="ComputerHidden">
                <Breadcrumb />
              </div>

              <h2 style={{ color: '#4D4D4D', marginBottom: '20px' }}>
                {hotelListData.product_name}
              </h2>
              <Rate />
              <IconBar
              hotelListDataArea={"士林區"}
                hotelListDataCategories={"樂園、戶外"}
                // hotelListDataArea={TICKET_DETAIL.area_name}
                // hotelListDataCategories={TICKET_DETAIL.classname}
              />
              <h4
                className="ComputerHidden"
                style={{
                  color: '#59d8a1',
                  fontSize: '22px',
                  marginBottom: '30px',
                }}
              >
                TWD${roomCounts * hotelRoomPrice}
              </h4>
            </div>
            <div className="Hotel_part0_right MobileHidden">
              <div className="Hotel_part0_right_icon d-flex ">
                <ComputerLikeAdd />
              </div>
            </div>
          </div>
          <div className="">
            <div className="MobileHidden givePadding">
              <ComDatePicker hotelRoomData={hotelRoomChoose} />
            </div>
          </div>
          <div
            className="Hotel_partHidden"
            id="Hotel_part1"
            ref={Hotel_part1}
          ></div>
          <div className="d-flex" style={{ width: '100%' }}>
            <div className=" col-lg-8" style={{ marginRight: 'auto' }}>
              <h2 style={{ color: '#4D4D4D', margin: '40px 0px' }}>商品介紹</h2>
              <ShowPic />
              <div
                className="Hotel_partHidden"
                id="Hotel_part2"
                ref={Hotel_part2}
              ></div>
              <h2 style={{ color: '#4D4D4D', margin: '40px 0px' }}>注意說明</h2>
              <HotelNotice />
              <div
                className="Hotel_partHidden"
                id="Hotel_part3"
                ref={Hotel_part3}
              ></div>
              <h2 style={{ color: '#4D4D4D', margin: '40px 0px' }}>體驗地點</h2>
              <HotelDetail />
              <MapButton />
              <div
                className="Hotel_partHidden"
                id="Hotel_part4"
                ref={Hotel_part4}
              ></div>
              <div className="d-flex" style={{ alignItems: 'center' }}>
                <h2
                  style={{
                    color: '#4D4D4D',
                    margin: '40px 0px',
                    marginRight: 'auto',
                  }}
                >
                  旅客評價
                </h2>
                <CommentSelector />
              </div>
              <Comment />
            </div>
            <div className="col-lg-3  MobileHidden ">
              <HashChange allPart={allPart} />
            </div>
          </div>
          <div
            className="Hotel_partHidden"
            id="Hotel_part5"
            ref={Hotel_part5}
          ></div>
        </div>
      </div>
      {/* <div
        className="HashChangeStop"
        style={{ width: '100%', outline: 'red 1px solid' }}
      ></div> */}
      <div className="ComputerHidden">
        <MobileFooter />
        <div
          style={{
            height: '120px',
            width: '100%',
            backgroundColor: '#aeaeae',
          }}
        ></div>
      </div>
      <div className="MobileHidden">
        <Footer />
      </div>
    </>
  );
}

export default Stays;
