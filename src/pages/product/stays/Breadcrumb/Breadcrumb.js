import './Breadcrumb.scss';
import { Breadcrumb } from 'antd';
import React from 'react';
import { useHotelContext } from '../Context/HotelContext';
function BreadcrumbHotel() {
  const { hotelListData } = useHotelContext();
  // console.log(hotelListData);
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
          <a href="#/">{hotelListData.hotel_categories}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="Breadcrumb_Here">
          <a href="#/">{hotelListData.product_name}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default BreadcrumbHotel;
