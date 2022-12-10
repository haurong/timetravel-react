import React from 'react';

function PaymentCardInfo({
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
    <>
      <div className="d-flex pb-5">
        <div className="me-3">
          <p
            onClick={() => {
              setPaymentRepresent('谷鄉元昭');
              setPaymentMobile('0966567654');
              setPaymentEmail('bestgirlyagoo@gmail.com');
              setPaymentId('A129715143');
            }}
          >
            {'訂單聯絡人'}
          </p>
          <input
            className="input form-control"
            type={'text'}
            placeholder={'請輸入姓名'}
            value={paymentRepresent}
            onChange={(e) => {
              const payname = e.target.value;
              setPaymentRepresent(payname);
            }}
            style={{ width: '300px' }}
          />
        </div>
        <div>
          <p>{'手機號碼'}</p>
          <input
            className="input form-control"
            type={'tel'}
            placeholder={'請輸入正確的電話號碼'}
            style={{ width: '300px' }}
            value={paymentMobile}
            onChange={(e) => {
              const v = e.target.value;
              setPaymentMobile(v);
            }}
          />
        </div>
      </div>
      <div className="d-flex pb-5">
        <div className="me-3">
          <p>{'Email'}</p>
          <input
            className="input form-control"
            type={'tel'}
            placeholder={'example@mail.com'}
            style={{ width: '300px' }}
            value={paymentEmail}
            onChange={(e) => {
              const v = e.target.value;
              setPaymentEmail(v);
            }}
          />
        </div>
        <div>
          <p>{'身分證字號'}</p>
          <input
            className="input form-control"
            type={'tel'}
            placeholder={'外籍人士請輸入護照號碼'}
            style={{ width: '300px' }}
            value={paymentId}
            onChange={(e) => {
              const v = e.target.value;
              setPaymentId(v);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default PaymentCardInfo;
