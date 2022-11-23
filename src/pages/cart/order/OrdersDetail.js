import React from 'react';
import OrdersTypesList from './components/OrdersTypesList';
import './../styles/OrdersDetails.scss';
import OrdersAccordion from './components/OrdersAccordion';
function OrdersDetail() {
  return (
    <div className="container">
      <OrdersTypesList />
      <div className="orders-details-wrap row">
        <ul className="orders-details-ul">
          <li className="col text-center">
            <p>訂單成立日期</p>
          </li>
          <li className="col text-center">
            <p>訂單編號</p>
          </li>
          <li className="col text-center">
            <p>訂單總價</p>
          </li>
        </ul>
        <OrdersAccordion />
      </div>
    </div>
  );
}

export default OrdersDetail;
