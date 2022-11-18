import './Rate.scss';
import { Rate } from 'antd';
import React from 'react';
const rate = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        {/* TODO:拿到評分數值後 取整數部分換成 defaultValue  */}
        <Rate
          disabled
          allowHalf
          defaultValue={4.5}
          className="TimeTravel_Rate"
          style={{ zIndex: '-1' }}
        />
        <div className="rate_text">
          <p>{/* TODO:拿到評分數值 */}4.5顆星</p>
        </div>
      </div>
    </>
  );
};
export default rate;
