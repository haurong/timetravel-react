import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import CommentCard from './CommentCard';
import './Comment.scss';
import { useHotelContext } from '../../../stays/Context/HotelContext';
import { useTicketContext } from '../../Context/TicketContext';

function Comment() {
  // const { hotelCommentData, setAllStar, allStar } = useHotelContext();
  // const { ticketCommentData } = useHotelContext();
  const {ticketCommentData,setAllStar, allStar } = useTicketContext();


  useEffect(() => {
    if (ticketCommentData !== 0) {
      let sum = 0;
      ticketCommentData.map((v, i) => {
        sum = sum + v.score;
      });
      let totalStar = (
        Math.round((sum / ticketCommentData.length) * 10) / 10
      ).toString();
      setAllStar(totalStar);
    }
  });
  return (
    <div>
      <div className="Comment_Top">
        <span className="Comment_top_span">
          {isNaN(allStar) ? '目前沒有評價' : allStar}
        </span>
        <div className="RateAndNumber">
          <Rate
            disabled
            value={allStar}
            className="TimeTravel_Rate"
            style={{ zIndex: -1 }}
          />
          <p>
            {ticketCommentData.length}
            則評論
          </p>
        </div>
      </div>
      <CommentCard />
    </div>
  );
}

export default Comment;
