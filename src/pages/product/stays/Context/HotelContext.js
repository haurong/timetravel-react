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

  //  住宿列表資料
  const [hotelAllData, setHotelAllData] = useState({
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
    sortBy: '',
  });

  //  住宿列表資料改變
  const [hotelSortData, setHotelSortData] = useState([]);

  const [displayData, setDisplayData] = useState([]);

  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);

  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  //每頁多少筆資料
  const perPage = 12;

  //看是否取得資料
  const [haveData, setHaveData] = useState(false);

  const [breadCrumbText, setBreadCrumbText] = useState('全部');

  //收藏項目
  const [collectItem, setCollectItem] = useState([]);

  //地圖座標
  const [hotelGeocode, setHotelGeocode] = useState([]);

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
        hotelAllData,
        setHotelAllData,
        hotelSort,
        setHotelSort,
        hotelSortData,
        setHotelSortData,
        displayData,
        setDisplayData,
        pageNow,
        setPageNow,
        pageTotal,
        setPageTotal,
        perPage,
        haveData,
        setHaveData,
        breadCrumbText,
        setBreadCrumbText,
        collectItem,
        setCollectItem,
        hotelGeocode,
        setHotelGeocode,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotelContext = () => useContext(HotelContext);
