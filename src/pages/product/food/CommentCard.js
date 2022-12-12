import React, { useContext, useEffect } from 'react';

import { Rate } from 'antd';
import './style/Comment.scss';
import moment from 'moment';
import proSetImg from '../../member/prosetImg.png';
import { userImg } from '../../../config';
import AuthContext from '../../member/context/AuthContext';
import { useFoodContext } from '../food/FoodContext/FoodContext';
function CommentCard({ rows }) {
  const { commentData, setCommentData, commentSort } = useFoodContext();
  console.log(rows);
  const { myAuth } = useContext(AuthContext);
  useEffect(() => {
    // if (hotelCommentData.length !== 0) {
    let tmp = commentData.map((v) => {
      return { ...v };
    });

    // console.log('tmp', tmp);

    if (commentSort === 'score_ASC') {
      tmp = tmp.sort((a, b) => {
        return a.score - b.score;
      });
      setCommentData(tmp);
    } else if (commentSort === 'score_DESC') {
      tmp = tmp.sort((a, b) => {
        return b.score - a.score;
      });
      setCommentData(tmp);
    } else if (commentSort === 'time_ASC') {
      tmp = tmp.sort((a, b) => {
        return Date.parse(a.create_time) - Date.parse(b.create_time);
      });
      setCommentData(tmp);
    } else if (commentSort === 'time_DESC') {
      tmp = tmp.sort((a, b) => {
        return Date.parse(b.create_time) - Date.parse(a.create_time);
      });
      setCommentData(tmp);
    }

    //}
  }, [commentSort]);
  return (
    <>
      {rows?.map((el, i) => {
        const dataTime = el.create_time;
        //console.log(dataTime);
        let day = moment(dataTime).format('YYYY/MM/DD');
        //console.log(day);
        return (
          <div className="Comment_Bottom" key={el.sid}>
            <div>
              <div className="d-flex Comment_Card">
                <div
                  className="Comment_userPic"
                  style={
                    el.username === myAuth.username
                      ? {
                          backgroundImage: `url(${userImg}${myAuth.member_img})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                        }
                      : {
                          backgroundImage: `url(${proSetImg}) `,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                        }
                  }
                ></div>
                <div className="Comment_userName">
                  <h2>{el.username}</h2>
                  <Rate
                    disabled
                    value={el.score}
                    className="TimeTravel_Rate"
                    style={{ zIndex: -1 }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div style={{ color: '#8A8A8A' }}>{day}</div>
                </div>
              </div>
              <div className="Comment_text">{el.commit_text}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentCard;
