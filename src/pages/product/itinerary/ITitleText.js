import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';
import { ITINERARY_TITLE } from './site-config';

export default function ITitleText() {
  const [iTData, setITData] = useState({});
  const location = useLocation();
  async function getData() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_TITLE + sid);
    setITData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <div id="iTitleText">
      <h1>{iTData.list_name}</h1>
      <h2>
        {moment(iTData.date).format('YYYY-MM-DD(ddd)')}~
        {moment(iTData.date).add(iTData.day, 'd').format('YYYY-MM-DD(ddd)')}
      </h2>
    </div>
  );
}
