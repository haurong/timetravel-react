import React from 'react';
import { Rate } from 'antd';
import './Comment.scss';
function CommentCard() {
  return (
    <div className="Comment_Bottom">
      <div>
        <div className="d-flex Comment_Card">
          <div className="Comment_userPic"></div>
          <div className="Comment_userName">
            <p>花花</p>
            <Rate
              disabled
              defaultValue={4}
              className="TimeTravel_Rate"
              style={{ zIndex: -1 }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ color: '#8A8A8A' }}>2022/11/24</div>
          </div>
        </div>
        <div className="Comment_text">
          已經成為每次帶小孩去墾丁的口袋景點之一了，除了可以消耗時間，小孩也能增長許多豐富的知識，每次都很依依不捨的離開呢！
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
