import React, { useEffect } from 'react';
import './BuyButton.scss';
import { useHotelContext } from '../Context/HotelContext';
import { useHotelCart } from './../../../cart/utils/useCart';
function BuyButton() {
  const { addItem } = useHotelCart();
  const { roomCounts, hotelRoomPrice, hotelListData, pickDate, allStar } =
    useHotelContext();
  const items = {
    id: hotelListData.sid,
    name: hotelListData.hotel_name,
    price: hotelRoomPrice,
    checkin: pickDate.startTime,
    checkout: pickDate.endTime,
    quantity: roomCounts,
    rate: allStar,
  };
  return (
    <>
      <div className="BookingBarPriceAndButton">
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#63D2FF' }}
          onClick={() => {
            addItem(items);
            // console.log(allStar);
          }}
        >
          加入購物車
        </button>
      </div>
      <div className="noMarginRight BookingBarPriceAndButton">
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#59d8a1' }}
        >
          立即訂購
        </button>
      </div>
    </>
  );
}

export default BuyButton;
