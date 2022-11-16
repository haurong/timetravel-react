import React from 'react';
import { Rate } from 'antd';
import CommentCard from './CommentCard';
import './Comment.scss';

function Comment() {
  return (
    <div>
      <div className="Comment_Top">
        <span className="Comment_top_span">4.3</span>
        <div className="RateAndNumber">
          <Rate
            disabled
            defaultValue={4}
            className="TimeTravel_Rate"
            style={{ zIndex: -1 }}
          />
          <p>437條評論</p>
        </div>
      </div>

      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
}

export default Comment;
