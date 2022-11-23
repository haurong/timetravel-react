import React from 'react';

function HotelCardInfo() {
  return (
    <div className="card-wrap mt-5">
      <div className="card-body">
        <h2>入住資訊</h2>
        <div className="d-flex align-items-end ">
          <div>
            <p>入住代表人</p>
            <input className="input" type={'text'} placeholder={'中文姓'} />
          </div>
          <div>
            <input className="input" type={'text'} placeholder={'中文名'} />
          </div>
        </div>
        <div className="my-4">
          <p>入住人姓名必須與證件顯示完全相同。</p>
          <p>入住時請以中文姓名為準。</p>
        </div>
        <div>
          <div>
            <p>手機號碼</p>
            <input
              className="input"
              type={'tel'}
              placeholder={'請輸入正確的手機號碼'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCardInfo;
