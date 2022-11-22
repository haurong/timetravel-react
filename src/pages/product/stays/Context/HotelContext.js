import React, { useState, useContext, createContext, useEffect } from 'react';
import moment from 'moment/moment';

const HotelContext = createContext(null);

export const HotelContextProvider = ({ children }) => {
  //  日期選擇
  let today = moment(new Date()).format('YYYY-MM-DD');
  let tomorrow = new Date(today);
  tomorrow = moment(tomorrow.setDate(tomorrow.getDate() + 1)).format(
    'YYYY-MM-DD'
  );
  const [slideOut, setSlideOut] = useState(false);
  const [bookingBarOpen, setBookingBarOpen] = useState(false);
  const [pickDate, setPickDate] = useState({
    startTime: today,
    endTime: tomorrow,
    days: 1,
  });

  // 價格
  const [hotelRoomPrice, setHotelRoomPrice] = useState(1);
  const [roomCounts, setRoomCounts] = useState(1);

  //  點下去換顏色＆加入我的最愛
  const addToMyFavorite = () => {};

  //  點下去換顏色＆加入我的行程
  const addToMySchedule = () => {};

  return (
    <HotelContext.Provider
      value={{
        slideOut,
        setSlideOut,
        bookingBarOpen,
        setBookingBarOpen,
        pickDate,
        setPickDate,
        today,
        tomorrow,
        addToMyFavorite,
        addToMySchedule,
        hotelRoomPrice,
        setHotelRoomPrice,
        roomCounts,
        setRoomCounts,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotelContext = () => useContext(HotelContext);
