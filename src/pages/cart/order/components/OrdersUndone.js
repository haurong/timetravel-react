import React from 'react';
import OrdersAccordionUndone from './OrdersAccordionUndone';
function OrdersUndone() {
  return (
    <>
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
          <li className="col text-center">
            <p>訂單狀態</p>
          </li>
        </ul>
        <OrdersAccordionUndone />
      </div>
    </>
  );
}

export default OrdersUndone;
