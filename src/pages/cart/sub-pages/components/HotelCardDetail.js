import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
import { useHotelCart } from '../../utils/useCart';
import CountButton from './CountButton';
function HotelCardDetail({
  name,
  id,
  type,
  quantity,
  rate,
  checkin,
  checkout,
}) {
  const { removeItem, plusOne, minusOne } = useHotelCart();
  return (
    <div className="pb-5">
      <CardTitle
        text="訂房預定資訊"
        deleteFun={() => {
          removeItem(id);
        }}
      />
      <CardBodyTop productName={name} rate={rate} />
      <StateButton text={type} />
      <div className="d-flex">
        <DateInput text={'入住時間'} date={checkin} />
        <DateInput text={'退房時間'} date={checkout} />
        <div className="day-count">
          <p>1晚</p>
        </div>
      </div>
      <div className="pt-4">
        <CountButton
          quantity={quantity}
          id={id}
          plusOne={() => {
            plusOne(id);
          }}
          minusOne={() => {
            minusOne(id);
          }}
        />
      </div>
    </div>
  );
}

export default HotelCardDetail;
