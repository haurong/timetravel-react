import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';

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

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el) => {
        return (
          <Card
            className="Card col-3"
            style={{ width: '20rem' }}
            key={el.product_number}
          >
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={`${FOOD_IMG}${el.product_photo}`}
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
              </Card.Text>
              <h2 variant="primary" className="Card_Price">
                NT$ {el.p_selling_price}
              </h2>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  );
}

export default Card_List;
