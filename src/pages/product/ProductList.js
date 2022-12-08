import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import _, { set } from 'lodash';
import { ADD_COLLECT } from '../../config.js';

// import SearchBar from '../product/food/SearchBar';
import { PRODUCT_LIST } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { MY_HOST } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import Sidebar1 from '../../Component/Sidebar1/Sidebar1';
//import { useFoodContext } from '../product/food/FoodContext/FoodContext';
import { useAllContext } from '../AllContext/AllContext';
import { useHotelContext } from '../product/stays/Context/HotelContext';
import HotelListSortSelector from './stays/HotelListSortSelector/HotelListSortSelector';

function ProductList() {
  const { searchWord, setSearchWord } = useAllContext();
  // 紀錄資料庫取得原始資料
  const [productData, setProductData] = useState([]);
  //呈現資料用
  const [productDisplay, setProductDisplay] = useState([]);

  const location = useLocation();
  //篩選排序
  const { hotelSort } = useHotelContext();
  //看是否取得資料
  // const [haveData, setHaveData] = useState(false);
  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);
  //每頁多少筆資料
  const [perPage, setPerPage] = useState(12);
  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  async function getData() {
    const response = await axios.get(PRODUCT_LIST);
    setProductData(response.data);
    const pageList = _.chunk(response.data, perPage);
    setProductDisplay(pageList);
    setPageTotal(pageList.length);
    // setProductDisplay(response.data);

    console.log(response.data);
  }
  //componentdidmount先拿到伺服器來的原始資料
  useEffect(() => {
    console.log('觸發getData');
    getData();
  }, []);

  // //處理分頁資料
  function getAllListData(v, perPage) {
    const pageList = _.chunk(v, perPage);
    console.log('pageList:', pageList[0]);

    if (pageList.length > 0) {
      setPageTotal(pageList.length);
      //紀錄分塊後的資料
      setProductDisplay(pageList);
      // setHaveData(true);
    }
  }

  //  處理排序（價格、收藏數）
  const handleSortPrice = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];

    // 處理目的地
    switch (hotelSort) {
      case 'sortByPriceDESC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return b.room_price - a.room_price;
        });
        break;
      case 'sortByPriceASC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return a.room_price - b.room_price;
        });
        break;
      case 'sortByCollectDESC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return b.collect - a.collect;
        });
        break;
      case 'sortByCollectASC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return a.collect - b.collect;
        });
        break;
      default:
        break;
    }

    return newHotelSortData;
  };
  //  列表資料篩選（地區）
  const handleArea = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];
    // console.log('newHotelSortData', newHotelSortData);

    //處理目的地;
    switch (hotelSort) {
      case 'area_Taipei':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name === '台北市';
        });
        break;
      case 'area_NewTaipei':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name === '新北市';
        });
        break;
      case 'area_Keelung':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name === '基隆市';
        });
        break;
      // 指所有的產品都出現
      case 'area_All':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name !== '';
        });
        break;
      default:
        break;
    }
    return newHotelSortData;
  };
  //  列表資料篩選（收藏數）
  const handleAddLike = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];
    // console.log(newHotelSortData);

    // 處理目的地
    switch (hotelSort) {
      case 'like<100':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 100;
        });
        break;
      case 'like200':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 200 && v.collect > 100;
        });
        break;
      case 'like300':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 300 && v.collect > 200;
        });
        break;
      case 'like400':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 400 && v.collect > 300;
        });
        break;
      case 'like500':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 500 && v.collect > 400;
        });
        break;
      case 'like>500':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect >= 500;
        });
        break;
      case 'likeAll':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect < 1000;
        });
        break;
      // 指所有的產品都出現
      default:
        break;
    }

    return newHotelSortData;
  };
  //監聽productData，若有改變就re-render
  // useEffect(() => {
  //   //呼叫getAllListData把要顯示的資料跟分頁丟進去
  //   console.log('觸發productData');
  //   getAllListData(productDisplay, perPage);
  // }, [productData]);

  // //處理過濾的函式
  const handleSearch = (productData, searchWord) => {
    //解構原始資料出來做操作
    let newAllData = [...productData];
    if (searchWord.length < 2) return newAllData;

    newAllData = newAllData.filter((item) => {
      //搜尋商品名稱、縣市地區名
      return (
        item.city_name.includes(searchWord) +
        item.product_name.includes(searchWord) +
        item.area_name.includes(searchWord)
      );
    });
    // console.log('newAllData', newAllData);
    //更新當前頁數
    setPageNow(1);
    return newAllData;
  };

  // //監聽searchWord，使用者輸入searchWord後改變欲顯示的資料
  useEffect(() => {
    // if (searchWord.length < 2) return;
    console.log('觸發篩選與搜尋');

    let newAllData = [];
    setPageNow(1);

    newAllData = handleSearch(productData, searchWord);
    newAllData = handleSortPrice(newAllData, hotelSort.sortBy);
    newAllData = handleArea(newAllData, hotelSort.area);
    newAllData = handleAddLike(newAllData, hotelSort.like);
    // console.log(newAllData);
    setProductDisplay(newAllData);
    //呼叫getAllListData搜尋完的資料再去做一次分頁處理
    getAllListData(newAllData, perPage);
  }, [searchWord, hotelSort.area, hotelSort.like, hotelSort.sortBy]);

  const paginationBar = (
    <ul className="pagination d-flex">
      <li className="page-item ">
        <div>
          <button
            className="page-link  prevPage"
            aria-label="Previous"
            onClick={() => {
              if (pageNow > 1) {
                setPageNow(pageNow - 1);
              }
            }}
          >
            <MdOutlineChevronLeft />
          </button>
        </div>
      </li>
      {Array(pageTotal)
        .fill(1)
        .map((v, i) => {
          const classNames = ['page-item'];
          const p = i + 1;
          {
            /* console.log({ pageTotal, pageNow, p }); */
          }
          {
            /* if (p < 1 || p > pageTotal) return null;
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
          ); */
          }
          if (pageNow >= 4 && pageNow <= pageTotal - 3) {
            if (pageNow > p + 3 || pageNow < p - 3) return null;
          } else if (pageNow === 3) {
            if (pageNow > p + 2 || pageNow < p - 4) return null;
          } else if (pageNow === 2) {
            if (pageNow > p + 1 || pageNow < p - 5) return null;
          } else if (pageNow === 1) {
            if (pageNow > p || pageNow < p - 6) return null;
          } else if (pageNow === pageTotal - 2) {
            if (pageNow > p + 4 || pageNow < p - 2) return null;
          } else if (pageNow === pageTotal - 1) {
            if (pageNow > p + 5 || pageNow < p - 1) return null;
          } else if (pageNow === pageTotal) {
            if (pageNow > p + 6 || pageNow < p) return null;
          }
          if (p === pageNow) classNames.push('active');
          return (
            <li className={classNames.join(' ')} key={p}>
              <div>
                <button
                  className="page-link pagi"
                  onClick={() => {
                    setPageNow(p);
                  }}
                >
                  {p}
                </button>
              </div>
            </li>
          );
        })}
      {/* <li className="page-item">
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
      </li> */}
      <li className="page-item">
        {/* <Link
          className="page-link nextPage"
          aria-label="Next"
          onClick={() => {
            setPageNow(1);
          }}
        >
          <MdOutlineChevronRight />
        </Link> */}
        <div>
          <button
            className="page-link nextPage"
            onClick={() => {
              if (pageNow < pageTotal) {
                setPageNow(pageNow + 1);
              }
            }}
          >
            <MdOutlineChevronRight />
          </button>
        </div>
      </li>
    </ul>
  );

  const display = (
    <Row xs={1} lg={4} className="d-flex justify-content-start flex-wrap">
      {/* {haveData && productDisplay[pageNow - 1].length > 0
        ? productDisplay[pageNow - 1].map((v, i) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={i}
                onClick={() => {
                  // console.log(v.sid);
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    className="foodCardImg1"
                    src={MY_HOST + `/uploads` + v.photo}
                  />
                </div>
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
                            JSON.stringify(productDisplay)
                          );

                          console.log(newPagesArray[pageNow - 1][i], newItem);
                          //要知道現在使用者點到的是第幾個，用i當作索引值
                          newPagesArray[pageNow - 1][i] = newItem;
                          //再設定回拷貝出來的資料
                          setProductDisplay(newPagesArray);

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
                        {v.price !== 0 ? `NT${v.price}` : null}
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
                  src={`${MY_HOST}/uploads/${v.photo}`}
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
                        NT${v.price}
                      </h2>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })} */}
      {productDisplay[pageNow - 1]
        ? productDisplay[pageNow - 1].map((v, i) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={i}
                onClick={() => {
                  // console.log(v.sid);
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    className="foodCardImg1"
                    src={MY_HOST + `/uploads/` + v.photo}
                  />
                </div>
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
                            JSON.stringify(productDisplay)
                          );

                          console.log(newPagesArray[pageNow - 1][i], newItem);
                          //要知道現在使用者點到的是第幾個，用i當作索引值
                          newPagesArray[pageNow - 1][i] = newItem;
                          //再設定回拷貝出來的資料
                          setProductDisplay(newPagesArray);

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
                        {v.price !== 0 ? `NT${v.price}` : null}
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
  return (
    <>
      <NavBar />
      <div className="givePadding"></div>

      <div className="container givePadding col-12 d-flex">
        <div className="col-lg-3">
          <Sidebar1 />
        </div>
        <div className="col-lg-9 " style={{ margin: 0 }}>
          <div className="d-flex hotelSort">
            <HotelListSortSelector />
          </div>
          <div
            style={{
              paddingTop: '60px',
              paddingLeft: '40px',
            }}
          >
            {display}
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
