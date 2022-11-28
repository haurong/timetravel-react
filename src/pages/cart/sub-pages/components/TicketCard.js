import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
import CountButton from './CountButton';
import { useTicketCart } from '../../utils/useCart';
function TicketCard() {
  const { cart, items, plusOne, minusOne, removeItem } = useTicketCart();
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
                <DateInput text={'使用日期'} />
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
