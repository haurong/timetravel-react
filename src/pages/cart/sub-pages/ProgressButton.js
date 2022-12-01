import React from 'react';
import { MakeOrder } from '../../../config';
import axios from 'axios';
function ProgressButton({
  prev,
  next,
  step,
  maxSteps,
  hotelRepresent,
  hotelMobile,
  paymentRepresent,
  paymentMobile,
  paymentEmail,
  paymentId,
  formData,
}) {
  const mySubmit = async (e) => {
    const { data } = await axios.post(MakeOrder, formData);
    if (data.success) {
      alert('已成功建立訂單！！');
    } else {
      alert('訂購失敗！');
    }
  };

  return (
    <div className="d-flex justify-content-evenly mb-5">
      {step === 1 ? (
        ''
      ) : (
        <button type="button" className="btn btn-primary" onClick={prev}>
          上一步
        </button>
      )}

      {step !== maxSteps ? (
        <button type="button" className="btn btn-primary" onClick={next}>
          下一步
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            mySubmit();
          }}
        >
          確認結帳
        </button>
      )}
    </div>
  );
}

export default ProgressButton;
