import React from 'react';
import CardHeader from './CardHeader';
import TextInput from './TextInput';
import CreditCardInput from './CreditCardInput';
function PaymentCard() {
  return (
    <div>
      <CardHeader text={'購買人資料'} />
      <div className="d-flex pb-5">
        <TextInput
          text={'訂單聯絡人'}
          placehoder={'請輸入姓名'}
          style={{ width: '300px' }}
        />
        <TextInput
          text={'手機號碼'}
          placehoder={'請輸入正確的電話號碼'}
          style={{ width: '300px' }}
        />
      </div>
      <div className="d-flex pb-5">
        <TextInput
          text={'Email'}
          placehoder={'example@mail.com'}
          style={{ width: '300px' }}
        />
        <TextInput
          text={'身分證字號'}
          placehoder={'外籍人士請輸入護照號碼'}
          style={{ width: '300px' }}
        />
      </div>
      <CardHeader text={'信用卡資料'} />
      <div className="pb-5">
        <TextInput
          text={'持卡人姓名'}
          placehoder={'需與信用卡上姓名相同'}
          style={{ width: '300px' }}
        />
      </div>
      <div className="pb-5">
        <CreditCardInput />
      </div>
    </div>
  );
}

export default PaymentCard;
