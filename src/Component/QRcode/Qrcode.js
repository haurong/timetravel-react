import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Qrcode.scss';
import React from 'react';
import axios from 'axios';
import { FOOD_ORDER_DETAIL } from '../.././config';
import Card from 'react-bootstrap/Card';
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
    <div>
    
      <Card border="success" style={{ width: '18rem' }}>
        {/* <Card.Header>{orderFoodDetail[0].product_name}</Card.Header> */}
        <Card.Body>
          <Card.Text>
            <QRCodeSVG
              value={orderFoodDetail}
              size="216"
              level="M"
              className="qrcode"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
