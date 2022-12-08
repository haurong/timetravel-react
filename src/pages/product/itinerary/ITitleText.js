import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';
import { ITINERARY_TITLE } from './site-config';
import { useItineraryContext } from './ItineraryContext';
import ComDatePicker from './ComDatePicker/ComDatePicker';
// import Swal from 'sweetalert2';

export default function ITitleText() {
  const { iTData, setITData, name, setName, day, setDay, date, setDate } =
    useItineraryContext();
  // const [newYear, setNewYear] = useState(2022);
  // const [newMonth, setNewMonth] = useState(12);
  // const [newDay, setNewDay] = useState(1);
  const location = useLocation();
  async function getData() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_TITLE + sid);
    setITData(response.data);
    setName(response.data.list_name);
    setDay(response.data.day);
    setDate(response.data.date);
  }
  let arr = JSON.parse(JSON.stringify(iTData));

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <div id="iTitleText">
      <h1
        contentEditable="true"
        onChange={(e) => {
          const a = e.target.value;
          arr.name = a;
          setName(a);
        }}
        style={{ width: '200px' }}
      >
        {iTData.list_name}
      </h1>
      <h2 style={{ paddingRight: '12px' }}>一共</h2>
      <select
        className="daySelector"
        onChange={(e) => {
          const a = e.target.value;
          arr.day = a;
          setDay(a);
        }}
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
        {/* <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option> */}
        {+day === 1 ? (
          <option value="1" selected>
            1
          </option>
        ) : (
          <option value="1">1</option>
        )}
        {+day === 2 ? (
          <option value="1" selected>
            2
          </option>
        ) : (
          <option value="1">2</option>
        )}
        {+day === 3 ? (
          <option value="1" selected>
            3
          </option>
        ) : (
          <option value="1">3</option>
        )}
      </select>
      <h2>天</h2>
      <ComDatePicker />
      {/* <h2>{moment(iTData.date).format('YYYY-MM-DD')}</h2> */}
      <h2 style={{ marginLeft: '0' }}>
        {iTData.day === 1
          ? ''
          : '~' +
            moment(iTData.date)
              .add(iTData.day - 1, 'd')
              .format('YYYY-MM-DD')}
      </h2>
    </div>
  );
}
