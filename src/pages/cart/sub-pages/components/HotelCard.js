import React from 'react';
import HotelCardInfo from './HotelCardInfo';
import HotelCardDetail from './HotelCardDetail';
import PutInCartButton from '../../PutInCartButton';
function HotelCard() {
  return (
    <>
      <div className="card-wrap">
        <div className="card-body">
          <HotelCardDetail />
        </div>
      </div>
      <HotelCardInfo />
      {/* <PutInCartButton /> */}
      <div className="space"></div>
    </>
  );
}

export default HotelCard;
