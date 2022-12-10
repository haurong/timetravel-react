import React from 'react';
import HotelCardInfo from './HotelCardInfo';
import HotelCardDetail from './HotelCardDetail';
import { useHotelCart } from '../../utils/useCart';
function HotelCard({
  hotelRepresent,
  setHotelRepresent,
  hotelMobile,
  setHotelMobile,
}) {
  const { items } = useHotelCart();
  return (
    <>
      {items.map((v, i) => {
        return (
          <div className="card-wrap" key={v.name}>
            <div className="card-body">
              <HotelCardDetail
                name={v.name}
                id={v.id}
                type={v.roomtype}
                quantity={v.quantity}
                rate={v.rate}
                checkin={v.checkin}
                checkout={v.checkout}
                img={v.img}
              />
            </div>
          </div>
        );
      })}
      <HotelCardInfo
        hotelRepresent={hotelRepresent}
        setHotelRepresent={setHotelRepresent}
        hotelMobile={hotelMobile}
        setHotelMobile={setHotelMobile}
      />
      {/* <PutInCartButton /> */}
      <div className="space"></div>
    </>
  );
}

export default HotelCard;
