import React from 'react';
import CardHeader from './components/CardHeader';
import TicketCard from './components/TicketCard';
import PriceDetail from './PriceDetail';
function CartTicket({ prev, next, step, maxSteps }) {
  return (
    <div className="container">
      <div className="row">
        <CardHeader text={'票券資訊'} />
        <div className="d-flex justify-content-between">
          <div className="col-lg-7">
            <TicketCard />
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
  );
}

export default CartTicket;
