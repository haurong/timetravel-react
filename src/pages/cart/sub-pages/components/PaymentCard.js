import React from 'react';
import CardHeader from './CardHeader';
import CreditCardInput from './CreditCardInput';
import PaymentCardInfo from './PaymentCardInfo';
function PaymentCard() {
  return (
    <div>
      <CardHeader text={'購買人資料'} />
      <PaymentCardInfo />
      <CardHeader text={'信用卡資料'} />
      <div className="pb-5">
        <CreditCardInput />
      </div>
    </div>
  );
}

export default PaymentCard;
