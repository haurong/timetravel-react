import React from 'react';
import PriceDetailCard from './PriceDetailCard';
import ProgressButton from './ProgressButton';
function PriceDetail({ prev, next, step, maxSteps }) {
  return (
    <div className="price-detail-wrap mb-5">
      <div className="card-body">
        <h2>價格明細</h2>
      </div>
      <PriceDetailCard title={'住宿'} />
      <PriceDetailCard title={'美食'} />
      <PriceDetailCard title={'票券'} />
      <div className="d-flex justify-content-evenly">
        <h1 className="total">總計</h1>
        <h1 className="total">TWD $5999</h1>
      </div>
      <div>
        <ProgressButton
          prev={prev}
          next={next}
          step={step}
          maxSteps={maxSteps}
        />
      </div>
    </div>
  );
}

export default PriceDetail;
