import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import _ from 'lodash';
import SearchBar from '../product/food/SearchBar';
import { PRODUCT_LIST } from '../../config';
// import { ADD_FOOD_COLLECT } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
// import MyPagination from '../../Component/Pagination/Pagination';
import Sidebar1 from '../../Component/Sidebar1/Sidebar1';
import { useFoodContext } from '../product/food/FoodContext/FoodContext';
function ProductList() {
  // 紀錄資料庫取得原始資料
  const [productData, setProductData] = useState([]);
  //呈現資料用
  const [productDisplay, setProductDisplay] = useState([]);
  //搜尋關鍵字用
  const [searchWord, setSearchWord] = useState('');

  //錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('');
  //看是否取得資料
  const [haveData, setHaveData] = useState(false);

  async function getData() {
    const response = await axios.get(PRODUCT_LIST);
    setProductData(response.data);
    setProductDisplay(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getAllListData(productDisplay, perPage);
  }, [productData]);

  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);
  //每頁多少筆資料
  const [perPage, setPerPage] = useState(12);
  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  const [like, setLike] = useState(false);
  //TODO:按下收藏後送資料到資料庫

  // const { count, setCount } = useFoodContext();
  // //TODO:1.拿到member_sid 2.送到member_food_collect新增一筆收藏
  const [addCollect, setAddCollect] = useState({
    member_sid: '',
    food_product_sid: '',
  });
  const [collect, setCollect] = useState(false);

  const toggleLike = () => {
    setCollect(!collect);
    setLike(!like);
  };
  //處理分頁資料
  const getAllListData = (v, perPage) => {
    const pageList = _.chunk(v, perPage);
    console.log('pageList:', pageList[0]);

    if (pageList.length > 0) {
      setPageTotal(pageList.length);
      //紀錄分塊後的資料
      setProductDisplay(pageList);
      setHaveData(true);
    }
  };
  // 處理過濾的函式

  const handleSearch = (productData, searchWord) => {
    let newAllData = [...productData];
    console.log(newAllData);

    newAllData = newAllData.filter((item) => {
      //搜尋商品名稱、縣市地區名
      return item.city_name.includes(searchWord);
    });
    console.log('newAllData', newAllData);
    setPageNow(1);
    return newAllData;
  };

  useEffect(() => {
    if (searchWord.length < 1) return;
    let newAllData = [];

    newAllData = handleSearch(productData, searchWord);

    getAllListData(newAllData, perPage);
  }, [searchWord]);

  //TODO:計算收藏+1或-1
  // const display = errorMessage ? (
  //   errorMessage
  // ) : (
  //   <Row xs={1} lg={4} className="d-flex justify-content-start flex-wrap">
  //     {haveData
  //       ? productDisplay[pageNow - 1].map((v, i) => {
  //           return (
  //             <Card
  //               className="MyCard col-3"
  //               style={{ width: '20rem' }}
  //               key={i}
  //               onClick={() => {
  //                 console.log(v.product_number);
  //               }}
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 className="foodCardImg1"
  //                 src={`${FOOD_IMG}${v.product_photo}`}
  //               />
  //               <Card.Body>
  //                 <Card.Title className="Card_Title">
  //                   {v.product_name}
  //                 </Card.Title>
  //                 <Card.Text className="Card_Text">
  //                   <Card.Img src={Map} className="Map_icon" />
  //                   <span class="Card_Score">
  //                     {v.city_name} | {v.area_name}
  //                   </span>
  //                 </Card.Text>
  //                 <div className="d-flex PriceAndCollect">
  //                   <div>
  //                     <button className="Heart_btn" onClick={toggleLike}>
  //                       <img
  //                         src={like ? PinkHeart : Heart}
  //                         style={{ width: '25px', height: '25px' }}
  //                         alt=""
  //                       />

  //                       <span>{collect ? v.collect + 1 : v.collect}</span>
  //                     </button>
  //                   </div>
  //                   <div>
  //                     <h2 variant="primary" className="Card_Price">
  //                       NT${v.p_selling_price}
  //                     </h2>
  //                   </div>
  //                 </div>
  //               </Card.Body>
  //             </Card>
  //           );
  //         })
  //       : productDisplay.map((v, i) => {
  //           return (
  //             <Card
  //               className="MyCard col-3"
  //               style={{ width: '20rem' }}
  //               key={i}
  //               onClick={() => {
  //                 console.log(v.product_number);
  //               }}
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 className="foodCardImg1"
  //                 src={`${FOOD_IMG}${v.product_photo}`}
  //               />
  //               <Card.Body>
  //                 <Card.Title className="Card_Title">
  //                   {v.product_name}
  //                 </Card.Title>
  //                 <Card.Text className="Card_Text">
  //                   <Card.Img src={Map} className="Map_icon" />
  //                   <span class="Card_Score">
  //                     {v.city_name} | {v.area_name}
  //                   </span>
  //                 </Card.Text>
  //                 <div className="d-flex PriceAndCollect">
  //                   <div>
  //                     <button className="Heart_btn" onClick={toggleLike}>
  //                       <img
  //                         src={like ? PinkHeart : Heart}
  //                         style={{ width: '25px', height: '25px' }}
  //                         alt=""
  //                       />
  //                       <span>{collect ? v.collect + 1 : v.collect}</span>
  //                     </button>
  //                   </div>
  //                   <div>
  //                     <h2 variant="primary" className="Card_Price">
  //                       NT${v.p_selling_price}
  //                     </h2>
  //                   </div>
  //                 </div>
  //               </Card.Body>
  //             </Card>
  //           );
  //         })}
  //   </Row>
  // );
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
          const p = pageNow + i - 1;
          console.log({ pageTotal, pageNow, p });
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

  return (
    <>
      <NavBar />
      <div className="givePadding"></div>

      <div className="container givePadding col12 d-flex">
        <div className="col-lg-3">
          <Sidebar1 />
        </div>
        <div className="col-lg-9 " style={{ margin: 0 }}>
          <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
          <div
            style={{
              paddingTop: '60px',
              paddingLeft: '40px',
            }}
          >
            <Row
              xs={1}
              lg={4}
              className="d-flex justify-content-start flex-wrap"
            >
              {haveData
                ? productDisplay[pageNow-1].map((v, i) => {
                    return (
                      <Card
                        className="MyCard col-3"
                        style={{ width: '20rem' }}
                        key={i}
                        onClick={() => {
                          console.log(v.sid);
                        }}
                      >
                        <Card.Img
                          variant="top"
                          className="foodCardImg1"
                          src={`${FOOD_IMG}${v.photo}`}
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
                              <button
                                className="Heart_btn"
                                onClick={toggleLike}
                              >
                                <img
                                  src={like ? PinkHeart : Heart}
                                  style={{ width: '25px', height: '25px' }}
                                  alt=""
                                />

                                <span>
                                  {collect ? v.collect + 1 : v.collect}
                                </span>
                              </button>
                            </div>
                            <div>
                              <h2 variant="primary" className="Card_Price">
                                NT${v.price}
                              </h2>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    );
                  })
                : productDisplay.map((v, i) => {
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
                              <button
                                className="Heart_btn"
                                onClick={toggleLike}
                              >
                                <img
                                  src={like ? PinkHeart : Heart}
                                  style={{ width: '25px', height: '25px' }}
                                  alt=""
                                />
                                <span>
                                  {collect ? v.collect + 1 : v.collect}
                                </span>
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
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {paginationBar}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductList;
