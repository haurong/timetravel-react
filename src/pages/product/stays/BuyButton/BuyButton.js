import React from 'react';
import './BuyButton.scss';
function BuyButton() {
  return (
    <>
      <div className="BookingBarPriceAndButton">
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#63D2FF' }}
        >
          加入購物車
        </button>
      </div>
      <div className="noMarginRight BookingBarPriceAndButton">
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#59d8a1' }}
        >
          立即訂購
        </button>
      </div>
    </>
  );
}

export default BuyButton;
