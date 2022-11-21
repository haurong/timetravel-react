import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import StateButton from './StateButton';
import DateInput from './DateInput';
import TextInput from './TextInput';
function HotelCard() {
  return (
    <>
      <div className="card-wrap">
        <div className="card-body">
          <CardTitle text={'訂房預定資訊'} />
          <CardBodyTop />
          <StateButton text={'雅致家庭房 | 二大床'} />
          <div className="d-flex">
            <DateInput text={'入住時間'} />
            <DateInput text={'退房時間'} />
            <div className="day-count">
              <p>1晚</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrap mt-5">
        <div className="card-body">
          <h2>入住資訊</h2>
          <div className="d-flex align-items-end ">
            <TextInput text={'入住代表人'} placehoder={'中文姓'} />
            <TextInput text={''} placehoder={'中文名'} />
          </div>
          <div className="my-4">
            <p>入住人姓名必須與證件顯示完全相同。</p>
            <p>入住時請以中文姓名為準。</p>
          </div>
          <div>
            <TextInput text={'手機號碼'} placehoder={'請輸入正確的電話號碼'} />
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default HotelCard;
