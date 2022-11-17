import { Breadcrumb } from 'antd';
import React from 'react';
import './Breadcrumb.scss';
// import 'antd/dist/antd.css';
function breadcrumb() {
  return (
    <>
      <Breadcrumb className="ticketBreadcrumb">
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">票券</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">作坊、體驗</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>九份茶坊</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default breadcrumb;
