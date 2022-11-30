import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Qrcode.scss';
import React from 'react';
import axios from 'axios';
import { FOOD_ITEM } from '../.././config';

export default function Qrcode() {
  const [foodData, setFoodData] = useState({});
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];
  async function getData() {
    const response = await axios.get(FOOD_ITEM + sid);
    // const response = await axios.get(SITE_DETAIL);
    setFoodData(response.data);
  }
  useEffect(() => {
    getData();
  }, [location]);

//TODO:value要抓orderdetailfood的sid
  return (
    <div>
      <QRCodeSVG value="F116" size="216" level="M" className="qrcode" />
    </div>
  );
}
