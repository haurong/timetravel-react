import './Breadcrumb.scss';
import { Breadcrumb } from 'antd';
import React from 'react';
function breadcrumb() {
  return (
    <>
      <Breadcrumb className="TimeTravel_Breadcrumb">
        <Breadcrumb.Item className="Breadcrumb">
          {/* TODO:拿到真實路徑 */}TimeTravel
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb">
          <a href="#/">住宿</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb">
          <a href="#/">飯店</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb_Here">路徑行旅</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default breadcrumb;
