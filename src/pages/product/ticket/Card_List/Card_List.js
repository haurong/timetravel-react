import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { TICKET_IMG } from '../ticket-config';

import Map from '../../../../icon/map.svg';
import Heart from '../../../../icon/heart_gray.svg';
import PinkHeart from '../../../../icon/heart.svg';

import './Card_List.scss';

function Card_List({ rows }) {
  console.log({ rows });
  const [like, setLike] = useState(false);

  const [likeList, setLikeList] = useState([]);
  const toggleLike1 = () => setLike(!like);
  // console.log(fakedata[0].favorite)
  const addLikeListHandler = (id) => {
    if (likeList.includes(id)) {
      return;
    } else {
      setLikeList([...likeList, id]);
      return;
    }
  };
  //TODO:收藏人數按鈕樣式待定
  return (
    <Row xs={1} lg={4} className="d-flex justify-content-center flex-wrap">
      {rows.map((el) => {
        return (
          <Card
            className="MyCard col-3"
            style={{ width: '20rem' }}
            key={el.product_number}
          >
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={`${TICKET_IMG}${el.product_cover}`}
            />
            <button
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
            </button>
            <Card.Body>
              <Card.Title className="Card_Title">{el.product_name}</Card.Title>
              <Card.Text className="Card_Text">
                <Card.Img src={Map} className="Map_icon" />
                <span class="Card_Score">
                  {el.city_name} | {el.area_name}
                </span>

                <div className="d-flex PriceAndCollect">
                  <div>
                    <button className="Heart_btn">
                      <img
                        src={PinkHeart}
                        style={{ width: '25px', height: '25px' }}
                        alt=""
                      />
                      <span>999</span>
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
