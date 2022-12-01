import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CreditCardInput from './CreditCardInput';
import PaymentCardInfo from './PaymentCardInfo';
function PaymentCard({
  paymentRepresent,
  setPaymentRepresent,
  paymentMobile,
  setPaymentMobile,
  paymentEmail,
  setPaymentEmail,
  paymentId,
  setPaymentId,
}) {
  return (
    <div>
      <CardHeader text={'購買人資料'} />
      <PaymentCardInfo
        paymentRepresent={paymentRepresent}
        setPaymentRepresent={setPaymentRepresent}
        paymentMobile={paymentMobile}
        setPaymentMobile={setPaymentMobile}
        paymentEmail={paymentEmail}
        setPaymentEmail={setPaymentEmail}
        paymentId={paymentId}
        setPaymentId={setPaymentId}
      />
      <CardHeader text={'信用卡資料'} />
      <div className="pb-5">
        <CreditCardInput />
      </div>
    </div>
  );
}

export default PaymentCard;
