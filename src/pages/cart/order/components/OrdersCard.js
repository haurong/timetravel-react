import React from 'react';
import OrdersAccordion from './OrdersAccordion';
import moment from 'moment';
function OrdersCard({ ordersData }) {
  const newOrder = ordersData.filter((v, i) => {
    return v.orders_status_sid === 1;
  });
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
        </ul>
        {newOrder.map((v, i) => {
          const { orders_created_time, uuid, orders_total_price } = v;
          const createdTime = moment(new Date(orders_created_time)).format(
            'YYYY-MM-DD'
          );
          return (
            <div key={v.uuid} className={'mb-3'}>
              <OrdersAccordion
                createdTime={createdTime}
                uuid={uuid}
                totalPrice={orders_total_price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrdersCard;
