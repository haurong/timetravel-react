import React from 'react';
import CardHeader from './components/CardHeader';
import HotelCard from './components/HotelCard';
import PriceDetail from './PriceDetail';
import { useHotelCart } from '../utils/useCart';
function CartHotel({
  prev,
  next,
  step,
  maxSteps,
  hotelRepresent,
  setHotelRepresent,
  hotelMobile,
  setHotelMobile,
}) {
  const { items } = useHotelCart();
  if (items.length !== 0) {
    return (
      <div className="container">
        <div className="row">
          <CardHeader text={'訂房資訊'} />
          <div className="d-flex justify-content-between">
            <div className="col-lg-7">
              <HotelCard
                hotelRepresent={hotelRepresent}
                setHotelRepresent={setHotelRepresent}
                hotelMobile={hotelMobile}
                setHotelMobile={setHotelMobile}
              />
            </div>
            <div className="col-lg-4">
              <PriceDetail
                prev={prev}
                next={next}
                step={step}
                maxSteps={maxSteps}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-lg-7">
              <CardHeader text={'訂房資訊'} />
              <div className="empty-cart">
                <h1>您的住宿購物車是空的喔！</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <PriceDetail
                prev={prev}
                next={next}
                step={step}
                maxSteps={maxSteps}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartHotel;
