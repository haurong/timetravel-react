import React from 'react';
import PaymentCard from './components/PaymentCard';
import ProgressButton from './ProgressButton';
function CartPayment({ prev, next, step, maxSteps }) {
  return (
    <div className="container">
      <div className="row">
        <PaymentCard />
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

export default CartPayment;
