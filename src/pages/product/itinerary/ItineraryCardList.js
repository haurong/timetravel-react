import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import Trash from './../../../icon/Trash.svg';
import Edit from './../../../icon/edit.svg';
import { ITINERARY_DELLIST } from './site-config';
import { useItineraryContext } from './ItineraryContext';

function ItineraryCardList(rows) {
  const { iTData, setITData } = useItineraryContext();
  // console.log(iTData);
  // console.log(rows);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {iTData[0] === undefined ? (
        <h2>請加入行程</h2>
      ) : (
        iTData.map((el, i) => {
          return (
            <div className="CardList" key={el.sid}>
              <Card className="Card">
                <Card.Img className="card-img" variant="top" src={''} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div className=" card-margin0">
                    <Card.Title>{el.name}</Card.Title>
                    <Link to={'/itinerary/' + el.list_number}>
                      <h2>{el.list_name}</h2>
                    </Link>
                    <p>
                      {el.day === 1
                        ? moment(el.date).format('YYYY-MM-DD(ddd)')
                        : moment(el.date).format('YYYY-MM-DD(ddd)') +
                          '~' +
                          moment(el.date)
                            .add(el.day - 1, 'd')
                            .format('YYYY-MM-DD(ddd)')}
                    </p>
                    <p>一共{el.day}天</p>
                  </div>
                  <span className="d-flex align-top">
                    <span className="icon">
                      <Link
                        className="icon"
                        to={'/itinerary/' + el.list_number}
                      >
                        <img src={Edit} alt="" />
                      </Link>
                    </span>

                    <span
                      className="icon"
                      onClick={async () => {
                        //資料庫刪除
                        const sid = el.sid;
                        const { del } = await axios.delete(
                          ITINERARY_DELLIST + sid,
                          { sid: sid }
                        );
                        console.log(123);
                        //前端刪除
                        const newData = JSON.parse(JSON.stringify(iTData));
                        const trash = newData.splice(i, 1);
                        setITData(newData);
                      }}
                    >
                      <img src={Trash} alt="" />
                    </span>
                  </span>
                </Card.Body>
              </Card>
            </div>
          );
        })
      )}
    </Row>
  );
}

export default ItineraryCardList;
