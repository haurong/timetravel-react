import React from 'react';
import PriceDetailCard from './PriceDetailCard';
import ProgressButton from './ProgressButton';
import { useHotelCart, useFoodCart, useTicketCart } from './../utils/useCart';
import './../styles/PriceDetail.scss';
function PriceDetail({ prev, next, step, maxSteps }) {
  const hotel = useHotelCart();
  const food = useFoodCart();
  const ticket = useTicketCart();
  // console.log(hotel);
  return (
    <div className="price-detail-wrap mb-5">
      <PriceDetailCard
        title={'住宿'}
        items={hotel.items}
        total={hotel.cart.hotelTotal}
      />
      <PriceDetailCard
        title={'美食'}
        items={food.items}
        total={food.cart.cartTotal}
      />
      <PriceDetailCard
        title={'票券'}
        items={ticket.items}
        total={ticket.cart.cartTotal}
      />
      <div className="d-flex justify-content-evenly">
        <h1 className="total">總計</h1>
        <h1 className="total">
          {hotel.cart.hotelTotal + food.cart.cartTotal + ticket.cart.cartTotal}
        </h1>
      </div>
      <div>
        <ProgressButton
          prev={prev}
          next={next}
          step={step}
          maxSteps={maxSteps}
        />
      </div>
    </div>
  );
}

export default PriceDetail;
