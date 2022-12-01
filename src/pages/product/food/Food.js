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

import './Food.scss';
function Food() {
  //產品用的資料
  //1.從伺服器來的資料
  const [foodData, setFoodData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
    rowsAll: [],
  });
  // console.log(foodData);
  //呈現顯示資料用
  const [foodProductDisplay, setFoodProductDisplay] = useState([]);

  //搜尋關鍵字用
  const [searchWord, setSearchWord] = useState('');
  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   setFoodProductDisplay(foodData);
  // });

  async function getList() {
    const response = await axios.get(FOOD_LIST + `?` + usp.toString());

    setFoodData(response.data);
    setFoodProductDisplay(response.data.rowsAll);
  }
  //console.log(foodData)
  useEffect(() => {
    getList();
  }, []);
  // console.log(foodProductDisplay);
  // console.log(foodData)
  // // // 處理過濾的函式
  const handleSearch = (foodData, searchWord) => {
    let newFoodData = [...foodData.rowsAll];

    if (searchWord.length) {
      newFoodData = newFoodData.filter((newFoodData) => {
        return newFoodData.product_name.includes(searchWord);
      });

      // console.log(newFoodData);
    }
    return newFoodData;
  };

  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const path = window.location.pathname.split('/');

  // const debounceHandleSearch = useCallback(_.debounce(handleSearch, 400), []);

  // console.log(foodData);
  useEffect(() => {
    if (searchWord.length < 3 && searchWord.length !== 0) return;

    let newFoodData = [];

    newFoodData = handleSearch(foodData, searchWord);

    setFoodProductDisplay(newFoodData);
  }, [searchWord, foodData, location]);

  //cardlist顯示用的資料
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
        <MyPagination page={foodData.page} totalPages={foodData.totalPages} />
      </div>

      <div className="givePadding"></div>

      <Footer />
    </>
  );
}

export default Food;
