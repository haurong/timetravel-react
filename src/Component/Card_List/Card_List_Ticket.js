import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { TICKET_IMG } from '../../pages/product/ticket/ticket-config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import { Location } from 'react-router-dom';
import { useAllContext } from '../.././pages/AllContext/AllContext';
import { useHotelContext } from '../../pages/product/stays/Context/HotelContext';
import { useTicketContext } from '../../pages/product/ticket/Context/TicketContext';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';
import './Card_List.scss';

function Card_List() {
  const { pageSearchWord, setPageSearchWord } = useAllContext();
  const {
    ticketSortData,
    displayData,
    setDisplayData,
    setPageTotal,
    perPage,
    pageNow,
    setPageNow,
    collectItem,
    setCollectItem,
  } = useTicketContext();

  const { hotelSort } = useHotelContext();

  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [likeList, setLikeList] = useState([]);

  const handleSearch = (ticketSortData, searchWord) => {
    let newTicketProductData = [...ticketSortData];
    if (searchWord.length < 2) return newTicketProductData;
    // console.log('newFoodData', newFoodData);

    newTicketProductData = newTicketProductData.filter((item) => {
      //搜尋商品名稱、縣市地區名、分類名
      return (
        item.product_name.includes(searchWord) +
        item.city_name.includes(searchWord) +
        item.area_name.includes(searchWord)
      );
    });
    setPageNow(1);
    return newTicketProductData;
  };

  //  處理排序（價格、收藏數）
  const handleSortPrice = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];

    // 處理目的地
    switch (hotelSort) {
      case 'sortByPriceDESC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return b.product_price - a.product_price;
        });
        break;
      case 'sortByPriceASC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return a.product_price - b.product_price;
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
      case 'cate_Ticket_1':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_id === 1;
        });
        break;
      case 'cate_Ticket_2':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_id === 2;
        });
        break;
      case 'cate_Ticket_3':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_id === 3;
        });
        break;
      case 'cate_Ticket_4':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_id === 4;
        });
        break;
      case 'cate_Ticket_5':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_id === 5;
        });
        break;
      // 指所有的產品都出現
      case 'cate_Ticket_All':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.categories_id !== '';
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
    newHotelSortData = handleSearch(ticketSortData, pageSearchWord);
    newHotelSortData = handleSortPrice(newHotelSortData, hotelSort.sortBy);
    newHotelSortData = handleArea(newHotelSortData, hotelSort.area);
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
        ? displayData[pageNow - 1].map((el) => {
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
                    src={`${TICKET_IMG}/${el.product_cover}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      // let sid = Number(el.product_number.split('A')[1]);
                      let sid = Number(el.sid);
                      console.log('see the sid:', sid);
                      // window.location.href = `stays/detail/${sid}`;
                      navigate(`detail/${sid}`);
                    }}
                  />
                </div>

                <Card.Body>
                  <Card.Title
                    className="Card_Title"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      // let sid = Number(el.product_number.split('A')[1]);
                      let sid = Number(el.sid);
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
                          onClick={() => {
                            const member_sid = JSON.parse(
                              localStorage.getItem('auth')
                            ).sid;
                            const product_sid = el.sid;
                            const collect_product_name = el.product_name;

                            //後端先發送移除收藏
                            if (collectItem.includes(el.product_name)) {
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
                              setCollectItem(
                                collectItem.filter((el) => {
                                  return el !== el.product_name;
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
                              setCollectItem([...collectItem, el.product_name]);
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
                            {collectItem.includes(el.product_name)
                              ? Number(el.collect) + 1
                              : el.collect}
                          </span>
                        </button>
                      </div>
                      <div>
                        <h2 variant="primary" className="Card_Price">
                          NT$ {el.product_price}
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
