import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHotelContext } from './Context/HotelContext.js';
import { useLocation, NavLink } from 'react-router-dom';
import { HOTEL_LIST } from '../stays/hotel-config';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import CardList from '../../../Component/Card_List/Card_List_Hotel';
import Sidebar from '../../../Component/Sidebar1/Sidebar_Hotel';
import MyPagination from '../../../Component/Pagination/Pagination_Hotel';
import CommitSelector from '../food/CommentSelect';
import BreadCrumb from '../stays/Breadcrumb/Breadcrumb';
import HotelListSortSelector from './HotelListSortSelector/HotelListSortSelector.js';
import { ReactComponent as Sort } from '../../../icon/sort.svg';
import '../food/Food.scss';
import './Stays.scss';
import _ from 'lodash';

function Stays() {
  const {
    hotelAllData,
    setHotelAllData,
    setHotelSortData,
    setDisplayData,
    perPage,
    setPageTotal,
  } = useHotelContext();
  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const path = window.location.pathname.split('/');
  async function getList() {
    const response = await axios.get(HOTEL_LIST + `?` + usp.toString());
    console.log(response);
    setHotelAllData(response.data);
    setHotelSortData(response.data.rowsAll);
    const pageList = _.chunk(response.data.rowsAll, perPage);
    setDisplayData(pageList);
    setPageTotal(pageList.length);
  }
  // console.log(hotelAllData.rowsAll);
  // let a = hotelAllData.rowsAll.filter((v) => {
  //   return v.city_name === '新北市';
  // });
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
          <div className="d-flex hotelSort">
            <HotelListSortSelector />
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

export default Stays;
