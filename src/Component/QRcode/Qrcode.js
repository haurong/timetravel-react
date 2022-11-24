import { useLocation } from 'react-router-dom';
import { useState,useEffect} from 'react';
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
  return (
    <div>
      <QRCodeSVG
        value="http://127.0.0.1:3000/food/detail"
        size="216"
        level="M"
        className="qrcode"
      />
    </div>
  );
}
