import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { HOTEL_IMG } from '../../pages/product/stays/hotel-config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import { Location } from 'react-router-dom';
import { useAllContext } from '../.././pages/AllContext/AllContext';
import { useHotelContext } from '../../pages/product/stays/Context/HotelContext';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';
import { ADD_COLLECT } from '../../config';
import './Card_List.scss';

function Card_List() {
  const {
    hotelSort,
    hotelSortData,
    displayData,
    setDisplayData,
    setPageTotal,
    perPage,
    pageNow,
    collectItem,
    setCollectItem,
    setPageNow,
    setBreadCrumbText,
  } = useHotelContext();
  const { pageSearchWord, setPageSearchWord } = useAllContext();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [likeList, setLikeList] = useState([]);

  // console.log(fakedata[0].favorite)
  const addLikeListHandler = (id) => {
    if (likeList.includes(id)) {
      return;
    } else {
      setLikeList([...likeList, id]);
      return;
    }
  };
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

    // 處理目的地
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
  //  列表資料篩選（住宿類型）
  const handleCate = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];

    // 處理目的地
    switch (hotelSort) {
      case 'cate_Hotel_1':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_sid === 1;
        });
        break;
      case 'cate_Hotel_2':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_sid === 2;
        });
        break;
      case 'cate_Hotel_3':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_sid === 3;
        });
        break;
      // 指所有的產品都出現
      case 'cate_Hotel_All':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_sid !== '';
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
  //  把資料處理成分頁
  const getFoodListData = (v, perPage) => {
    const pageList = _.chunk(v, perPage);
    // console.log('pageList:', pageList[0]);

    if (pageList.length > 0) {
      setPageTotal(pageList.length);
      //紀錄分塊後的資料
      setDisplayData(pageList);
      // setHaveData(true);
    }
  };
  // 處理過濾的函式
  const handleSearch = (hotelSortData, searchWord) => {
    let newHotelProductData = [...hotelSortData];
    if (pageSearchWord.length < 2) return newHotelProductData;
    // console.log('newFoodData', newFoodData);

    newHotelProductData = newHotelProductData.filter((item) => {
      //搜尋商品名稱、縣市地區名、分類名
      return (
        item.product_name.includes(searchWord) +
        item.city_name.includes(searchWord) +
        item.area_name.includes(searchWord)
      );
    });
    setPageNow(1);
    return newHotelProductData;
  };

  useEffect(() => {
    // console.log();
    let newHotelSortData = [];
    setPageNow(1);
    newHotelSortData = handleSearch(hotelSortData, pageSearchWord);
    newHotelSortData = handleArea(newHotelSortData, hotelSort.area);
    newHotelSortData = handleSortPrice(newHotelSortData, hotelSort.sortBy);
    newHotelSortData = handleCate(newHotelSortData, hotelSort.cate);
    newHotelSortData = handleAddLike(newHotelSortData, hotelSort.like);

    setDisplayData(newHotelSortData);
    getFoodListData(newHotelSortData, perPage);
  }, [
    pageSearchWord,
    hotelSort.area,
    hotelSort.like,
    hotelSort.cate,
    hotelSort.sortBy,
  ]);
  //TODO:收藏人數按鈕樣式待定
  return (
    <Row xs={1} lg={4} className="d-flex justify-content-flexstart flex-wrap">
      {displayData[pageNow - 1]
        ? displayData[pageNow - 1].map((el, i) => {
            return (
              <Card
                className="MyCard col-3"
                style={{ width: '20rem' }}
                key={el.product_number}
              >
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    className="foodCardImg1"
                    src={`${HOTEL_IMG}/${el.picture}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      let sid = Number(el.product_number.split('A')[1]);
                      // window.location.href = `stays/detail/${sid}`;
                      navigate(`detail/${sid}`);
                    }}
                  />
                </div>
                {/* <button
                  data-product-number={el.product_number}
                  className="Heart_Btn"
                  onClick={() => {
                    addLikeListHandler(el.product_number);
                    toggleLike1();
                  }}
                >
                  <img
                    src={like ? PinkHeart : Heart}
                    className="Card_Heart"
                    alt=""
                  />
                </button> */}
                <Card.Body>
                  <Card.Title
                    className="Card_Title"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      let sid = Number(el.product_number.split('A')[1]);
                      // window.location.href = `stays/detail/${sid}`;

                      navigate(`detail/${sid}`);
                    }}
                  >
                    {el.product_name}
                  </Card.Title>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span className="Card_Score">
                      {el.city_name} | {el.area_name}
                    </span>

                    <div className="d-flex PriceAndCollect">
                      <div>
                        <button
                          className="Heart_btn"
                          // onClick={async function handleLike() {
                          //   const member_sid = JSON.parse(
                          //     localStorage.getItem('auth')
                          //   ).sid;
                          //   const product_sid = el.sid;
                          //   const { data } = await axios.post(ADD_COLLECT, {
                          //     member_sid: member_sid,
                          //     product_sid: product_sid,
                          //   });
                          //   //選告newItem(新的物件)
                          //   const newItem = {
                          //     ...el,
                          //     product_sid: el.product_sid ? null : product_sid,
                          //   };
                          //   //深拷貝要顯示的資料
                          //   const newPagesArray = JSON.parse(
                          //     JSON.stringify(displayData)
                          //   );

                          //   console.log(newPagesArray[pageNow - 1][i], newItem);
                          //   //要知道現在使用者點到的是第幾個，用i當作索引值
                          //   newPagesArray[pageNow - 1][i] = newItem;
                          //   //再設定回拷貝出來的資料
                          //   setDisplayData(newPagesArray);

                          //   // console.log(like);
                          //   console.log({ data });

                          // if (v.product_sid.length.indexOf === -1) {
                          //   const member_sid = JSON.parse(
                          //     localStorage.getItem('auth')
                          //   ).sid;
                          //   const product_sid = v.sid;

                          //   const {data}=await axios.delete(DEL_COLLECT,{
                          //     member_sid:member_sid,
                          //   })
                          // }
                          // }}
                          onClick={() => {
                            const member_sid = JSON.parse(
                              localStorage.getItem('auth')
                            ).sid;
                            const product_sid = el.sid;
                            const collect_product_name = el.product_name;
                            if (collectItem.includes(el.product_name)) {
                              const res = axios.post(
                                'http://localhost:3001/productAll/DelCollect',
                                {
                                  member_sid: member_sid,
                                  product_sid: product_sid,
                                  collect_product_name: collect_product_name,
                                }
                              );
                              // console.log(res);
                              setCollectItem(
                                collectItem.filter((v) => {
                                  return v !== el.product_name;
                                })
                              );
                            } else {
                              setCollectItem([...collectItem, el.product_name]);
                              const res = axios.post(ADD_COLLECT, {
                                member_sid: member_sid,
                                product_sid: product_sid,
                                collect_product_name: collect_product_name,
                              });
                            }
                          }}
                        >
                          <img
                            src={
                              collectItem.includes(el.product_name)
                                ? PinkHeart
                                : Heart
                            }
                            style={{ width: '25px', height: '25px' }}
                            alt=""
                          />
                          <span>
                            {/* {el.collect} */}
                            {collectItem.includes(el.product_name)
                              ? `${Number(el.collect) + 1}`
                              : `${el.collect}`}
                          </span>
                        </button>
                      </div>
                      <div>
                        <h2 variant="primary" className="Card_Price">
                          NT${el.room_price}
                        </h2>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        : ' '}
    </Row>
  );
}

export default Card_List;
