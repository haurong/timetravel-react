import React from 'react';
import CartImg from '../icon/cart.svg';
import { NavLink } from 'react-router-dom';
import {
  useHotelCart,
  useTicketCart,
  useFoodCart,
} from '../pages/cart/utils/useCart';
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
