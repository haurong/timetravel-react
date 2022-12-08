import React, { useState, useEffect } from 'react';
import './ComDatePicker.scss';
import { DatePicker, Space } from 'antd';
import { useItineraryContext } from './../ItineraryContext';
import moment from 'moment';

const { RangePicker } = DatePicker;

function ComDatePicker(props) {
  const { iTData, setITData, name, setName, day, setDay, date, setDate } =
    useItineraryContext();
  const [newDate, setNewDate] = useState('');

  console.log(iTData);
  console.log(iTData.date);

  useEffect(() => {
    // setNewDate(moment(iTData.date).format('YYYY-MM-DD'));
    // console.log(moment(iTData.date).format('YYYY-MM-DD'));
  }, [iTData]);

  // const newDate = moment(iTData.date).format('YYYY-MM-DD');
  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        // value={'2022-12-06'}
        // defaultValue={moment(iTData.date).format('YYYY-MM-DD')}
        // defaultValue={iTData.date !== sundefined ? newDate : ''}
        bordered={false}
        suffixIcon={''}
        style={{ width: '135px' }}
        onChange={(e) => {
          console.log(e);
          let a = e._d;
          // console.log(newDate);

          // moment.locale('zh-tw');
          // let start = moment(e[0]._d).format('YYYY-MM-DD');
          // let end = moment(e[1]._d).format('YYYY-MM-DD');
          // let howLong = (+new Date(end) - +new Date(start)) / 86400000;
          // // console.log(howLong);
          // setPickDate({
          //   startTime: start,
          //   endTime: end,
          //   days: howLong,
          // });
        }}
      />
    </Space>
  );
}

export default ComDatePicker;
