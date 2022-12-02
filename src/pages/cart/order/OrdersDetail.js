import React, { useEffect, useState } from 'react';
import OrdersTypesList from './components/OrdersTypesList';
import './../styles/OrdersDetails.scss';
import OrdersCard from './components/OrdersCard';
import OrdersHistory from './components/OrdersHistory';
import OrdersUndone from './components/OrdersUndone';
import axios from 'axios';

import { ORDER_DETAILS_FOOD_API } from '../../../config';
function OrdersDetail({ ordersData }) {
  const [path, setPath] = useState('now');

  return (
    <div className="container">
      <OrdersTypesList path={path} setPath={setPath} />
      {path === 'now' ? <OrdersCard ordersData={ordersData} /> : ''}
      {path === 'undone' ? <OrdersUndone /> : ''}
      {path === 'history' ? <OrdersHistory /> : ''}
    </div>
  );
}

export default OrdersDetail;
