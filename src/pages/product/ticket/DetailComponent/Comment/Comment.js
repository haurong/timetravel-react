import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import CommentCard from './CommentCard';
import './Comment.scss';
import { useHotelContext } from '../Context/HotelContext';

function Comment() {
  const { hotelCommentData, setAllStar, allStar } = useHotelContext();

  useEffect(() => {
    if (hotelCommentData !== 0) {
      let sum = 0;
      hotelCommentData.map((v, i) => {
        sum = sum + v.score;
      });
      let totalStar = (
        Math.round((sum / hotelCommentData.length) * 10) / 10
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
            {hotelCommentData.length}
            條評論
          </p>
        </div>
      </div>
      <CommentCard />
    </div>
  );
}

export default Comment;
