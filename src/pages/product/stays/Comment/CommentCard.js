import React, { useContext, useEffect } from 'react';
import { Rate } from 'antd';
import './Comment.scss';
import moment from 'moment/moment';
import { useHotelContext } from '../Context/HotelContext';
import proSetImg from '../../../member/prosetImg.png';
import { userImg } from '../../../../config';
import AuthContext from '../../../member/context/AuthContext';

function CommentCard() {
  const { hotelCommentData, commentSort, setHotelCommentData } =
    useHotelContext();
  const { myAuth } = useContext(AuthContext);
  // console.log(Date.parse(hotelCommentData[0].create_time));
  // console.log(hotelCommentData);

  useEffect(() => {
    // if (hotelCommentData.length !== 0) {
    let tmp = hotelCommentData.map((v) => {
      return { ...v };
    });

    // console.log('tmp', tmp);

    if (commentSort === 'score_ASC') {
      tmp = tmp.sort((a, b) => {
        return a.score - b.score;
      });
      setHotelCommentData(tmp);
    } else if (commentSort === 'score_DESC') {
      tmp = tmp.sort((a, b) => {
        return b.score - a.score;
      });
      setHotelCommentData(tmp);
    } else if (commentSort === 'time_ASC') {
      tmp = tmp.sort((a, b) => {
        return Date.parse(a.create_time) - Date.parse(b.create_time);
      });
      setHotelCommentData(tmp);
    } else if (commentSort === 'time_DESC') {
      tmp = tmp.sort((a, b) => {
        return Date.parse(b.create_time) - Date.parse(a.create_time);
      });
      setHotelCommentData(tmp);
    }

    //}
  }, [commentSort]);

  return (
    <>
      {hotelCommentData.map((v, i) => {
        return (
          <div className="Comment_Bottom" key={i}>
            <div>
              <div className="d-flex Comment_Card">
                <div
                  className="Comment_userPic"
                  style={
                    v.username === myAuth.username
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
                  <h2>{v.username}</h2>
                  <Rate
                    disabled
                    value={v.score}
                    className="TimeTravel_Rate"
                    style={{ zIndex: -1 }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div style={{ color: '#8A8A8A' }}>
                    {moment(v.create_time).format('YYYY-MM-DD')}
                  </div>
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
