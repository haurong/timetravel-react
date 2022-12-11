import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ReactComponent as Heart } from '../../../../../icon/heart_gray.svg';
import { ReactComponent as FillHeart } from '../../../../../icon/heart.svg';
import { ReactComponent as CalendarAdd } from '../../../../../icon/calendar+add.svg';
import { FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import './ComputerLikeAdd.scss';

function ComputerLikeAdd() {
  const [likeAndCalendar, setLikeAndCalendar] = useState({
    like: true,
    calendar: true,
  });
  return (
    <>
      <div
        className="LikeAddOnCom icon ComputerLikeAdd_canTouch HeartBtn"
        onClick={() => {
          setLikeAndCalendar({
            like: !likeAndCalendar.like,
            calendar: likeAndCalendar.calendar,
          });
        }}
      >
        {/* TODO:點下去變色 加入收藏 */}
        {likeAndCalendar.like ? (
          <Heart className="noActiveHotelHeart" />
        ) : (
          <FillHeart className="HotelHeart" />
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
        {/* TODO:點下去變色 加入行程 */}
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
