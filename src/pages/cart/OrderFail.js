import React from 'react';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import FailIcon from './../../icon/delete_cart.svg';
import { NavLink } from 'react-router-dom';
function OrderFail() {
  return (
    <>
      <NavBar />
      <div className="container success-fail">
        <div className="space"></div>
        <div className="img-wrap">
          <img className="success-fail-icon" src={FailIcon} alt="SuccessIcon" />
        </div>
        <h2 className="fail">付款失敗</h2>
        <p>喔喔！付款失敗</p>
        <br />
        <p className="pb-5">
          但不用擔心，您可以前往
          <NavLink to={'/orders'}>會員/訂單紀錄/交易中訂單</NavLink>
          ，嘗試重新付款
        </p>
      </div>

      <Footer />
    </>
  );
}

export default OrderFail;
