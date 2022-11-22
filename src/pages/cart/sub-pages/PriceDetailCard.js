import React from 'react';
import StateButton from './components/StateButton';
function PriceDetailCard({ title }) {
  return (
    <>
      <div className="card-body pt-0 pb-3 px-5">
        <p>{title}</p>
      </div>
      <div className="p-d-c-body">
        <div className="d-flex justify-content-evenly">
          <p>台北 S HOTEL</p>
          <div></div>
          <p>TWD 2499</p>
        </div>
        <div className="btn-wrap">
          <StateButton text={'雅致家庭房|二大床'} />
        </div>
      </div>
      <div className="card-wrap">
        <div className="card-body pt-1 pb-5 px-5 d-flex justify-content-between">
          <p>小記</p>
          <p className="total">TWD $2499</p>
        </div>
      </div>
    </>
  );
}

export default PriceDetailCard;
