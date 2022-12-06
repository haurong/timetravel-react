import React, { useState, useEffect } from 'react';
import { Rate } from 'antd';
import CommentCard from './CommentCard';
import './style/Comment.scss';


//從FoodDetail拿到commit資料
function Commit({ rows }) {
  console.log({ rows });
  return (
    <div >
      <div className="Comment_Top">
        <span className="Comment_top_span">4.3</span>
        <div className="RateAndNumber">
          <Rate
            disabled
            defaultValue={4}
            className="TimeTravel_Rate"
            style={{ zIndex: -1 }}
          />
          <p>221則評論</p>
        </div>
      </div>
      <CommentCard rows={rows} />
    </div>
  );
}

export default Commit;
