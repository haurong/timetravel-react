import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Rate } from 'antd';
import './Comment.scss';
function Comment({ onHide, show }) {
  const [score, setScore] = useState(5);
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
            <h1>欣葉日本料理</h1>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <Rate className="TimeTravel_Rate" value={score} />
          </div>

          <div>
            <p>詳細評論</p>
            <textarea rows="15" cols="100"></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>送出評論</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default Comment;
