import React, { useState, useContext, createContext, useEffect } from 'react';
import moment from 'moment/moment';

const TicketContext = createContext(null);

export const TicketContextProvider = ({ children }) => {
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
    // endTime: tomorrow,
    // days: 1,
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

  //  評價排序
  const [commentSort, setCommentSort] = useState('time_ASC');

  //  選擇的房型
  const [roomsChooseName, setRoomsChooseName] = useState();

  //  列表資料
  const [ticketAllData, setTicketAllData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
    rowsAll: [],
  });

  //  住宿列表資料篩選條件
  const [hotelSort, setHotelSort] = useState({
    area: 'area_All',
    cate: 'cate_All',
    like: 'likeAll',
  });

  //  列表資料改變
  const [ticketSortData, setTicketSortData] = useState([]);

  const [displayData, setDisplayData] = useState([]);

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
        commentSort,
        setCommentSort,
        roomsChooseName,
        setRoomsChooseName,
        ticketAllData,
        setTicketAllData,
        hotelSort,
        setHotelSort,
        ticketSortData,
        setTicketSortData,
        displayData,
        setDisplayData,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
