import React, { useEffect, useState } from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import SideBar from '../../../layout/SideBar';
import OrdersDetail from './OrdersDetail';
import axios from 'axios';
import { ORDERS_API } from '../../../config';
import { useLocation } from 'react-router-dom';
function Orders() {
  const { location } = useLocation();
  const member_sid = JSON.parse(localStorage.getItem('auth')).sid;
  const [ordersData, setOrdersData] = useState([]);

  async function getOrders() {
    const response = await axios.get(ORDERS_API(member_sid));
    setOrdersData(response.data);
  }
  useEffect(() => {
    getOrders();
  }, [location]);
  // console.log(ordersData);
  return (
    <div className="orders-total-wrap">
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-9">
            <OrdersDetail ordersData={ordersData} memberSid={member_sid} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
