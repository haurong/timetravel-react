import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';
import { ITINERARY_TITLE } from './site-config';
import { useItineraryContext } from './ItineraryContext';
// import Swal from 'sweetalert2';

export default function ITitleText() {
  const { iTData, setITData } = useItineraryContext();
  const [name, setName] = useState('');
  // const [iTData, setITData] = useState({});
  const location = useLocation();
  async function getData() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_TITLE + sid);
    setITData(response.data);
    console.log(response.data);
    setName(response.data.list_name);
  }

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <div id="iTitleText">
      {/* <input
        type="text"
        value={iTData.list_name}
        style={{
          border: '0',
          fontWeight: 500,
          fontSize: '2rem',
          lineHeight: '3rem',
          color: '#4d4d4d',
          width: '200px',
        }}
      /> */}
      <h1
        contentEditable="true"
        onChange={(e) => {
          const a = e.target.value;
          setName(a);
        }}
        style={{ width: '200px' }}
      >
        {name}
      </h1>
      <h2 style={{ paddingRight: '12px' }}>一共</h2>
      <select
        className="daySelector"
        style={{
          border: '0',
          color: '#59d8a1',
          appearance: 'none',
          fontWeight: '400',
          fontSize: '1.5rem',
          lineHeight: '2.5rem',
          padding: '0px 6px',
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <h2>天</h2>
      <h2>
        {iTData.day === 1
          ? moment(iTData.date).format('YYYY-MM-DD(ddd)')
          : moment(iTData.date).format('YYYY-MM-DD(ddd)') +
            '~' +
            moment(iTData.date)
              .add(iTData.day - 1, 'd')
              .format('YYYY-MM-DD(ddd)')}
      </h2>
    </div>
  );
}
