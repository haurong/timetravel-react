import React from 'react';
import { Link } from 'react-router-dom';
function OrdersTypesList({ path, setPath }) {
  return (
    <ul className="orders-links-ul justify-content-center">
      <li className={path === 'now' ? 'active' : ''}>
        <Link
          className="orders-links"
          aria-current="page"
          to="/orders"
          onClick={() => {
            setPath('now');
          }}
        >
          近期訂單
        </Link>
      </li>
      <li className={path === 'undone' ? 'active' : ''}>
        <Link
          className="orders-links"
          to="/orders"
          onClick={() => {
            setPath('undone');
          }}
        >
          交易中訂單
        </Link>
      </li>
      <li className={path === 'history' ? 'active' : ''}>
        <Link
          className="orders-links"
          to="/orders"
          onClick={() => {
            setPath('history');
          }}
        >
          歷史訂單
        </Link>
      </li>
    </ul>
  );
}

export default OrdersTypesList;
