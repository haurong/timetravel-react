import React, { useState } from 'react';

//導入CSS
import './Cart.scss';
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
  const pageNames = ['住宿', '美食', '票券', '結帳'];

  // 動態元件語法
  const components = [CartHotel, CartFood, CartTicket, CartPayment];
  const BlockComponent = components[step - 1];
  return (
    <>
      <NavBar />
      <div className="space"></div>
      <ProgressBar maxSteps={maxSteps} step={step} pageNames={pageNames} />
      <BlockComponent />
      <Footer />
    </>
  );
}

export default Cart;
