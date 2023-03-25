import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import {
  LINE_PAY_CONFIRM_API,
  CHANGE_PAY_API,
  LINE_PAY_API,
} from './../../../../config';

function RePay({ onHide, show, type, uuid }) {
  const location = useLocation();
  const [payMethod, setPayMethod] = useState('');
  let payUrl;
  const myLinePay = async () => {
    await pay();
    window.location = payUrl;
  };
  async function pay() {
    const response = await axios.get(LINE_PAY_API(uuid));
    const url = response.data.payUrl;
    payUrl = url;
    console.log(payUrl);
  }
  const query = queryString.parse(location.search);
  async function changePay() {
    const response = await axios.put(CHANGE_PAY_API, { orderId: uuid });
    console.log(response);
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="repay">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <h1>請選擇付款方式</h1>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <label
              onClick={() => {
                setPayMethod('LinePay');
              }}
            >
              <input type={'radio'} name={'paytype'} />
              <span className="btn btn-primary mx-2">LinePay</span>
            </label>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <label
              onClick={() => {
                setPayMethod('Credit');
              }}
            >
              <input type={'radio'} name={'paytype'} />
              <span className="btn btn-primary mx-2">信用卡一次付清</span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              // console.log(formData);
              if (payMethod === '') {
                Swal.fire({
                  icon: 'error',
                  title: '請先選擇一種支付方式！',
                  confirmButtonText: '確認',
                  confirmButtonColor: '#59d8a1',
                });
                return;
              } else {
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
                    if (payMethod === 'LinePay') {
                      myLinePay();
                    } else if (payMethod === 'Credit') {
                      changePay();
                      localStorage.removeItem('foodcart');
                      localStorage.removeItem('ticketcart');
                      localStorage.removeItem('hotelcart');
                      window.location = 'http://localhost:3000/cart/success';
                    }
                  } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                  ) {
                    Swal.fire({
                      icon: 'error',
                      title: '沒關係，您可以稍後再結帳',
                      confirmButtonText: '確認',
                      confirmButtonColor: '#59d8a1',
                    });
                    return;
                  }
                });
              }

              // console.log(formData);
              onHide();
            }}
          >
            前往結帳
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default RePay;
