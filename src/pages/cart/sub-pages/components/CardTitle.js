import React from 'react';
import deleteIcon from './../../../../icon/delete.svg';
function CardTitle({ text }) {
  return (
    <div className="d-flex justify-content-between ">
      <h2>{text}</h2>
      <span className="icon">
        <img alt="delete-icon" src={deleteIcon} />
      </span>
    </div>
  );
}

export default CardTitle;
