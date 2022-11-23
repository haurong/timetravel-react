import React from 'react';

function PaymentCardInfo() {
  return (
    <>
      <div className="d-flex pb-5">
        <div className="me-3">
          <p>{'訂單聯絡人'}</p>
          <input
            className="input form-control"
            type={'text'}
            placeholder={'請輸入姓名'}
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
          />
        </div>
        <div>
          <p>{'身分證字號'}</p>
          <input
            className="input form-control"
            type={'tel'}
            placeholder={'外籍人士請輸入護照號碼'}
            style={{ width: '300px' }}
          />
        </div>
      </div>
    </>
  );
}

export default PaymentCardInfo;
