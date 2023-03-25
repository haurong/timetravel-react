import React from 'react';
import './BuyButton.scss';
import { useTicketContext } from '../../Context/TicketContext';
import Swal from 'sweetalert2';
import { useTicketCart } from '../../../../cart/utils/useCart';
import { useHotelContext } from '../../../stays/Context/HotelContext';
function BuyButton() {
  const { addItem } = useTicketCart();
  const {
    ticketCounts,
    ticketTypePrice,
    ticketListData,
    pickDate,
    typesChooseName,
    allStar,
  } = useTicketContext();
  const ticketOrder = {
    id: ticketListData.sid,
    name: ticketListData.product_name,
    type: typesChooseName,
    quantity: ticketCounts,
    date: pickDate.startTime,
    price: ticketTypePrice,
    rate: allStar,
    img: 'http://49.159.22.9:3001/uploads/14-1.jpg',
  };

  console.log('typesChooseName',typesChooseName);

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
          onClick={() => {
            addItem(ticketOrder);
            window.location = 'http://localhost:3000/cart';
          }}
        >
          立即訂購
        </button>
      </div>
    </>
  );
}

export default BuyButton;
