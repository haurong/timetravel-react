import React from 'react';

function CreditCardInput() {
  return (
    <>
      <div className="pb-5">
        <p>持卡人卡號</p>
        <div className="d-flex credit-input-wrap">
          <input type={'text'} className="credit-input" placeholder="xxxx" />
          <p>-</p>
          <input type={'text'} className="credit-input" placeholder="xxxx" />
          <p>-</p>
          <input type={'text'} className="credit-input" placeholder="xxxx" />
          <p>-</p>
          <input type={'text'} className="credit-input" placeholder="xxxx" />
        </div>
      </div>
      <div className="d-flex">
        <div>
          <p>有效期限</p>
          <input type={'text'} className="input" placeholder="西元年/月" />
        </div>
        <div>
          <p>安全碼CVC</p>
          <input type={'text'} className="input" placeholder="xxx" />
        </div>
      </div>
    </>
  );
}

export default CreditCardInput;
