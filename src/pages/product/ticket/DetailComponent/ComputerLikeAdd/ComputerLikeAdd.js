import React, { useState } from 'react';
import axios from 'axios';

import { ReactComponent as Heart } from '../../../../../icon/heart_gray.svg';
import { ReactComponent as FillHeart } from '../../../../../icon/heart.svg';
import { ADD_COLLECT } from '../../../../../config';
import { ReactComponent as CalendarAdd } from '../../../../../icon/calendar+add.svg';
import './ComputerLikeAdd.scss';
import { useTicketContext } from '../../Context/TicketContext';
function ComputerLikeAdd() {
  const [likeAndCalendar, setLikeAndCalendar] = useState({
    like: false,
    calendar: false,
  });
  const { ticketListData, collectItem, setCollectItem } = useTicketContext();
  return (
    <>
      <div
        className="LikeAddOnCom icon ComputerLikeAdd_canTouch"
        onClick={() => {
          const member_sid = JSON.parse(localStorage.getItem('auth')).sid;
          const product_sid = ticketListData.sid;
          const collect_product_name = ticketListData.product_name;

          if (collectItem.includes(ticketListData.product_name)) {
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
                return v !== ticketListData.product_name;
              })
            );
          } else {
            setCollectItem([...collectItem, ticketListData.product_name]);
            const res = axios.post(ADD_COLLECT, {
              member_sid: member_sid,
              product_sid: product_sid,
              collect_product_name: collect_product_name,
            });
          }
        }}
      >
        {/* 喜愛+景點收藏 */}
        {collectItem.includes(ticketListData.product_name) ? (
          <FillHeart className="HotelHeart" />
        ) : (
          <Heart className="noActiveHotelHeart" />
        )}
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
        <CalendarAdd
          className="noActiveHotelCalendarAdd"
          onClick={() => {
            // mySubmit();
          }}
        />
      </div>
    </>
  );
}

export default ComputerLikeAdd;
