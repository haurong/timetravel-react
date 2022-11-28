import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { FOOD_LIST } from '../../../config.js';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import CardList from '../../../Component/Card_List/Card_List';
import Sidebar from '../../../Component/Sidebar1/Sidebar1';
import MyPagination from '../../../Component/Pagination/Pagination';
import CommitSelector from './CommitSelect.js';
import BreadCrumb from './BreadCrumb';
import './Food.scss';
function Food() {
  const [foodData, setFoodData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });

  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const path = window.location.pathname.split('/');
  async function getList() {
    const response = await axios.get(FOOD_LIST + `?` + usp.toString());
    setFoodData(response.data);
  }
  console.log(foodData);
  useEffect(() => {
    getList();
  }, [location]);
  return (
    <>
      <NavBar />
      <div className="space "></div>
      <div className="container col-12 givePadding ">
        <BreadCrumb foodData={foodData} />
      </div>
      <div className="container col-lg-12 d-flex foodContent">
        <div
          className="col-lg-3  px-3 "
          // style={{ border: '1px solid green' }}
        >
          <Sidebar />
        </div>
        <div
          className="col-lg-9 col-md-12 px-3 mx-0 CardListStyle"
          // style={{ border: '1px solid orange' }}
        >
          <div className="d-flex foodSort">
            <CommitSelector />
            <CommitSelector />
          </div>
          <CardList rows={foodData.rows} />
        </div>
      </div>
      <div className="foodPagination">
        <MyPagination page={foodData.page} totalPages={foodData.totalPages} />
      </div>

      <div className="givePadding"></div>

      <Footer />
    </>
  );
}

export default Food;
