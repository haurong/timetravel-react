import React, { useEffect, useRef, useState } from 'react';
import './TimeTravel_Hotel.scss';
import Navbar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Rate from './Rate/Rate';
import IconBar from './IconBar/IconBar';
import ShowPic from './ShowPic/ShowPic';
import HotelNotice from './HotelNotice/HotelNotice';
import HotelDetail from './HotelDetail/HotelDetail';
import Comment from './Comment/Comment';
import MapButton from './MapButton/MapButton';
import CommentSelector from './Comment/CommentSelector';
import BottomBar from './BottomBar/BottomBar';
import MobileFooter from './MobileFooter/MobileFooter';
import HashChange from './HashChange/HashChange';
import ComputerLikeAdd from './ComputerLikeAdd/ComputerLikeAdd';


function TimeTravelHotel() {
  const Hotel_part1 = useRef();
  const Hotel_part2 = useRef();
  const Hotel_part3 = useRef();
  const Hotel_part4 = useRef();
  const [allPart, setAllPart] = useState({
    part1: 0,
    part2: 0,
    part3: 0,
    par4: 0,
  });
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener('scroll', () => {
    if (isScroll === false) {
      setIsScroll(true);
    }
  });
  useEffect(() => {
    if (isScroll) {
      let part1 = Hotel_part1.current.offsetTop;
      let part2 = Hotel_part2.current.offsetTop;
      let part3 = Hotel_part3.current.offsetTop;
      let part4 = Hotel_part4.current.offsetTop;
      console.log(part1, part2, part3, part4);
      setAllPart({
        part1: part1,
        part2: part2,
        part3: part3,
        part4: part4,
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
      {/* <Navbar /> */}
      <BottomBar />
      <Carousel />
      <HashChange allPart={allPart} />
      <div className="container">
        <div className="d-flex">
          <div className="Hotel_part0 Hotel_part0_left">
            <Breadcrumb />
            <h2 style={{ color: '#4D4D4D', marginBottom: '20px' }}>
              {/* TODO:拿到真實名稱 */}路境行旅(Finders Hotel)
            </h2>
            <Rate />
            <IconBar />
            <h4
              style={{
                color: '#59d8a1',
                fontSize: '22px',
                marginBottom: '30px',
              }}
            >
              {/* TODO:拿到真實價格 */}TWD$599
            </h4>
          </div>
          <div className="Hotel_part0_right">
            <div className="Hotel_part0_right_icon d-flex">
              <ComputerLikeAdd />
            </div>
          </div>
        </div>
        <div
          id="Hotel_part1"
          ref={Hotel_part1}
          className="givePadding col-lg-8"
        >
          <h2 style={{ color: '#4D4D4D', margin: '40px 0px' }}>房型介紹</h2>
          <ShowPic />
        </div>
        <div
          id="Hotel_part2"
          ref={Hotel_part2}
          className="givePadding col-lg-8"
        >
          <h2 style={{ color: '#4D4D4D', margin: '40px 0px' }}>注意事項</h2>
          <HotelNotice />
        </div>
        <div
          id="Hotel_part3"
          ref={Hotel_part3}
          className="givePadding col-lg-8"
        >
          <h2 style={{ color: '#4D4D4D', margin: '40px 0px' }}>商品說明</h2>
          <HotelDetail />
          <MapButton />
        </div>
        <div
          id="Hotel_part4"
          ref={Hotel_part4}
          className="givePadding col-lg-8"
        >
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
      </div>
      <MobileFooter />
      <div style={{ height: '120px', backgroundColor: '#aeaeae' }}></div>
    </>
  );
}

export default TimeTravelHotel;
