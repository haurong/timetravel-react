import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useLocation, Link } from 'react-router-dom';
import { FOOD_LIST } from '../../../config.js';
import SearchBar from './SearchBar';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import CardList from '../../../Component/Card_List/Card_List';
import Sidebar from '../../../Component/Sidebar1/Sidebar1';
import MyPagination from '../../../Component/Pagination/Pagination';
import CommitSelector from './CommitSelect.js';
import BreadCrumb from './BreadCrumb';
import SearchIcon from '../../../icon/search.svg';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import './Food.scss';

function Food() {
  //從伺服器來的資料
  const [foodData, setFoodData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
    rowsAll: [],
  });

  //呈現顯示資料用
  const [foodProductDisplay, setFoodProductDisplay] = useState([]);

  //搜尋關鍵字用
  const [searchWord, setSearchWord] = useState('');
  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('');

  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);
  //每頁多少筆資料
  const [perPage, setPerPage] = useState(12);
  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  async function getList() {
    const response = await axios.get(FOOD_LIST);

    setFoodData(response.data);
    setFoodProductDisplay(response.data.rowsAll);
  }
  //console.log(foodData)
  useEffect(() => {
    getList();
  }, []);

  // 處理過濾的函式
  const handleSearch = (foodData, searchWord) => {
    let newFoodData = [...foodData.rowsAll];

    if (searchWord.length) {
      newFoodData = newFoodData.filter((newFoodData) => {
        //搜尋商品名稱、縣市地區名
        return (
          newFoodData.product_name.includes(searchWord) +
          newFoodData.city_name.includes(searchWord) +
          newFoodData.area_name.includes(searchWord)
        );
      });
    }
    return newFoodData;
    debounceHandleSearch(newFoodData);
  };

  const debounceHandleSearch = useCallback(_.debounce(handleSearch, 400), []);
  //console.log(foodData);
  const location = useLocation();
  // const usp = new URLSearchParams(location.search);
  // const path = window.location.pathname.split('/');

  // const getFoodListData = async (foodData) => {

  //   let newFoodDataPage = [...foodData.rowsAll];
  //   const pageList = _.chunk(newFoodDataPage, perPage);

  //   console.log(pageList);

  //   if (pageList.length > 0) {
  //     setPageTotal(pageList.length);
  //     //紀錄分塊後的資料
  //     setFoodProductDisplay(pageList);
  //     //設定到state裡
  //     setFoodData(newFoodDataPage);
  //   }
  // };

  const paginationBar = (
    <ul className="pagination d-flex">
      <li className="page-item ">
        <Link
          className="page-link  prevPage"
          to={`?page=${pageNow - 1}`}
          aria-label="Previous"
          onClick={() => {
            const newPageNowMinus = pageNow - 1;
            setPageNow(newPageNowMinus);
          }}
        >
          <MdOutlineChevronLeft />
        </Link>
      </li>
      {Array(pageTotal)
        .fill(1)
        .map((v, i) => {
          const classNames = ['page-item'];
          const p = pageNow - 5 + i;
          if (p < 1 || p > pageTotal) return null;
          if (p === pageNow) classNames.push('active');
          const link = `?page=${p}`;
          return (
            <li className={classNames.join(' ')} key={p}>
              <Link
                className="page-link"
                to={link}
                onClick={() => {
                  setPageNow(p);
                }}
              >
                {p}
              </Link>
            </li>
          );
        })}
      <li className="page-item">
        <Link
          className="page-link "
          to={`?page=${pageNow + 1}`}
          aria-label="Next"
          onClick={() => {
            const newPageNowPlus = pageNow + 1;
            setPageNow(newPageNowPlus);
          }}
        >
          <MdOutlineChevronRight />
        </Link>
      </li>
    </ul>
  );
  // console.log(foodData);

  useEffect(() => {
    if (searchWord.length < 1 && searchWord.length !== 0) return;

    let newFoodData = [];

    newFoodData = handleSearch(foodData, searchWord);

    setFoodProductDisplay(newFoodData);
  }, [searchWord, foodData, location]);

  //cardlist顯示過濾完的資料用的資料
  return (
    <>
      <NavBar />
      <div className="space "></div>
      <div className="container col-12 givePadding ">
        <BreadCrumb foodData={foodData} />
      </div>
      <div className="container col-lg-12 d-flex foodContent">
        <div className="col-lg-3  px-3 " style={{ border: '1px solid blue' }}>
          <Sidebar />
        </div>
        <div
          className="col-lg-9 col-md-12 px-3 mx-0 CardListStyle"
          style={{ border: '1px solid black' }}
        >
          <div className="d-flex foodSort">
            <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
            <CommitSelector />
            <CommitSelector />
          </div>

          <CardList rowsAll={foodProductDisplay} />
        </div>
      </div>
      <div className="foodPagination">
        {paginationBar}
        {/* <MyPagination page={foodData.page} totalPages={foodData.totalPages} /> */}
      </div>

      <div className="givePadding"></div>

      <Footer />
    </>
  );
}

export default Food;
