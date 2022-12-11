import React from 'react';
import { MakeOrder, LINE_PAY_API } from '../../../config';
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
  uuid,
  payMethod,
}) {
  let payUrl;
  const mySubmit = async (e) => {
    const { data } = await axios.post(MakeOrder, formData);
    if (data.success) {
      localStorage.removeItem('foodcart');
      localStorage.removeItem('ticketcart');
      localStorage.removeItem('hotelcart');
      Swal.fire({
        icon: 'success',
        title: '已成功建立訂單，即將跳往結帳頁面',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
      await pay();
      window.location = payUrl;
    } else {
      Swal.fire({
        icon: 'error',
        title: '訂單成立失敗！',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
    }
  };
  const mySubmit2 = async (e) => {
    const { data } = await axios.post(MakeOrder, formData);
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: '已成功建立訂單，即將跳往結帳頁面',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
      localStorage.removeItem('foodcart');
      localStorage.removeItem('ticketcart');
      localStorage.removeItem('hotelcart');
      window.location = 'http://localhost:3000/cart/fail';
    } else {
      Swal.fire({
        icon: 'error',
        title: '訂單成立失敗！',
      });
    }
  };
  // const uuid = 1670387472990;
  async function pay() {
    const response = await axios.get(LINE_PAY_API(uuid));
    const url = response.data.payUrl;
    payUrl = url;
    // console.log(payUrl);
  }
  // async function greenpay() {
  //   const response = await axios.get(GREEN_PAY_API(uuid));
  //   document.open();
  //   document.write(response.data);
  //   document.close();
  //   console.log(response);
  // }
  // console.log(toPayUrl);
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
              mySubmit2();
            }}
          >
            模擬付款失敗
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              if (payMethod === 'LinePay') {
                mySubmit();
              } else if (payMethod === 'Credit') {
                mySubmit2();
              } else {
                Swal.fire({
                  icon: 'error',
                  title: '請先選擇一種支付方式！',
                  confirmButtonText: '確認',
                  confirmButtonColor: '#59d8a1',
                });
                return;
              }
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
