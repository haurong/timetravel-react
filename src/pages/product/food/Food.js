import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useLocation, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { DEL_COLLECT, FOOD_LIST } from '../../../config.js';
import { ADD_COLLECT } from '../../../config.js';
import SearchBar from './SearchBar';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { FOOD_IMG } from '../../../config';
import Map from '../../../icon/map.svg';
import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';
import Sidebar from '../../../Component/Sidebar1/Sidebar1';
import CommitSelector from './CommentSelect.js';
import BreadCrumbList from './BreadCrumbList';
import Qrcode from '../../../Component/QRcode/Qrcode';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { useAllContext } from '../../AllContext/AllContext.js';
import './style/Food.scss';

function Food() {
  const { searchWord, setSearchWord } = useAllContext();
  //從伺服器來的資料
  const [foodData, setFoodData] = useState([]);

  //呈現顯示資料用
  const [foodProductDisplay, setFoodProductDisplay] = useState([]);

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
      //搜尋商品名稱、縣市地區名、分類名
      return (
        item.product_name.includes(searchWord) +
        item.city_name.includes(searchWord) +
        item.area_name.includes(searchWord) +
        item.categories_name.includes(searchWord)
      );
    });
    setPageNow(1);
    return newFoodData;
  };

  useEffect(() => {
    if (searchWord.length < 1) return;

    let newFoodData = [];

    newFoodData = handleSearch(foodData, searchWord);

    getFoodListData(newFoodData, perPage);
  }, [searchWord]);

  const display = (
    <Row xs={1} lg={4} className="d-flex justify-content-start flex-wrap">
      {haveData && foodProductDisplay[pageNow - 1].length > 0
        ? foodProductDisplay[pageNow - 1].map((v, i) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={i}
                onClick={() => {
                  // console.log(v.sid);
                }}
              >
                <Card.Img
                  variant="top"
                  className="foodCardImg1"
                  src={`${FOOD_IMG}${v.product_photo}`}
                />
                <Card.Body>
                  <Link to="detail">
                    <Card.Title className="Card_Title">
                      {v.product_name}
                    </Card.Title>
                  </Link>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span className="Card_Score">
                      {v.city_name} | {v.area_name}
                    </span>
                  </Card.Text>
                  <div className="d-flex PriceAndCollect">
                    <div>
                      <button
                        className="Heart_btn"
                        onClick={async function handleLike() {
                          const member_sid = JSON.parse(
                            localStorage.getItem('auth')
                          ).sid;
                          const product_sid = v.sid;
                          const { data } = await axios.post(ADD_COLLECT, {
                            member_sid: member_sid,
                            product_sid: product_sid,
                          });
                          //選告newItem(新的物件)
                          const newItem = {
                            ...v,
                            product_sid: v.product_sid ? null : product_sid,
                          };
                          //深拷貝要顯示的資料
                          const newPagesArray = JSON.parse(
                            JSON.stringify(foodProductDisplay)
                          );

                          console.log(newPagesArray[pageNow - 1][i], newItem);
                          //要知道現在使用者點到的是第幾個，用i當作索引值
                          newPagesArray[pageNow - 1][i] = newItem;
                          //再設定回拷貝出來的資料
                          setFoodProductDisplay(newPagesArray);

                          // console.log(like);
                          console.log({ data });

                          // if (v.product_sid.length.indexOf === -1) {
                          //   const member_sid = JSON.parse(
                          //     localStorage.getItem('auth')
                          //   ).sid;
                          //   const product_sid = v.sid;

                          //   const {data}=await axios.delete(DEL_COLLECT,{
                          //     member_sid:member_sid,

                          //   })

                          // }
                        }}
                      >
                        <img
                          src={v.product_sid === v.sid ? PinkHeart : Heart}
                          style={{ width: '25px', height: '25px' }}
                          alt=""
                        />
                        <span>{v.collect}</span>
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
                    <span className="Card_Score">
                      {v.city_name} | {v.area_name}
                    </span>
                  </Card.Text>
                  <div className="d-flex PriceAndCollect">
                    <div>
                      <button className="Heart_btn">
                        <img
                          src={true ? PinkHeart : Heart}
                          style={{ width: '25px', height: '25px' }}
                          alt=""
                        />
                        <span>{v.collect}</span>
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
            if (pageNow > 1) {
              const newPageNowMinus = pageNow - 1;
              setPageNow(newPageNowMinus);
            }
          }}
        >
          <MdOutlineChevronLeft />
        </Link>
      </li>
      {Array(5)
        .fill(1)
        .map((v, i) => {
          const classNames = ['page-item'];
          const p = pageNow + i;
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
            if (pageNow > pageTotal) {
              setPageNow(pageTotal);
            }
          }}
        >
          <MdOutlineChevronRight />
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <NavBar />
      <div className="space "></div>
      <div className="container col-12 givePadding ">
        <BreadCrumbList foodData={foodData} />
      </div>
      <div className="container col-lg-12 d-flex foodContent">
        <div className="col-lg-3  px-3 ">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-12 px-3 mx-0 CardListStyle">
          <div className="d-flex foodSort">
            <CommitSelector />
            <CommitSelector />
          </div>
          {display}
        </div>
      </div>
      <div className="foodPagination">{paginationBar}</div>

      <div className="givePadding"></div>
      <Qrcode />

      <Footer />
    </>
  );
}

export default Food;
