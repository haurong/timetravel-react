import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';
import { ITINERARY_TITLE } from './site-config';
import { useItineraryContext } from './ItineraryContext';
import Swal from 'sweetalert2';

export default function ITitleText() {
  const { iTData, setITData } = useItineraryContext();
  // const [iTData, setITData] = useState({});
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
      {/* <input type="text" value={iTData.list_name} className={disable} onClick={}/> */}
      <h1 contenteditable="true">{iTData.list_name}</h1>
      <h2>一共</h2>
      <select className="daySelector">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <h2>天</h2>
      <h2>
        {moment(iTData.date).format('YYYY-MM-DD(ddd)')}~
        {moment(iTData.date).add(iTData.day, 'd').format('YYYY-MM-DD(ddd)')}
      </h2>
    </div>
  );
}
