import React, { useState } from 'react';
import Comment from '../comment/Comment';
function AccordionDetail({
  type,
  name,
  price,
  quantity,
  totalPrice,
  commented,
  productNumber,
  memberSid,
  uuid,
}) {
  // console.log(commented);
  const [commentShow, setCommentShow] = useState(false);
  const [commentButton, setCommentButton] = useState(commented);
  return (
    <ul className="orders-accordion-ul p-0 m-0 pb-2 d-flex align-items-center">
      <li className="col text-center">
        <p>{name}</p>
      </li>
      <li className="col text-center">
        <p>{price}</p>
      </li>
      <li className="col text-center">
        <p>{quantity}</p>
      </li>
      <li className="col text-center">
        <p>{`TWD$${totalPrice}`}</p>
      </li>
      <li className="col text-center">
        {commentButton === 1 ? (
          <button type="button" className="btn btn-primary" disabled>
            已經評價
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setCommentShow(true);
            }}
          >
            留下評價
          </button>
        )}
        <Comment
          show={commentShow}
          onHide={() => setCommentShow(false)}
          state="editing"
          name={name}
          productNumber={productNumber}
          memberSid={memberSid}
          type={type}
          uuid={uuid}
          setCommentButton={setCommentButton}
        />
      </li>
    </ul>
  );
}

export default AccordionDetail;
