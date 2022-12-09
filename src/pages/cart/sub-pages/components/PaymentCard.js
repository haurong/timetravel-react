import React from 'react';
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
  setPayMethod,
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
      <CardHeader text={'選擇付款方式'} />
      <div className="pb-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setPayMethod('LinePay');
          }}
        >
          LinePay
        </button>
      </div>
      <div className="pb-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setPayMethod('Credit');
          }}
        >
          信用卡一次付清
        </button>
      </div>
    </div>
  );
}

export default PaymentCard;
