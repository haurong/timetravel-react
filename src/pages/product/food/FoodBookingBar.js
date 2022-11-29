import React, { useEffect, useState } from 'react';
import Minus_icon from '../../../icon/minus.svg';
import Add_icon from '../../../icon/add.svg';
import './FoodBookingBar.scss';
import { useFoodContext } from './FoodContext/FoodContext';
//import BuyButton from '../BuyButton/BuyButton';

function FoodBookingBar({foodData}) {
  console.log({foodData})
  const { slideOut, count, setCount, totalPrice, setTotalPrice } =
    useFoodContext();
  // const [count, setCount] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(foodData.p_selling_price);

  //console.log(newTotalPrice);
  useEffect(() => {}, [slideOut, totalPrice]);
  return (
    <div className="BookingBar d-flex">
      <div className={slideOut ? 'ShowBookingBar' : ''}>
        <div className="container BookingBarContent d-flex align-items-center ">
          <h2 style={{ color: '#4D4D4D' }}>{foodData.product_name}</h2>
          <div className="d-flex">
            <div className="quantity d-flex align-items-center">
              <button
                className="countBtn"
                onClick={() => {
                  const newMinusCount = count - 1;
                  if (count === 1) {
                    return count;
                  } else {
                    setCount(newMinusCount);
                  }
                  const newMinusTotalPrice =
                    totalPrice - foodData.p_selling_price;
                  if (totalPrice === foodData.p_selling_price) {
                    return totalPrice;
                  } else {
                    setTotalPrice(newMinusTotalPrice);
                  }
                }}
              >
                <img src={Minus_icon} alt="" className="Minus_icon" />
              </button>
              <p>{count}</p>
              <button
                className="countBtn"
                onClick={() => {
                  const newAddCount = count + 1;
                  setCount(newAddCount);
                  const newAddTotalPrice =
                    foodData.p_selling_price * newAddCount;
                  setTotalPrice(newAddTotalPrice);
                }}
              >
                <img src={Add_icon} alt="" className="Add_icon" />
              </button>
            </div>
            <div className="d-flex  align-items-center">
              <h4
                style={{
                  color: '#59d8a1',
                  fontSize: '22px',
                  marginRight: '30px',
                }}
              >
                TWD$
                {foodData.p_selling_price
                  ? totalPrice
                  : foodData.p_selling_price}
              </h4>
              <button type="button" className="btn add_cart">
                加入購物車
              </button>
              <button type="button" className="btn buy_now">
                立即購買
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodBookingBar;
