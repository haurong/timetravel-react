import React from 'react';
import { Rate } from 'antd';
import './Comment.scss';
import { useHotelContext } from '../Context/HotelContext';
function CommentCard() {
  const { hotelCommentData } = useHotelContext();
  return (
    <>
      {hotelCommentData.map((v, i) => {
        return (
          <div className="Comment_Bottom" key={i}>
            <div>
              <div className="d-flex Comment_Card">
                <div className="Comment_userPic"></div>
                <div className="Comment_userName">
                  <h2>{v.username}</h2>
                  <Rate
                    disabled
                    value={v.score}
                    className="TimeTravel_Rate"
                    style={{ zIndex: -1 }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div style={{ color: '#8A8A8A' }}>2022/11/24</div>
                </div>
              </div>
              <div className="Comment_text">{v.commit_text}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentCard;
