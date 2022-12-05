import { Breadcrumb } from 'antd';
import React from 'react';
import './Breadcrumb.scss';
import { useHotelContext } from '../../stays/Context/HotelContext';
function breadcrumb() {
  
  return (
    <>
      <Breadcrumb className="TimeTravel_Breadcrumb">
        <Breadcrumb.Item className="Breadcrumb">
          <a href="/">首頁</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb">
          <a href="/">票券</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb">
          <a href="/">樂園、戶外</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb_Here">
          台北兒童新樂園｜一日票
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default breadcrumb;
