import React from 'react';
import CartImg from '../icon/cart.svg';
import { NavLink } from 'react-router-dom';
import { useFoodCart } from '../pages/cart/utils/useFoodCart';
import { useHotelCart } from '../pages/cart/utils/useHotelCart';
import { useTicketCart } from '../pages/cart/utils/useTicketCart';
function CartIcon() {
  const foodcart = useFoodCart().cart;
  const hotelcart = useHotelCart().cart;
  const ticketcart = useTicketCart().cart;
  return (
    <NavLink className="nav-link" to="/cart">
      <img src={CartImg} alt="" />
      <div className="cart-count">
        <span>
          {foodcart.totalItems + hotelcart.totalItems + ticketcart.totalItems}
        </span>
      </div>
    </NavLink>
  );
}

export default CartIcon;
