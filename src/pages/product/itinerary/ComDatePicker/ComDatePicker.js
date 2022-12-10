import React, { useState, useEffect } from 'react';
import './ComDatePicker.scss';
import { DatePicker, Space } from 'antd';
import { useItineraryContext } from './../ItineraryContext';
import moment from 'moment';

const { RangePicker } = DatePicker;

function ComDatePicker(props) {
  const { iTData, setITData, name, setName, day, setDay, date, setDate } =
    useItineraryContext();

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        allowClear={false}
        value={moment(iTData.date)}
        bordered={false}
        suffixIcon={''}
        style={{ width: '135px' }}
        onChange={(e) => {
          // console.log(e);
          let a = e._d;
          let arr = JSON.parse(JSON.stringify(iTData));
          arr.date = moment(a).format('YYYY-MM-DD');
          // console.log(a);
          // console.log(arr);
          setITData(arr);
        }}
      />
    </Space>
  );
}

export default ComDatePicker;
