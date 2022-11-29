import React, { useState, useContext, createContext, useEffect } from 'react';
import moment from 'moment/moment';

const TicketContext = createContext(null);

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

  //  房間價格
  const [hotelRoomPrice, setHotelRoomPrice] = useState(1);

  //  房間數量
  const [roomCounts, setRoomCounts] = useState(1);

  //  要到住宿資料
  const [hotelListData, setHotelListData] = useState({});

  //  要到房型資料
  const [hotelRoomChoose, setHotelRoomChoose] = useState([]);

  //  要到評論資料
  const [hotelCommentData, setHotelCommentData] = useState([]);

  //  取得總星星平均
  const [allStar, setAllStar] = useState();

  return (
    <TicketContext.Provider
      value={{
        slideOut,
        setSlideOut,
        bookingBarOpen,
        setBookingBarOpen,
        pickDate,
        setPickDate,
        today,
        tomorrow,
        hotelRoomPrice,
        setHotelRoomPrice,
        roomCounts,
        setRoomCounts,
        hotelListData,
        setHotelListData,
        hotelRoomChoose,
        setHotelRoomChoose,
        hotelCommentData,
        setHotelCommentData,
        allStar,
        setAllStar,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useHotelContext = () => useContext(TicketContext);
