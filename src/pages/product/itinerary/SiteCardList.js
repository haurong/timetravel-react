import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Map from '../../../icon/map.svg';
import { Link, useNavigate } from 'react-router-dom';
import { SITE_IMG } from './site-config';
import { useHotelContext } from '../stays/Context/HotelContext';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useFoodContext } from '../food/FoodContext/FoodContext.js';
import axios from 'axios';
import Heart from '../../../icon/heart_gray.svg';
import PinkHeart from '../../../icon/heart.svg';

function SiteCardList() {
  const navigate = useNavigate();
  const { collect, setCollect } = useFoodContext();

  const {
    hotelSort,
    hotelSortData,
    displayData,
    setDisplayData,
    setPageTotal,
    perPage,
    pageNow,
    setPageNow,
  } = useHotelContext();
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
      case 'cate_Site_1':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 1;
        });
        break;
      case 'cate_Site_2':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 2;
        });
        break;
      case 'cate_Site_3':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 3;
        });
        break;
      case 'cate_Site_4':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 4;
        });
        break;
      case 'cate_Site_5':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 5;
        });
        break;
      // 指所有的產品都出現
      case 'cate_Site_All':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid !== '';
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

  useEffect(() => {
    // console.log();
    let newHotelSortData = [];
    setPageNow(1);
    newHotelSortData = handleSortPrice(hotelSortData, hotelSort.sortBy);
    newHotelSortData = handleArea(newHotelSortData, hotelSort.area);
    newHotelSortData = handleCate(newHotelSortData, hotelSort.cate);
    newHotelSortData = handleAddLike(newHotelSortData, hotelSort.like);

    setDisplayData(newHotelSortData);
    getFoodListData(newHotelSortData, perPage);
  }, [hotelSort.area, hotelSort.like, hotelSort.cate, hotelSort.sortBy]);
  return (
    <Row
      xs={1}
      md={2}
      lg={4}
      className="d-flex justify-content-flexstart flex-wrap"
    >
      {displayData[pageNow - 1]
        ? displayData[pageNow - 1].map((el, i) => {
            return (
              <Card className="MyCard col-3" style={{ width: '20rem' }} key={i}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img
                    // className="card-img"
                    className="foodCardImg1"
                    variant="top"
                    src={el.img1 ? SITE_IMG + '/' + el.img1.split(',')[0] : ''}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      let sid = Number(el.sid);
                      // window.location.href = `stays/detail/${sid}`;
                      navigate(`${sid}`);
                    }}
                  />
                </div>
                <Card.Body>
                  <Link to={'./' + el.sid}>
                    <Card.Title className="Card_Title">{el.name}</Card.Title>
                  </Link>
                  <Card.Text className="Card_Text">
                    <Card.Img src={Map} className="Map_icon" />
                    <span className="Card_Score">
                      {el.city_name} | {el.area_name}
                    </span>
                  </Card.Text>
                  <div className="d-flex PriceAndCollect">
                    <div>
                      <button
                        className="Heart_btn"
                        onClick={() => {
                          const member_sid = JSON.parse(
                            localStorage.getItem('auth')
                          ).sid;
                          const product_sid = el.sid;
                          const collect_product_name = el.name;

                          //後端先發送移除收藏
                          if (collect.includes(el.name)) {
                            axios.post(
                              'http://localhost:3001/productAll/DelCollect',
                              {
                                member_sid: member_sid,
                                product_sid: product_sid,
                                collect_product_name: collect_product_name,
                              }
                            );
                            console.log('移除收藏');
                            //前端顯示空心
                            setCollect(
                              collect.filter((el2) => {
                                return el2 !== el.name;
                              })
                            );
                          } else {
                            //前端發送新增收藏
                            axios.post(
                              'http://localhost:3001/productAll/AddCollect',
                              {
                                member_sid: member_sid,
                                product_sid: product_sid,
                                collect_product_name: collect_product_name,
                              }
                            );
                            console.log('新增收藏');
                            //解構出原收藏陣列,把新的收藏塞回去
                            setCollect([...collect, el.name]);
                          }
                        }}
                      >
                        <img
                          src={collect.includes(el.name) ? PinkHeart : Heart}
                          style={{ width: '25px', height: '25px' }}
                          alt=""
                        />
                        <span>
                          {collect.includes(el.name)
                            ? Number(el.collect) + 1
                            : el.collect}
                        </span>
                      </button>
                    </div>
                    <div>
                      <h2 variant="primary" className="Card_Price">
                        {/* NT${v.p_selling_price} */}
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
}

export default SiteCardList;
