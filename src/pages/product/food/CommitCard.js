import React from 'react';
import { Rate } from 'antd';
import './Commit.scss';

function CommitCard({ rows }) {
  console.log({ rows });
  return (
    <>
      {rows?.map((el) => {
        return (
          <div className="Comment_Bottom" key={el.sid}>
            <div>
              <div className="d-flex Comment_Card" >
                <div className="Comment_userPic"></div>
                <div className="Comment_userName">
                  <h2>{el.username}</h2>
                  <Rate
                    disabled
                    value={el.score}
                    // defaultValue={4}
                    className="TimeTravel_Rate"
                    style={{ zIndex: -1 }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div style={{ color: '#8A8A8A' }}>{el.create_time}</div>
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
