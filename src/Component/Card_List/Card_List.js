import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';

import './Card_List.scss';

function Card_List({ rows }) {
  //console.log({ rows });
  const [like1, setLike1] = useState(false);
  const toggleLike1 = () => setLike1(!like1);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el, i) => {
        return (
          <Card className="Card col-3" style={{ width: '20rem' }} key={i}>
            <Card.Img
              variant="top"
              className="foodCardImg1"
              src={`${FOOD_IMG}${el.product_photo}`}
            />
            <button className="Heart_Btn" onClick={toggleLike1}>
              <img
                src={like1 ? PinkHeart : Heart}
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
