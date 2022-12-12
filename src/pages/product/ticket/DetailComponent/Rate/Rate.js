import './Rate.scss';
import { Rate } from 'antd';
import React from 'react';
// import { useHotelContext } from '../../../stays/Context/HotelContext';
import { useTicketContext } from '../../Context/TicketContext';
function RateHotel() {
  const { allStar } = useTicketContext();

  return (
    <>
      <div className="d-flex align-items-center">
        {/* TODO:拿到評分數值後 取整數部分換成 defaultValue  */}
        <Rate
          disabled
          value={allStar}
          className="TimeTravel_Rate"
          style={{ zIndex: '-1' }}
        />
        <div className="rate_text">
          <p>
            {/* TODO:拿到評分數值 */}
            {isNaN(allStar) ? '目前沒有評價' : `${allStar}顆星` }
          </p>
        </div>
      </div>
    </>
  );
}
export default RateHotel;
