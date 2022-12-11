import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { TICKET_IMG } from '../ticket-config';
import axios from 'axios';
import { useHotelContext } from '../../stays/Context/HotelContext';
import { useTicketContext } from '../../ticket/Context/TicketContext';

import Map from '../../../../icon/map.svg';
import Heart from '../../../../icon/heart_gray.svg';
import PinkHeart from '../../../../icon/heart.svg';

import './Card_List.scss';

function Card_List({ rowsAll }) {
  const {
    ticketSort,
    ticketSortData,
    collectItem,
    setCollectItem,
    setTicketSortData,
    displayData,
    setDisplayData,
  } = useTicketContext();
  console.log({ displayData });

  const [like, setLike] = useState(false);

  const [likeList, setLikeList] = useState([]);

  //  列表資料篩選
  const handleArea = (ticketSortData, ticketSort) => {
    let newTicketSortData = [...ticketSortData];

    // 處理目的地
    switch (ticketSort) {
      case 'area_Taipei':
        newTicketSortData = ticketSortData.filter((v) => {
          return v.city_name === '台北市';
        });
        break;
      case 'area_NewTaipei':
        newTicketSortData = ticketSortData.filter((v) => {
          return v.city_name === '新北市';
        });
        break;
      case 'area_Keelung':
        newTicketSortData = ticketSortData.filter((v) => {
          return v.city_name === '基隆市';
        });
        break;
      // 指所有的產品都出現
      default:
        break;
    }

    return newTicketSortData;
  };
  //  列表資料篩選
  const handleAddLike = (ticketSortData, ticketSort) => {
    let newTicketSortData = [...ticketSortData];

    // 處理目的地
    switch (ticketSort) {
      case 'area_Taipei':
        newTicketSortData = ticketSortData.filter((v) => {
          return v.city_name === '台北市';
        });
        break;
      case 'area_NewTaipei':
        newTicketSortData = ticketSortData.filter((v) => {
          return v.city_name === '新北市';
        });
        break;
      case 'area_Keelung':
        newTicketSortData = ticketSortData.filter((v) => {
          return v.city_name === '基隆市';
        });
        break;
      // 指所有的產品都出現
      default:
        break;
    }

    return newTicketSortData;
  };

  useEffect(() => {
    // console.log(ticketSort);
    let newTicketSortData = [];
    // ticketSort.area !?
    newTicketSortData = handleArea(ticketSortData, ticketSort);
    setDisplayData(newTicketSortData);
  }, [ticketSort]);
  //TODO:收藏人數按鈕樣式待定
  return (
    <Row xs={1} lg={4} className="d-flex justify-content-center flex-wrap">
      {/* {rows.map((el) => { */}
      {displayData.map((el) => {
        return (
          <Card
            className="MyCard col-3"
            style={{ width: '20rem' }}
            key={el.product_number}
          >
            <div className={{ overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                className="foodCardImg1"
                src={`${TICKET_IMG}${el.product_cover}`}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="Card_Title">{el.product_name}</Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
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
      })}
    </Row>
  );
}

export default Card_List;
