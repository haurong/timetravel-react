import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Star from '../../icon/star.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import { FOOD_ITEM } from '../../config.js';

import './Card.scss';

function Card1() {
 
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);


  return (
    <>
      <Card className="Card" style={{ width: '20rem' }}>
        <Card.Img variant="top" className="Food_Card_Img4" />

        <button className="Heart_Btn" onClick={toggleLike}>
          <img src={like ? PinkHeart : Heart} className="Card_Heart" alt="" />
        </button>

        <Card.Body>
          <Card.Title className="Card_Title">時間之旅 | 現金抵用券</Card.Title>
          <Card.Text className="Card_Text">
            <Card.Img src={Star} className="Star_icon" />
            <span class="Card_Score">4.5/5</span>
          </Card.Text>
          <h2 variant="primary" className="Card_Price">
            NT100
          </h2>
        </Card.Body>
      </Card>
    </>
  );
}

export default Card1;
