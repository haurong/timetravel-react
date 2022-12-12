import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
import CountButton from './CountButton';
import { useTicketCart } from '../../utils/useCart';
import moment from 'moment';
function TicketCard() {
  const { items, plusOne, minusOne, removeItem, updateDate } = useTicketCart();
  // console.log(items);
  const toDay = moment(new Date()).format('YYYY-MM-DD');
  return (
    <>
      {items.map((v, i) => {
        return (
          <div className="card-wrap pb-5" key={v.name}>
            <div className="card-body">
              <CardTitle
                text={'票券預定資訊'}
                deleteFun={() => {
                  removeItem(v.id);
                }}
              />
              <CardBodyTop productName={v.name} img={v.img} rate={v.rate} />
              <StateButton text={v.type} />
              <div className="d-flex justify-content-between">
                <DateInput
                  text={'使用日期'}
                  min={toDay}
                  date={v.date}
                  id={v.id}
                  updateDate={updateDate}
                  dateProps={'date'}
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
