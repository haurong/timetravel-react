import React from 'react';
import OrdersAccordion from './OrdersAccordion';
import moment from 'moment';
function OrdersCard({ ordersData, memberSid }) {
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
        {ordersData.length === 0 ? (
          <div className="d-flex justify-content-center">
            <h1>您目前沒有已完成的訂單喔，快到Time Travel裡逛逛吧！</h1>
          </div>
        ) : (
          ordersData.map((v, i) => {
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
                  memberSid={memberSid}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default OrdersCard;
