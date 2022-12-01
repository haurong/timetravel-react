import React, { useState } from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
import CountButton from './CountButton';
import { useTicketCart } from '../../utils/useCart';
function TicketCard() {
  const { items, plusOne, minusOne, removeItem, updateDate } = useTicketCart();

  return (
    <>
      {items.map((v, i) => {
        return (
          <div className="card-wrap pb-5">
            <div className="card-body">
              <CardTitle
                text={'票券預定資訊'}
                deleteFun={() => {
                  removeItem(v.id);
                }}
              />
              <CardBodyTop productName={v.name} />
              <StateButton text={v.tickettype} />
              <div className="d-flex justify-content-between">
                <DateInput
                  text={'入住時間'}
                  date={v.usedate}
                  id={v.id}
                  updateDate={updateDate}
                  dateProps={'usedate'}
                />
                <CountButton
                  quantity={v.quantity}
                  plusOne={() => {
                    plusOne(v.id);
                  }}
                  minusOne={() => {
                    minusOne(v.id);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TicketCard;
