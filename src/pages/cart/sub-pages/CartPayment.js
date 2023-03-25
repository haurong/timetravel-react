import PaymentCard from './components/PaymentCard';
import ProgressButton from './ProgressButton';
import { useFoodCart, useHotelCart, useTicketCart } from '../utils/useCart';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MakeOrder, LINE_PAY_API } from '../../../config';
function CartPayment({
  prev,
  next,
  step,
  maxSteps,
  hotelRepresent,
  hotelMobile,
  paymentRepresent,
  setPaymentRepresent,
  paymentMobile,
  setPaymentMobile,
  paymentEmail,
  setPaymentEmail,
  paymentId,
  setPaymentId,
}) {
  const [payMethod, setPayMethod] = useState('');
  const [ordersStatusSid, setOrdersStatusSid] = useState(1);
  //取的存在localstorga的會員sid
  const member = JSON.parse(localStorage.getItem('auth'));
  // console.log(member.sid);
  //用毫秒當作訂單的uuid
  const uuid = +new Date();

  //計算訂單的總價格
  const totalPrice =
    useHotelCart().cart.cartTotal +
    useFoodCart().cart.cartTotal +
    useTicketCart().cart.cartTotal;

  //抓出localstorage的資料
  const foodItems = useFoodCart().items;
  const hotelItems = useHotelCart().items;
  const ticketItems = useTicketCart().items;

  const newFood = foodItems.map((v, i) => {
    return { ...v, uuid };
  });
  const newHotel = hotelItems.map((v, i) => {
    return { ...v, uuid, repName: hotelRepresent, repMobile: hotelMobile };
  });
  const newTicket = ticketItems.map((v, i) => {
    return { ...v, uuid };
  });
  // setOrderId(order.uuid);
  const formData = (statusSid) => {
    return {
      order: {
        member_sid: member.sid,
        uuid: uuid,
        orders_total_price: totalPrice,
        orders_status_sid: statusSid,
      },
      food: newFood,
      hotel: newHotel,
      ticket: newTicket,
    };
  };
  const mySubmit2 = async (statusSid) => {
    Swal.fire({
      icon: 'success',
      title: '已成功建立訂單，即將跳往結帳頁面',
      confirmButtonText: '確認',
      confirmButtonColor: '#59d8a1',
    });
    localStorage.removeItem('foodcart');
    localStorage.removeItem('ticketcart');
    localStorage.removeItem('hotelcart');
    const { data } = await axios.post(MakeOrder, formData(statusSid));
    if (data.success && statusSid === 1) {
      window.location = 'http://localhost:3000/cart/success';
    } else if (data.success && statusSid === 2) {
      localStorage.removeItem('foodcart');
      localStorage.removeItem('ticketcart');
      localStorage.removeItem('hotelcart');
      window.location = 'http://localhost:3000/cart/fail';
    }
  };

  // console.log(newFood);
  // console.log(newHotel);
  // console.log(newTicket);
  // console.log(order);
  // {food:[{id: "1",itemTotal: 25000,name: "美食1",picture: "https://via.placeholder.com/32",price: 25000,quantity: 1,rate: 4}],hotel:[{}],ticket:[{}]}

  return (
    <div className="container">
      <div className="row">
        <PaymentCard
          paymentRepresent={paymentRepresent}
          setPaymentRepresent={setPaymentRepresent}
          paymentMobile={paymentMobile}
          setPaymentMobile={setPaymentMobile}
          paymentEmail={paymentEmail}
          setPaymentEmail={setPaymentEmail}
          paymentId={paymentId}
          payMethod={payMethod}
          setPaymentId={setPaymentId}
          setPayMethod={setPayMethod}
        />
      </div>
      <div>
        {/* <button
          onClick={() => {
            setPayMethod('linePay');
          }}
        >
          LinePay
        </button> */}
      </div>
      <div>
        <ProgressButton
          prev={prev}
          next={next}
          step={step}
          maxSteps={maxSteps}
          paymentRepresent={paymentRepresent}
          paymentMobile={paymentMobile}
          paymentEmail={paymentEmail}
          paymentId={paymentId}
          hotelRepresent={hotelRepresent}
          hotelMobile={hotelMobile}
          payMethod={payMethod}
          uuid={uuid}
          mySubmit2={mySubmit2}
        />
      </div>
    </div>
  );
}

export default CartPayment;
