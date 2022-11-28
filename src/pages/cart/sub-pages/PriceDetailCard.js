import React from 'react';
import StateButton from './components/StateButton';
function PriceDetailCard({ title, items, total }) {
  return (
    <>
      <div className="p-d-c-body">
        <div className="card-body">
          <h2>價格明細</h2>
        </div>
        <div className="card-body pt-0 pb-3 px-5">
          <p>{title}</p>
        </div>
        {items.map((v, i) => {
          return (
            <>
              <div className="d-flex justify-content-evenly">
                <p>{v.name}</p>
                <div></div>
                <p>{v.price}</p>
              </div>
              <div className="btn-wrap">
                <StateButton text={v.roomtype} />
              </div>
            </>
          );
        })}
      </div>
      <div className="card-wrap">
        <div className="card-body pt-1 pb-5 d-flex justify-content-between">
          <p>小記</p>
          <p className="total">{total}</p>
        </div>
      </div>
    </>
  );
}

export default PriceDetailCard;
