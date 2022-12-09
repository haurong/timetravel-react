import { React, useState } from 'react';
import './BuyButton.scss';
import Swal from 'sweetalert2';
import { useTicketCart } from '../../../../cart/utils/useCart';
function BuyButton() {
  const { addItem } = useTicketCart();
  const [cartData, setcartData] = useState('');

  const ticketOrder = {
    id: 14,
    name: '兒童樂園',
    type: '成人票',
    quantity: 1,
    date: '2022-11-30',
    price: 80,
  };

  return (
    <>
      <div
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: '已加入購物車！',
            confirmButtonText: '確認',
            confirmButtonColor: '#59d8a1',
          });
          addItem(ticketOrder);
        }}
        className="BookingBarPriceAndButton"
      >
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#63D2FF' }}
        >
          加入購物車
        </button>
      </div>
      <div
        className="noMarginRight BookingBarPriceAndButton"
        onClick={() => {
          addItem(ticketOrder);
        }}
      >
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
