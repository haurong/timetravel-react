import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import CountButton from './CountButton';

function FoodCard() {
  return (
    <div className="card-wrap">
      <div className="card-body">
        <CardTitle text={'美食購買資訊'} />
        <div className="d-flex justify-content-between">
          <CardBodyTop productName={'可不可紅茶'} />
          <CountButton />
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
