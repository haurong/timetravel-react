import React from 'react';
import HotelCardInfo from './HotelCardInfo';
import HotelCardDetail from './HotelCardDetail';
import { useHotelCart } from '../../utils/useCart';
function HotelCard() {
  const { items } = useHotelCart();

  return (
    <>
      {items.map((v, i) => {
        return (
          <>
            <div className="card-wrap">
              <div className="card-body">
                <HotelCardDetail name={v.name} id={v.id} type={v.roomtype} />
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
