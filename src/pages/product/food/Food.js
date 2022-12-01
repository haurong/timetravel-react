import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useLocation, Link } from 'react-router-dom';
import { FOOD_LIST } from '../../../config.js';
import InputIME from './FoodSearch';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import CardList from '../../../Component/Card_List/Card_List';
import Sidebar from '../../../Component/Sidebar1/Sidebar1';
import MyPagination from '../../../Component/Pagination/Pagination';
import CommitSelector from './CommitSelect.js';
import BreadCrumb from './BreadCrumb';
import SearchIcon from '../../../icon/search.svg';

import './Food.scss';
function Food() {
  const [foodData, setFoodData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });
  const [searchWord, setSearchWord] = useState('');
  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('');

  async function getList() {
    const response = await axios.get(FOOD_LIST + `?` + usp.toString());
    setFoodData(response.data);
  }

  const getFoodProductBySearchWord = async (keyword) => {
    try {
      const response = await axios.get(FOOD_LIST + keyword);

      //設定到state裡
      setFoodData(response.data);
    } catch (e) {
      // 錯誤處理
      console.error(e.message);
      setErrorMessage(e.message);
    }
  };
  // 處理過濾的函式
  const handleSearch = (keyword) => {
    // 檢查，當都沒輸入時回復原本data
    if (keyword === '') {
      getList();
      return;
    }
    getFoodProductBySearchWord(keyword);
  };
  const handleChange = (e) => {
    // 可控元件綁用state使用
    setSearchWord(e.target.value);

    // 搜尋用 - trim去除空白，toLowerCase轉小寫英文
    const newSearchWord = e.target.value.trim().toLowerCase();

    // // 傳至debounceFn中
    debounceHandleSearch(newSearchWord);
  };
  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const path = window.location.pathname.split('/');

  const debounceHandleSearch = useCallback(_.debounce(handleSearch, 400), []);

  console.log(foodData);
  useEffect(() => {
    getList();
  }, [location]);
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
            {/* <form className="d-flex" role="search"> */}
            <div className="input-group" style={{ width: '300px' }}>
              <span className="icon" id="basic-addon1">
                <img src={SearchIcon} alt="" />
              </span>
              <InputIME
                className="form-control search-border me-4"
                type="text"
                value={searchWord}
                placeholder="搜尋"
                aria-label="Search"
                onChange={handleChange}
              />
              <input
                type="text"
                value={searchWord}
                onChange={(e) => {
                  const newSearchWord = e.target.value;

                  setSearchWord(newSearchWord);

                  getFoodProductBySearchWord(newSearchWord);
                }}
              />
            </div>
            <CommitSelector />
            <CommitSelector />
          </div>

          <CardList rows={foodData.rows} />
        </div>
      </div>
      <div className="foodPagination">
        <MyPagination page={foodData.page} totalPages={foodData.totalPages} />
      </div>

      <div className="givePadding"></div>

      <Footer />
    </>
  );
}

export default Food;
