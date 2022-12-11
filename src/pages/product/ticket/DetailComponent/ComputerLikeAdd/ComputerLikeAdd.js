import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Heart from '../../../../../icon/heart_gray.svg';
import { ReactComponent as PinkHeart } from '../../../../../icon/heart.svg';
import CalendarAdd from '../../../../../icon/calendar+add.svg';
import { FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import './ComputerLikeAdd.scss';

function ComputerLikeAdd() {
  const [likeAndCalendar, setLikeAndCalendar] = useState({
    like: true,
    calendar: true,
  });
  return (
    <>
      <div className="Heart_Calendar_icon">
        <button
          className="HeartBtn"
          onClick={() => {
            const member_sid = JSON.parse(localStorage.getItem('auth')).sid;
            // const product_sid = foodData.sid;
            // const collect_product_name = foodData.product_name;

            //後端先發送移除收藏
            // if (collect.includes(foodData.product_name)) {
            //   axios.post('http://localhost:3001/productAll/DelCollect', {
            //     member_sid: member_sid,
            //     product_sid: product_sid,
            //     collect_product_name: collect_product_name,
            //   });
            //   console.log('移除收藏');
            //   //前端顯示空心
            //   setCollect(
            //     collect.filter((el) => {
            //       return el !== foodData.product_name;
            //     })
            //   );
            // } else {
            //   //前端發送新增收藏
            //   axios.post('http://localhost:3001/productAll/AddCollect', {
            //     member_sid: member_sid,
            //     product_sid: product_sid,
            //     collect_product_name: collect_product_name,
            //   });
            //   console.log('新增收藏');
            //   //解構出原收藏陣列,把新的收藏塞回去
            //   setCollect([...collect, foodData.product_name]);
            // }
          }}
        >
          <img
            src={
              // collect.includes(foodData.product_name) ? PinkHeart : Heart
              Heart
            }
            style={{ width: '25px', height: '25px' }}
            alt=""
          />
        </button>
        <button
          className="CalendarBtn"
          onClick={() => {
            // mySubmit();
          }}
        >
          <img src={CalendarAdd} className="Calendar_icon" alt="" />
        </button>
      </div>
    </>
  );
}

export default ComputerLikeAdd;
