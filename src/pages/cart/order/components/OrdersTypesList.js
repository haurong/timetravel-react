import React from 'react';
import { Link } from 'react-router-dom';
function OrdersTypesList() {
  return (
    <ul className="orders-links-ul justify-content-center">
      <li className="active">
        <Link className="orders-links" aria-current="page" to="/orders">
          近期訂單
        </Link>
      </li>
      <li className="">
        <Link className="orders-links" to="/orders">
          交易中訂單
        </Link>
      </li>
      <li className="">
        <Link className="orders-links" to="/orders">
          歷史訂單
        </Link>
      </li>
    </ul>
  );
}

export default OrdersTypesList;
