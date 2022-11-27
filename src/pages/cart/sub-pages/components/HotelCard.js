import React from 'react';
import HotelCardInfo from './HotelCardInfo';
import HotelCardDetail from './HotelCardDetail';
import { useHotelCart } from '../../utils/useHotelCart';
function HotelCard() {
  const { cart, items, plusOne, minusOne, removeItem } = useHotelCart();

  return (
    <>
      {items.map((v, i) => {
        return (
          <>
            <div className="card-wrap">
              <div className="card-body">
                <HotelCardDetail name={v.name} />
              </div>
            </div>
          </>
        );
      })}
      <HotelCardInfo />
      {/* <PutInCartButton /> */}
      <div className="space"></div>
    </>
  );
}

export default HotelCard;
