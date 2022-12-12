import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Rate } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
import { SUBMIT_COMMENT_API, CHANGE_COMMENTED_API } from './../../../../config';
import './Comment.scss';
function Comment({
  onHide,
  show,
  type,
  name,
  productNumber,
  memberSid,
  uuid,
  setCommentButton,
}) {
  const [score, setScore] = useState(5);
  const [textInput, setTextInput] = useState('');
  // console.log(memberSid);
  const [formData, setFormData] = useState({
    uuid: uuid,
    type: type,
    product_name: name,
    product_number: productNumber,
    userID: memberSid,
  });

  useEffect(() => {
    const newForm = { ...formData, score: score, commit_text: textInput };
    setFormData(newForm);
  }, [textInput, score]);
  // console.log(formData);
  const onInputChange = (e) => {
    setTextInput(e.target.value);
  };
  // console.log(SUBMIT_COMMENT_API);
  const mySubmit = async (e) => {
    const { data } = await axios.post(SUBMIT_COMMENT_API, formData);
    await axios.put(CHANGE_COMMENTED_API, formData);
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: '評論成功',
        text: '感謝您的評論！',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
      setCommentButton(1);
    } else {
      Swal.fire({
        icon: 'error',
        title: '喔喔，可能有哪裡出錯了',
        text: '您的評論並未送出',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="order-comment">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <h1
              onClick={() => {
                setTextInput(
                  '這真是太棒了，我沒買過這麼值得的東西！感謝TimeTravel幫我規畫出如此適合的行程！'
                );
              }}
            >
              {name}
            </h1>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <Rate
              className="TimeTravel_Rate"
              onChange={setScore}
              value={score}
            />
          </div>

          <div>
            <textarea
              rows="15"
              cols="100"
              placeholder="請在此輸入您對本商品的感想"
              value={textInput}
              onChange={onInputChange}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              // console.log(formData);
              Swal.fire({
                title: '確定要送出評論嗎？',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: ' 確定',
                confirmButtonColor: '#59d8a1',
                cancelButtonText: '取消',
                cancelButtonColor: '#D9D9D9',
                reverseButtons: true,
              }).then((result) => {
                if (result.isConfirmed) {
                  // console.log(formData);
                  mySubmit();
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  Swal.fire('取消', '您的評論並未送出', 'error');
                  return;
                }
              });
              // console.log(formData);
              onHide();
            }}
          >
            送出評論
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default Comment;
