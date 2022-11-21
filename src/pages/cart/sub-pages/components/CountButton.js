import React from 'react';
import PlusIcon from './../../../../icon/add.svg';
import MinusIcon from './../../../../icon/minus.svg';
import './CountButton.scss';
function CountButton() {
  return (
    <div className="count-btn-wrap">
      <span className="count-btn icon">
        <img alt="MinusIcon" src={MinusIcon} />
      </span>
      <div className="count-num">
        <p>1</p>
      </div>
      <span className="count-btn icon">
        <img alt="PlusIcon" src={PlusIcon} />
      </span>
    </div>
  );
}

export default CountButton;
