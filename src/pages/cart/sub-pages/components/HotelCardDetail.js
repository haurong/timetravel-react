import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import { useHotelCart } from '../../utils/useCart';
import CountButton from './CountButton';
import DateInput from './DateInput';
function HotelCardDetail({
  name,
  id,
  type,
  quantity,
  rate,
  checkin,
  checkout,
  img,
}) {
  let dateLong = (+new Date(checkout) - +new Date(checkin)) / 86400000;
  const { removeItem, plusOne, minusOne, updateDate } = useHotelCart();
  return (
    <div className="pb-5">
      <CardTitle
        text="訂房預定資訊"
        deleteFun={() => {
          removeItem(id);
        }}
      />
      <CardBodyTop productName={name} rate={rate} img={img} />
      <StateButton text={type} />
      <div className="d-flex">
        <DateInput
          text={'入住日期'}
          date={checkin}
          id={id}
          max={checkout}
          updateDate={updateDate}
          dateProps={'checkin'}
        />
        <DateInput
          text={'退房日期'}
          date={checkout}
          id={id}
          min={checkin}
          updateDate={updateDate}
          dateProps={'checkout'}
        />
        <div className="day-count">
          <p>{`${dateLong}晚`}</p>
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
