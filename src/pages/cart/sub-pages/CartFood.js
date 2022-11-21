import React from 'react';
import CardHeader from './components/CardHeader';
import FoodCard from './components/FoodCard';
import PriceDetail from './PriceDetail';
function CartFood({ prev, next, step, maxSteps }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <CardHeader text={'美食資訊'} />
          <div className="d-flex justify-content-between">
            <div className="col-lg-7">
              <FoodCard />
            </div>
            <div className="col-lg-4">
              <PriceDetail
                prev={prev}
                next={next}
                step={step}
                maxSteps={maxSteps}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartFood;
