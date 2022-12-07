import React, { useEffect, useState } from 'react';
import { MakeOrder, LINE_PAY_API } from '../../../config';
import Swal from 'sweetalert2';
import axios from 'axios';
import { PlayCircleOutlineRounded } from '@mui/icons-material';
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
  const [toPayUrl, setToPayUrl] = useState('');
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
  const uuid = 1670387472990;
  async function pay() {
    const response = await axios.get(LINE_PAY_API(uuid));
    const url = response.data.payUrl;
    setToPayUrl(url);
  }
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
              mySubmit();
              // setOrderId(formData.order.uuid);
            }}
          >
            確認結帳
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              pay();
              Swal.fire({
                title: '即將跳往結帳頁面',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: ' 確定',
                confirmButtonColor: '#59d8a1',
                cancelButtonText: '取消',
                cancelButtonColor: '#D9D9D9',
                reverseButtons: true,
              }).then((result) => {
                if (result.isConfirmed) {
                  console.log(toPayUrl);
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  Swal.fire('取消', '稍後付款', 'error');
                  return;
                }
              });
            }}
          >
            測試付款
          </button>
        </>
      )}
    </div>
  );
}

export default ProgressButton;
