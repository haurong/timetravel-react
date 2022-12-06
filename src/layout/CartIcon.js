import React, { useContext } from 'react';
import CartImg from '../icon/cart.svg';
import { NavLink } from 'react-router-dom';
import AuthContext from '../pages/member/context/AuthContext';
import Swal from 'sweetalert2';
import {
  useHotelCart,
  useTicketCart,
  useFoodCart,
} from '../pages/cart/utils/useCart';
function CartIcon() {
  const { myAuth } = useContext(AuthContext);
  const foodcart = useFoodCart().cart;
  const hotelcart = useHotelCart().cart;
  const ticketcart = useTicketCart().cart;
  // console.log(myAuth);
  return (
    <>
      {myAuth.authorised ? (
        <NavLink className="nav-link" to="/cart">
          <img src={CartImg} alt="" />
          <div className="cart-count">
            <span>
              {foodcart.totalItems +
                hotelcart.totalItems +
                ticketcart.totalItems}
            </span>
          </div>
        </NavLink>
      ) : (
        <div
          className="nav-link"
          role="button"
          onClick={() => {
            Swal.fire({
              icon: 'warning',
              title: '請先登入',
            });
          }}
        >
          <img src={CartImg} alt="" />
          <div className="cart-count">
            <span>
              {foodcart.totalItems +
                hotelcart.totalItems +
                ticketcart.totalItems}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default CartIcon;
