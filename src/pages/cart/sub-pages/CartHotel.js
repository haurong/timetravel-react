import React from 'react';
import CardHeader from './components/CardHeader';
import HotelCard from './components/HotelCard';
import PriceDetail from './PriceDetail';
function CartHotel() {
  return (
    <div className="container">
      <div className="row">
        <CardHeader text={'訂房資訊'} />
        <div className="d-flex justify-content-between">
          <div className="col-lg-7">
            <HotelCard />
          </div>
          <div className="col-lg-4">
            <PriceDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHotel;
