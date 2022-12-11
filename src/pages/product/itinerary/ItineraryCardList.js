import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import Trash from './../../../icon/Trash.svg';
import Edit from './../../../icon/edit.svg';
import {
  ITINERARY_DELLIST,
  ITINERARY_LIST,
  ITINERARY_LISTNEW,
  ALL_IMG,
} from './site-config';
import { useItineraryContext } from './ItineraryContext';
import { useLocation } from 'react-router-dom';

function ItineraryCardList(rows) {
  const { iTData, setITData } = useItineraryContext();
  const [userData, setUserData] = useState([]);
  const [img, setImg] = useState([]);
  async function userDatas() {
    if (localStorage.getItem('auth') !== null) {
      const membersid = JSON.parse(localStorage.getItem('auth')).sid;
      const response = await axios.get(ITINERARY_LIST + '/' + membersid);
      setUserData(response.data);

      // let a = [];
      // for (let i = 0; i < iTData.length; i++) {
      //   a.push({ ...iTData[i], img1: '1 (1).jpg' });
      //   // a.push({ ...iTData[i], img1: img[i] });
      // }
      // console.log(a);
      // setITData(a);
    }
  }
  console.log(iTData);

  const location = useLocation();

  useEffect(() => {
    userDatas();
  }, [location]);

  return (
    // <Row xs={1} md={2} lg={3} className="g-4">
    <>
      {iTData[0] === undefined ? (
        <h2 style={{ width: '100%' }}>您目前沒有規劃行程，請加入新行程</h2>
      ) : (
        <div className="d-flex" style={{ paddingTop: '14px' }}>
          {/* <div className="px-3 d-flex"> */}
          {iTData.map((el, i) => {
            return (
              <Card
                key={el.sid}
                className="col-3"
                style={{
                  width: '300px',
                  height: '400px',
                  margin: '0 14px',
                  boxShadow: '0 0 18px 0 rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ overflow: 'hidden', height: '185px' }}>
                  <Card.Img
                    variant="top"
                    className="foodCardImg1"
                    src={ALL_IMG + '/' + el.photo}
                  />
                </div>
                <Card.Body>
                  <Link to={'./' + el.list_number}>
                    <Card.Title
                      className="Card_Title"
                      style={{ paddingLeft: 0 }}
                    >
                      {el.list_name}
                    </Card.Title>
                  </Link>
                  <Card.Text className="Card_Text">
                    <div className="useTime">
                      <span className="d-flex">
                        <p style={{ margin: '0' }}>
                          {moment(el.date).format('YYYY-MM-DD(ddd)')}
                        </p>
                        <p style={{ margin: '0' }}>
                          {el.day === 1
                            ? ''
                            : '~' +
                              moment(el.date)
                                .add(el.day - 1, 'd')
                                .format('YYYY-MM-DD(ddd)')}
                        </p>
                      </span>

                      <p>一共{el.day}天</p>
                    </div>
                  </Card.Text>
                  <span className="d-flex align-top">
                    <span className="icon">
                      <Link
                        className="iicon"
                        to={'/itinerary/' + el.list_number}
                      >
                        <img src={Edit} alt="" />
                      </Link>
                    </span>

                    <span
                      className="iicon"
                      onClick={async () => {
                        //資料庫刪除
                        const listNumber = el.list_number;
                        const { del } = await axios.delete(
                          ITINERARY_DELLIST + listNumber,
                          { listNumber: listNumber }
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
            );
          })}
        </div>
      )}
    </>
  );
}

export default ItineraryCardList;
