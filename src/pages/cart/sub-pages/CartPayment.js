import PaymentCard from './components/PaymentCard';
import ProgressButton from './ProgressButton';
import { useFoodCart, useHotelCart, useTicketCart } from '../utils/useCart';
import { useState } from 'react';
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
  const order = {
    member_sid: member.sid,
    uuid: uuid,
    orders_total_price: totalPrice,
  };
  // setOrderId(order.uuid);
  const formData = {
    order: order,
    food: newFood,
    hotel: newHotel,
    ticket: newTicket,
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
          formData={formData}
          payMethod={payMethod}
          uuid={uuid}
        />
      </div>
    </div>
  );
}

export default CartPayment;
