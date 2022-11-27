import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment/moment';
import locale from 'antd/es/date-picker/locale/zh_TW';
import { useHotelContext } from '../Context/HotelContext';
const { RangePicker } = DatePicker;

function BookingBarOpen() {
  const { pickDate, setPickDate, today, tomorrow } = useHotelContext();
  return (
    <div className="d-flex BookingBarOpen">
      <div>
      </div>
    </div>
  );
}

export default BookingBarOpen;
