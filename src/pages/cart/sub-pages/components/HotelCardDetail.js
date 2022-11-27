import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
function HotelCardDetail({ name }) {
  return (
    <div className="pb-5">
      <CardTitle
        text="訂房預定資訊"
        deleteFun={() => {
          console.log('delete');
        }}
      />
      <CardBodyTop productName={name} />
      <StateButton text={'雅致家庭房 | 二大床'} />
      <div className="d-flex">
        <DateInput text={'入住時間'} />
        <DateInput text={'退房時間'} />
        <div className="day-count">
          <p>1晚</p>
        </div>
      </div>
    </div>
  );
}

export default HotelCardDetail;
