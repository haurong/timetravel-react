import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import _, { set } from 'lodash';
// import SearchBar from '../product/food/SearchBar';
import { PRODUCT_LIST } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import Sidebar1 from '../../Component/Sidebar1/Sidebar1';
//import { useFoodContext } from '../product/food/FoodContext/FoodContext';
import { useAllContext } from '../AllContext/AllContext';
function ProductList() {
  const { searchWord, setSearchWord } = useAllContext();
  // 紀錄資料庫取得原始資料
  const [productData, setProductData] = useState([]);
  //呈現資料用
  const [productDisplay, setProductDisplay] = useState([]);
  //搜尋關鍵字用
  // const [searchWord, setSearchWord] = useState('');
  const location = useLocation();
  //看是否取得資料
  const [haveData, setHaveData] = useState(false);
  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);
  //每頁多少筆資料
  const [perPage, setPerPage] = useState(12);
  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  // const [like, setLike] = useState(false);

  const [collect, setCollect] = useState(0);

  async function getData() {
    const response = await axios.get(PRODUCT_LIST);
    setProductData(response.data);
    setProductDisplay(response.data);

    console.log(response.data);
  }
  //componentdidmount先拿到伺服器來的原始資料
  useEffect(() => {
    getData();
  }, []);


  //處理分頁資料
  function getAllListData(v, perPage) {
    const pageList = _.chunk(v, perPage);
    console.log('pageList:', pageList[0]);

    if (pageList.length > 0) {
      setPageTotal(pageList.length);
      //紀錄分塊後的資料
      setProductDisplay(pageList);
      setHaveData(true);
    }
  }
  //監聽productData，若有改變就re-render
  useEffect(() => {
    //呼叫getAllListData把要顯示的資料跟分頁丟進去
    getAllListData(productDisplay, perPage);
  }, [productData]);


  //處理過濾的函式
  const handleSearch = (productData, searchWord) => {

    //解構原始資料出來做操作
    let newAllData = [...productData];
    console.log(newAllData);

    newAllData = newAllData.filter((item) => {
      //搜尋商品名稱、縣市地區名
      return (
        item.city_name.includes(searchWord) +
        item.product_name.includes(searchWord) +
        item.area_name.includes(searchWord)
      );
    });
    console.log('newAllData', newAllData);
    //更新當前頁數
    setPageNow(1);
    return newAllData;
  };

  //TODO:待修改
  //監聽searchWord，使用者輸入searchWord後改變欲顯示的資料
  useEffect(() => {
    if (searchWord.length < 1) return;

    let newAllData = [];

    newAllData = handleSearch(productData, searchWord);
    //setProductDisplay(newAllData);

    //getData(newAllData, perPage);
    //呼叫getAllListData搜尋完的資料再去做一次分頁處理
    // getAllListData(newAllData, perPage);
  }, [searchWord]);



  // useEffect(() => {
  //   // console.log('123', productData);
  //   getAllListData(productDisplay, perPage);
  //   // console.log(2);
  // }, [productData]);
  // //處理過濾的函式

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
          {
            /* console.log({ pageTotal, pageNow, p }); */
          }
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

  const display = (
    <Row xs={1} lg={4} className="d-flex justify-content-start flex-wrap">
      {productDisplay[0].length > 0
        ? productDisplay[pageNow - 1].map((v, i) => {
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
                    <span className="Card_Score">
                      {v.city_name} | {v.area_name}
                    </span>
                  </Card.Text>
                  <div className="d-flex PriceAndCollect">
                    <div>
                      <button
                        className="Heart_btn"
                        onClick={() => setCollect(collect + 1)}
                      >
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
                        NT${v.price}
                      </h2>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })
        : ''}
    </Row>
  );

  // const display1 = (
  //   <Row xs={1} lg={4} className="d-flex justify-content-start flex-wrap">
  //     {pageTotal > 0
  //       ? productDisplay[pageNow - 1].map((v, i) => {
  //           return (
  //             <Card
  //               className="MyCard col-3"
  //               style={{ width: '20rem' }}
  //               key={i}
  //               onClick={() => {
  //                 console.log(v.sid);
  //               }}
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 className="foodCardImg1"
  //                 src={`${FOOD_IMG}${v.photo}`}
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
  //                     <button
  //                       className="Heart_btn"
  //                       onClick={setCollect(collect + 1)}
  //                     >
  //                       <img
  //                         src={true ? PinkHeart : Heart}
  //                         style={{ width: '25px', height: '25px' }}
  //                         alt=""
  //                       />

  //                       <span>{v.collect}</span>
  //                     </button>
  //                   </div>
  //                   <div>
  //                     <h2 variant="primary" className="Card_Price">
  //                       NT${v.price}
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
  //                     <button className="Heart_btn">
  //                       <img
  //                         src={like ? PinkHeart : Heart}
  //                         style={{ width: '25px', height: '25px' }}
  //                         alt=""
  //                       />
  //                       <span>{v.collect}</span>
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

  return (
    <>
      <NavBar />
      <div className="givePadding"></div>

      <div className="container givePadding col-12 d-flex">
        <div className="col-lg-3">
          <Sidebar1 />
        </div>
        <div className="col-lg-9 " style={{ margin: 0 }}>
          <div
            style={{
              paddingTop: '60px',
              paddingLeft: '40px',
            }}
          >
            {display}
            {/* <Row
              xs={1}
              lg={4}
              className="d-flex justify-content-start flex-wrap"
            >
              {haveData
                ? productDisplay[pageNow - 1].map((v, i) => {
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
                                onClick={setCollect(collect + 1)}
                              >
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
                              <button className="Heart_btn">
                                <img
                                  src={like ? PinkHeart : Heart}
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
            </Row> */}
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
