import React from 'react';
import { Rate } from 'antd';
import './Commit.scss';
import moment from 'moment';
function CommitCard({ rows }) {
  return (
    <>
      {rows?.map((el) => {
        const dataTime = el.create_time;
        console.log(dataTime);
        let day = moment(dataTime).format('YYYY/MM/DD');
        console.log(day);
        return (
          <div className="Comment_Bottom" key={el.sid}>
            <div>
              <div className="d-flex Comment_Card">
                <div className="Comment_userPic"></div>
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

export default CommitCard;
