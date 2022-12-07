import React, { useEffect } from 'react';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import './styles/Cart.scss';
import SuccessIcon from './../../icon/success_cart.svg';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { LINE_PAY_CONFIRM_API, CHANGE_PAY_API } from '../../config';
import axios from 'axios';
function OrderSuccess() {
  const location = useLocation();
  // const data = location.search.split('?');
  // const queryString = data[1];
  // const query = queryString.split('&');
  const query = queryString.parse(location.search);
  async function checkPayment() {
    const response = await axios.post(LINE_PAY_CONFIRM_API, query);
    console.log(response.data.payResult);
    const payCheckResult = response.data.payResult;
    if (payCheckResult === '0000') {
      await changePay();
    }
  }
  async function changePay() {
    const response = await axios.put(CHANGE_PAY_API, query);
    console.log(response);
  }
  useEffect(() => {
    checkPayment();
  }, []);
  return (
    <>
      <NavBar />
      <div className="container success-fail">
        <div className="space"></div>
        <div className="img-wrap">
          <img
            className="success-fail-icon"
            src={SuccessIcon}
            alt="SuccessIcon"
          />
        </div>
        <h2 className="success">付款成功</h2>
        <p className="pb-5">感謝您選擇Time Travel，我們祝您旅途愉快</p>
      </div>

      <Footer />
    </>
  );
}

export default OrderSuccess;
