import React from 'react';
import Pic from './../../../../img/stay_home.jpg';
import Rate from '../../../product/stays/Rate/Rate';
function CardBodyTop({ productName }) {
  return (
    <div className="d-flex align-items-center">
      <div className="pic-wrap">
        <img alt="pic" src={Pic} />
      </div>
      <div className="card-body-top-text">
        <p>{productName}</p>
        <div className="score-wrap">
          <Rate
            disabled
            defaultValue={4}
            className="TimeTravel_Rate"
            style={{ zIndex: '-1' }}
          />
        </div>
      </div>
    </div>
  );
}

export default CardBodyTop;
