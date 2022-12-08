import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment/moment';
import locale from 'antd/es/date-picker/locale/zh_TW';
import './BookingBar.scss';
import { useHotelContext } from '../Context/HotelContext';
import { ReactComponent as Sort } from '../../../../icon/sort.svg';
import BuyButton from '../BuyButton/BuyButton';
const { RangePicker } = DatePicker;
// import BookingBarOpen from './BookingBarOpen';
function BookingBar() {
  const {
    slideOut,
    bookingBarOpen,
    setBookingBarOpen,
    roomCounts,
    hotelRoomPrice,
    hotelListData,
    pickDate,
  } = useHotelContext();
  // const [bookingBarOpen, setBookingBarOpen] = useState(false);

  useEffect(() => {
    if (!slideOut) {
      setBookingBarOpen(false);
    }
  }, [slideOut]);
  return (
    <div className="BookingBar">
      <div className={slideOut ? 'ShowBookingBar' : ''}>
        <div className="container BookingBarContent d-flex align-items-center ">
          <div
            className="canTouch"
            onClick={(e) => {
              setBookingBarOpen(!bookingBarOpen);
            }}
          >
            <h2 style={{ color: '#4D4D4D' }}>{hotelListData.product_name}</h2>
            {/* <div className="icon d-flex align-items-center">
              <Sort />
            </div> */}
            {/* <div
              className={bookingBarOpen ? 'bookingBarOpen' : 'bookingBarOff'}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <BookingBarOpen />
            </div> */}
          </div>
          <div className="BookingBarRight d-flex align-items-center justify-content-center">
            <h4
              style={{
                color: '#59d8a1',
                fontSize: '22px',
              }}
            >
              {/* TODO:拿到真實價格 */}TWD$
              {roomCounts * hotelRoomPrice * pickDate.days}
            </h4>
            <div className="d-flex">
              <BuyButton />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default BookingBar;
