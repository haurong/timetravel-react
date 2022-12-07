import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Logo from '../../icon/logo/logo.svg';
import './Qrcode.scss';
import React from 'react';
import axios from 'axios';
import { FOOD_ORDER_DETAIL } from '../.././config';
import Card from 'react-bootstrap/Card';
import { margin } from '@mui/system';
export default function Qrcode() {
  const [orderFoodDetail, setOrderFoodDetail] = useState({});
  const location = useLocation();
  // const path = window.location.pathname.split('/');
  const order_uuid = 1669880069268;

  async function getData() {
    const response = await axios.get(FOOD_ORDER_DETAIL + order_uuid);

    setOrderFoodDetail(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <div className="QrcodeStyle">
        <div
          style={{
            width: '300px',
            height: '100px',
            zIndex: '-1',
            // backgroundColor: 'green',
          }}
          className=" circleGroupTop"
        >
          <div className="d-flex circleGroup">
            <div className="circleLeft"></div>
            <div className="circleRight"></div>
          </div>
          <div className="qrcodeTitle">
            <span>訂單序號:1237beqajdyqw241</span>
          </div>
        </div>
        <div className="qrcode d-flex">
          <QRCodeSVG
            value={orderFoodDetail}
            size="216"
            level="M"
            style={{ padding: '10px' }}
          
          />
        </div>
        <div className="useTime">
          <p>使用期限2022/12/5-2023/01/05</p>
        </div>
      </div>
      {/* <Card border="success" style={{ width: '18rem' }}>
        {/* <Card.Header>{orderFoodDetail[0].product_name}</Card.Header> */}
      {/* <Card.Body>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>  */}
    </div>
  );
}
