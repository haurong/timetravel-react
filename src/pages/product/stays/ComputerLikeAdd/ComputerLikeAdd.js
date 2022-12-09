import React, { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ReactComponent as Heart } from '../../../../icon/heart_gray.svg';
import { ReactComponent as FillHeart } from '../../../../icon/heart.svg';
import { ReactComponent as CalendarAdd } from '../../../../icon/calendar+add.svg';
import { ADD_COLLECT } from '../../../../config';
import { useHotelContext } from '../Context/HotelContext';
import axios from 'axios';
import { FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import './ComputerLikeAdd.scss';

function ComputerLikeAdd() {
  const { hotelListData, collectItem, setCollectItem } = useHotelContext();
  // async function testList() {
  //   const res = await axios.get(
  //     `http://localhost:3001/productAll/checkCollect/36`
  //   );
  //   console.log(res.data);
  //   setCollectItem(res.data);
  // }
  // useEffect(() => {
  //   console.log('抓資料');
  //   testList();
  // }, []);

  useEffect(() => {
    console.log(collectItem);
  }, [collectItem]);
  const [likeAndCalendar, setLikeAndCalendar] = useState({
    like: false,
    calendar: false,
  });
  return (
    <>
      <div
        className="LikeAddOnCom icon ComputerLikeAdd_canTouch"
        onClick={() => {
          const member_sid = JSON.parse(localStorage.getItem('auth')).sid;
          const product_sid = hotelListData.sid;
          const collect_product_name = hotelListData.product_name;

          // setLikeAndCalendar({
          //   like: !likeAndCalendar.like,
          //   calendar: likeAndCalendar.calendar,
          // });
          if (collectItem.includes(hotelListData.product_name)) {
            const res = axios.post(
              'http://localhost:3001/productAll/DelCollect',
              {
                member_sid: member_sid,
                product_sid: product_sid,
                collect_product_name: collect_product_name,
              }
            );
            // console.log(res);
            setCollectItem(
              collectItem.filter((v) => {
                return v !== hotelListData.product_name;
              })
            );
          } else {
            setCollectItem([...collectItem, hotelListData.product_name]);
            const res = axios.post(ADD_COLLECT, {
              member_sid: member_sid,
              product_sid: product_sid,
              collect_product_name: collect_product_name,
            });
          }
        }}
      >
        {/* TODO:點下去變色 加入收藏 */}
        {collectItem.includes(hotelListData.product_name) ? (
          <FillHeart className="HotelHeart" />
        ) : (
          <Heart className="noActiveHotelHeart" />
        )}
        {/* <Heart className="noActiveHotelHeart" /> */}
        {/* <FillHeart className="HotelHeart" /> */}
      </div>
      <div
        className="icon ComputerLikeAdd_canTouch "
        onClick={() => {
          setLikeAndCalendar({
            like: likeAndCalendar.like,
            calendar: !likeAndCalendar.calendar,
          });
        }}
      >
        {/* TODO:點下去變色 加入行成 */}
        {likeAndCalendar.calendar ? (
          <CalendarAdd className="HotelCalendarAdd" />
        ) : (
          <CalendarAdd className="noActiveHotelCalendarAdd" />
        )}
        {/* <CalendarAdd className="noActiveHotelCalendarAdd" /> */}
        {/* <CalendarAdd className="HotelCalendarAdd" /> */}
      </div>
    </>
  );
}

export default ComputerLikeAdd;
