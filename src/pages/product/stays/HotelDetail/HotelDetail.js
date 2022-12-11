import React from 'react';
import './HotelDetail.scss';
import { BsFillDiamondFill } from 'react-icons/bs';
import { useHotelContext } from '../Context/HotelContext';
function HotelDetail() {
  const { hotelListData } = useHotelContext();
  return (
    <>
      <div className="hotel_detail">
        <h5>
          <ul>
            <li>飯店名稱：{hotelListData.product_name}</li>
            <li>飯店電話：{hotelListData.phone}</li>
            <li>飯店地址：{hotelListData.address}</li>
            <li>入住時間：{hotelListData.check_in} 以後</li>
            <li>退房時間：{hotelListData.check_out} 以前</li>
          </ul>
        </h5>
      </div>
    </>
  );
}

export default HotelDetail;
