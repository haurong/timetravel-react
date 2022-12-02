import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useLocation, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_LIST } from '../../../config.js';
import SearchBar from './SearchBar';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { FOOD_IMG } from '../../../config';
// import CardList from '../../../Component/Card_List/Card_List';
import Map from '../../../icon/map.svg';
import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';
import Sidebar from '../../../Component/Sidebar1/Sidebar1';
// import MyPagination from '../../../Component/Pagination/Pagination';
import CommitSelector from './CommitSelect.js';
import BreadCrumb from './BreadCrumb';
import SearchIcon from '../../../icon/search.svg';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import './Food.scss';

function Food() {
  //從伺服器來的資料
  const [foodData, setFoodData] = useState([]);

  //呈現顯示資料用
  const [foodProductDisplay, setFoodProductDisplay] = useState([]);

  //搜尋關鍵字用
  const [searchWord, setSearchWord] = useState('');

  //錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('');

  //看是否取得資料
  const [haveData, setHaveData] = useState(false);

  async function getList() {
    const response = await axios.get(FOOD_LIST);

    setFoodData(response.data);
    setFoodProductDisplay(response.data);
    console.log('foodDisplay', foodProductDisplay);
  }

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    getFoodListData(foodProductDisplay, perPage);
  }, [foodData]);

  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);
  //每頁多少筆資料
  const [perPage, setPerPage] = useState(12);
  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  const [like, setLike] = useState(false);
  const [collect, setCollect] = useState(false);
  const toggleLike = () => {
    setCollect(!collect);
    setLike(!like);
  };

  //console.log(foodData)

  //處理分頁資料
  const getFoodListData = (v, perPage) => {
    const pageList = _.chunk(v, perPage);
    console.log('pageList:', pageList[0]);

    if (pageList.length > 0) {
      setPageTotal(pageList.length);
      //紀錄分塊後的資料
      setFoodProductDisplay(pageList);
      setHaveData(true);
    }

    console.log('foodProductDisplay', foodProductDisplay);
  };

  // 處理過濾的函式
  const handleSearch = (foodData, searchWord) => {
    let newFoodData = [...foodData];
    console.log('newFoodData', newFoodData);

    newFoodData = newFoodData.filter((item) => {
      //搜尋商品名稱、縣市地區名
      return (
        item.product_name.includes(searchWord) +
        item.city_name.includes(searchWord) +
        item.area_name.includes(searchWord)
      );
    });
    setPageNow(0);
    return newFoodData;
  };
  useEffect(() => {
    if (searchWord.length < 1) return;

    let newFoodData = [];

    newFoodData = handleSearch(foodData, searchWord);

    getFoodListData(newFoodData, perPage);
  }, [searchWord]);

  const display = errorMessage ? (
    errorMessage
  ) : (
    <Row xs={1} lg={4} className="d-flex justify-content-start flex-wrap">
      {haveData
        ? foodProductDisplay[pageNow - 1].map((v, i) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={i}
                onClick={() => {
                  console.log(v.product_number);
                }}
              >
                <Card.Img
                  variant="top"
                  className="foodCardImg1"
                  src={`${FOOD_IMG}${v.product_photo}`}
                />
                <Card.Body>
                  <Card.Title className="Card_Title">
                    {v.product_name}
                  </Card.Title>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span class="Card_Score">
                      {v.city_name} | {v.area_name}
                    </span>
                  </Card.Text>
                  <div className="d-flex PriceAndCollect">
                    <div>
                      <button className="Heart_btn" onClick={toggleLike}>
                        <img
                          src={like ? PinkHeart : Heart}
                          style={{ width: '25px', height: '25px' }}
                          alt=""
                        />
                        <span>{collect ? v.collect + 1 : v.collect}</span>
                      </button>
                    </div>
                    <div>
                      <h2 variant="primary" className="Card_Price">
                        NT${v.p_selling_price}
                      </h2>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })
        : foodProductDisplay.map((v, i) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={i}
                onClick={() => {
                  console.log(v.product_number);
                }}
              >
                <Card.Img
                  variant="top"
                  className="foodCardImg1"
                  src={`${FOOD_IMG}${v.product_photo}`}
                />
                <Card.Body>
                  <Card.Title className="Card_Title">
                    {v.product_name}
                  </Card.Title>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span class="Card_Score">
                      {v.city_name} | {v.area_name}
                    </span>
                  </Card.Text>
                  <div className="d-flex PriceAndCollect">
                    <div>
                      <button className="Heart_btn" onClick={toggleLike}>
                        <img
                          src={like ? PinkHeart : Heart}
                          style={{ width: '25px', height: '25px' }}
                          alt=""
                        />

                        <span>{collect ? v.collect + 1 : v.collect}</span>
                      </button>
                    </div>
                    <div>
                      <h2 variant="primary" className="Card_Price">
                        NT${v.p_selling_price}
                      </h2>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
    </Row>
  );
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
          {display}
          {/* <CardList rowsAll={errorMessage ? foodProductDisplay : {}} /> */}
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
