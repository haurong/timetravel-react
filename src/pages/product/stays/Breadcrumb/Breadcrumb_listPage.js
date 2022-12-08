import './Breadcrumb.scss';
import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHotelContext } from '../Context/HotelContext';
function BreadcrumbHotel() {
  const { hotelSort, setBreadCrumbText, breadCrumbText } = useHotelContext();

  useEffect(() => {
    switch (hotelSort.cate) {
      case 'cate_Hotel_1':
        setBreadCrumbText('旅館');
        break;
      case 'cate_Hotel_2':
        setBreadCrumbText('飯店');
        break;
      case 'cate_Hotel_3':
        setBreadCrumbText('民宿');
        break;
      // 指所有的產品都出現
      case 'cate_Hotel_All':
        setBreadCrumbText('全部');
        break;
      default:
        break;
    }
  }, [hotelSort.cate]);

  // console.log(hotelListData);
  return (
    <>
      <Breadcrumb className="TimeTravel_Breadcrumb">
        <Breadcrumb.Item className="Breadcrumb">
          {/* TODO:拿到真實路徑 */} <a href="#/">首頁</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb">
          <a href="#/">住宿</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb">
          <a href="#/" className="Breadcrumb_Here">
            {breadCrumbText}
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default BreadcrumbHotel;
