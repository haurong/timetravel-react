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
  //  票券價格
  const [ticketTypePrice, setTicketTypePrice] = useState(1);

  //  數量
  const [ticketCounts, setTicketCounts] = useState(1);

  //  要到住宿資料
  const [ticketListData, setTicketListData] = useState({});

  //  要到房型資料
  const [hotelRoomChoose, setHotelRoomChoose] = useState([]);

  //liketoggle
  const [like, setLike] = useState(false);

  //新增至我行程
  const [add, setAdd] = useState(false);

  //  要到評論資料
  const [ticketCommentData, setTicketCommentData] = useState([]);

  //  取得總星星平均
  const [allStar, setAllStar] = useState();

  //  評價排序
  const [commentSort, setCommentSort] = useState('time_ASC');

  //  選擇的房型
  const [typesChooseName, SetTypesChooseName] = useState();

  //  列表資料
  const [ticketAllData, setTicketAllData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
    rowsAll: [],
  });

  //收藏項目
  const [collectItem, setCollectItem] = useState([]);
  //  住宿列表資料篩選條件
  const [hotelSort, setHotelSort] = useState({
    area: 'area_All',
    cate: 'cate_All',
    like: 'likeAll',
  });

  //  列表資料改變
  const [ticketSortData, setTicketSortData] = useState([]);

  const [displayData, setDisplayData] = useState([]);

  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);

  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  //每頁多少筆資料
  const perPage = 12;

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
        ticketTypePrice,
        setTicketTypePrice,
        ticketCounts,
        setTicketCounts,
        ticketListData,
        setTicketListData,
        hotelRoomChoose,
        setHotelRoomChoose,
        ticketCommentData,
        setTicketCommentData,
        allStar,
        setAllStar,
        commentSort,
        setCommentSort,
        typesChooseName,
        SetTypesChooseName,
        ticketAllData,
        setTicketAllData,
        hotelSort,
        setHotelSort,
        ticketSortData,
        setTicketSortData,
        displayData,
        setDisplayData,
        pageNow,
        setPageNow,
        pageTotal,
        setPageTotal,
        perPage,
        collectItem,
        setCollectItem
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
