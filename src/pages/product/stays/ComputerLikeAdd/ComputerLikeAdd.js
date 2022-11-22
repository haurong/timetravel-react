import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ReactComponent as Heart } from '../../../../icon/heart_gray.svg';
import { ReactComponent as FillHeart } from '../../../../icon/heart.svg';
import { ReactComponent as CalendarAdd } from '../../../../icon/calendar+add.svg';
import { FaCalendarAlt } from 'react-icons/fa';
import './ComputerLikeAdd.scss';

function ComputerLikeAdd() {
  return (
    <>
      <div className="LikeAddOnCom icon" onClick={() => {}}>
        {/* TODO:點下去變色 加入收藏 */}
        <Heart className="noActiveHotelHeart" />
        {/* <FillHeart className="HotelHeart" /> */}
      </div>
      <div className="icon " onClick={() => {}}>
        {/* TODO:點下去變色 加入行成 */}
        {/* <FaCalendarAlt style={{ width: '100%', height: '100%', color: '#aeaeae' }} /> */}
        <CalendarAdd className="noActiveHotelCalendarAdd" />
        {/* <CalendarAdd className="HotelCalendarAdd" /> */}
      </div>
    </>
  );
}

export default ComputerLikeAdd;
