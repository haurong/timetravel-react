import React from 'react';
import CardHeader from './CardHeader';
import CreditCard from './CreditCard';
import PaymentCardInfo from './PaymentCardInfo';
function PaymentCard({
  paymentRepresent,
  setPaymentRepresent,
  paymentMobile,
  setPaymentMobile,
  paymentEmail,
  setPaymentEmail,
  paymentId,
  payMethod,
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
        <label
          onClick={() => {
            setPayMethod('LinePay');
          }}
        >
          <input type={'radio'} name={'paytype'} />
          <span className="btn btn-primary mx-2">LinePay</span>
        </label>
      </div>
      <div className="pb-5">
        <label
          onClick={() => {
            setPayMethod('Credit');
          }}
        >
          <input type={'radio'} name={'paytype'} />
          <span className="btn btn-primary mx-2">信用卡一次付清</span>
        </label>
      </div>
      {payMethod === 'Credit' ? <CreditCard /> : ''}
    </div>
  );
}

export default PaymentCard;
