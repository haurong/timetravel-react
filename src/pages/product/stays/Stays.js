import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHotelContext } from './Context/HotelContext.js';
import { useLocation, NavLink } from 'react-router-dom';
import { HOTEL_LIST } from '../stays/hotel-config';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import CardList from '../../../Component/Card_List/Card_List_Hotel';
import Sidebar from '../../../Component/Sidebar1/Sidebar1';
import MyPagination from '../../../Component/Pagination/Pagination';
import CommitSelector from '../food/CommitSelect';
import BreadCrumb from '../stays/Breadcrumb/Breadcrumb';
import '../food/Food.scss';
import './Stays.scss';
function Food() {
  const { hotelAllData, setHotelAllData, setHotelSortData, setDisplayData } =
    useHotelContext();
  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const path = window.location.pathname.split('/');
  async function getList() {
    const response = await axios.get(HOTEL_LIST + `?` + usp.toString());
    // console.log(response.data);
    setHotelAllData(response.data);
    setHotelSortData(response.data.rowsAll);
    setDisplayData(response.data.rowsAll);
  }
  // console.log(hotelAllData.rowsAll);
  let a = hotelAllData.rowsAll.filter((v) => {
    return v.city_name === '新北市';
  });
  // console.log(a);

  useEffect(() => {
    getList();
  }, [location]);
  return (
    <>
      <NavBar />
      <div className="space "></div>
      <div className="container col-12 givePadding ">
        <BreadCrumb hotelAllData={hotelAllData} />
      </div>
      <div className="container col-lg-12 d-flex foodContent">
        <div className="col-lg-3  px-3 " style={{ border: '1px solid green' }}>
          <Sidebar />
        </div>
        <div
          className="col-lg-9 col-md-12 px-3 mx-0 CardListStyle"
          style={{ border: '1px solid orange' }}
        >
          <div className="d-flex foodSort">
            <CommitSelector />
            <CommitSelector />
          </div>
          <CardList />
        </div>
      </div>
      <div className="foodPagination">
        <MyPagination
          page={hotelAllData.page}
          totalPages={hotelAllData.totalPages}
        />
      </div>

      <div className="givePadding"></div>

      <Footer />
    </>
  );
}

export default Food;
