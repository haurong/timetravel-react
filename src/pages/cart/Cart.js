import React, { useState } from 'react';
//導入CSS
import './styles/Cart.scss';
//導入排版
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
// 導入子頁面
import CartHotel from './sub-pages/CartHotel';
import CartFood from './sub-pages/CartFood';
import CartTicket from './sub-pages/CartTicket';
import CartPayment from './sub-pages/CartPayment';
//導入進度條
import ProgressBar from './components/ProgressBar';

function Cart() {
  const maxSteps = 4;
  const [step, setStep] = useState(1);
  const next = () => {
    // 沒錯誤才會到下一步
    window.scrollTo(0, 0);
    if (step < maxSteps) setStep(step + 1);
  };
  const prev = () => {
    window.scrollTo(0, 0);
    if (step > 1) setStep(step - 1);
  };
  const pageNames = ['住宿', '美食', '票券', '結帳'];

  const components = [CartHotel, CartFood, CartTicket, CartPayment];
  const BlockComponent = components[step - 1];

  //結帳用的state
  const [hotelRepresent, setHotelRepresent] = useState('');
  const [hotelMobile, setHotelMobile] = useState('');
  const [paymentRepresent, setPaymentRepresent] = useState('');
  const [paymentMobile, setPaymentMobile] = useState('');
  const [paymentEmail, setPaymentEmail] = useState('');
  const [paymentId, setPaymentId] = useState('');
  return (
    <>
      <div className="cart-total-wrap">
        <NavBar />
        <div className="space"></div>
        <ProgressBar step={step} maxSteps={maxSteps} pageNames={pageNames} />
        <div className="cart-d-wrap">
          <BlockComponent
            prev={prev}
            next={next}
            step={step}
            maxSteps={maxSteps}
            hotelRepresent={hotelRepresent}
            setHotelRepresent={setHotelRepresent}
            hotelMobile={hotelMobile}
            setHotelMobile={setHotelMobile}
            paymentRepresent={paymentRepresent}
            setPaymentRepresent={setPaymentRepresent}
            paymentMobile={paymentMobile}
            setPaymentMobile={setPaymentMobile}
            paymentEmail={paymentEmail}
            setPaymentEmail={setPaymentEmail}
            paymentId={paymentId}
            setPaymentId={setPaymentId}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
