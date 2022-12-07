import React, { useEffect } from 'react';
import { MakeOrder, LINE_PAY_API } from '../../../config';
import { useCart } from '../utils/useCart';
import Swal from 'sweetalert2';
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
  const { orderId, setOrderId } = useCart();

  const mySubmit = async (e) => {
    const { data } = await axios.post(MakeOrder, formData);
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: '已成功建立訂單！',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '訂單成立失敗！',
      });
    }
  };
  const payForm = { uuid: 1670346171015 };
  const pay = async (e) => {
    const { data } = await axios.post(LINE_PAY_API, payForm);
    console.log(data);
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
        <>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              // mySubmit();
              setOrderId(formData.order.uuid);
              pay();
            }}
          >
            確認結帳
          </button>
        </>
      )}
    </div>
  );
}

export default ProgressButton;
