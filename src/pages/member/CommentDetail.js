import React from 'react';
import { Rate } from 'antd';
import '../../global.scss';
import './style/CommentDetail.scss';
import Edit from '../../icon/edit.svg';
import Trash from '../../icon/Trash.svg';
import moment from 'moment';

function CommentDetail({ rows }) {
  const newRows = rows.reduce((acc, cur) => {
    acc = acc.concat(cur);
    return acc;
  }, []);

  // console.log(newRows);
  return (
    <>
      {newRows[0] === undefined ? (
        <div>
          <h2 className="comment-no-h2">目前還沒有評論</h2>
        </div>
      ) : (
        newRows.map((el) => {
          const dataTime = el.create_time;
          let day = moment(dataTime).format('YYYY/MM/DD');
          return (
            <div className="card col-10 comment-card" key={el.product_number}>
              <div className="card-body body-comment-padding">
                <div className="d-flex">
                  <div className="comment_title">
                    <h2>{el.product_name}</h2>
                    <div className="d-flex">
                      <div className="star_group star-comment-margin">
                        <Rate
                          disabled
                          value={el.score}
                          className="TimeTravel_Rate"
                          style={{ zIndex: 2 }}
                        />
                      </div>
                      <p className="comment-time my-auto">{day}</p>
                    </div>
                  </div>
                  {/* <div className="d-flex comment-icon-dlex my-auto">
                  <div className="icon comment-icon">
                    <img src={Edit} alt="" />
                  </div>
                  <div className="icon comment-icon ">
                    <img src={Trash} alt="" />
                  </div>
                </div> */}
                </div>
                <p className="card-text comment-body-text">{el.commit_text}</p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default CommentDetail;
