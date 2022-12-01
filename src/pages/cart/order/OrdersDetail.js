import React, { useState } from 'react';
import OrdersTypesList from './components/OrdersTypesList';
import './../styles/OrdersDetails.scss';
import OrdersCard from './components/OrdersCard';
import OrdersHistory from './components/OrdersHistory';
import OrdersUndone from './components/OrdersUndone';
function OrdersDetail() {
  const [path, setPath] = useState('now');
  return (
    <div className="container">
      <OrdersTypesList path={path} setPath={setPath} />
      {path === 'now' ? <OrdersCard /> : ''}
      {path === 'undone' ? <OrdersUndone /> : ''}
      {path === 'history' ? <OrdersHistory /> : ''}
    </div>
  );
}

export default OrdersDetail;
