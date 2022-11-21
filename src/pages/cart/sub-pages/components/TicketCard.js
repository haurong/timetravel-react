import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
import CountButton from './CountButton';
function TicketCard() {
  return (
    <div className="card-wrap">
      <div className="card-body">
        <CardTitle text={'票券預定資訊'} />
        <CardBodyTop
          productName={'台北 兒童新樂園 | 一日票(無限暢玩13項指定設施)'}
        />
        <StateButton text={'成人票'} />
        <div className="d-flex justify-content-between">
          <DateInput text={'使用日期'} />
          <CountButton />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
