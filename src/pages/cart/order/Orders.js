import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import SideBar from '../../../layout/SideBar';
import OrdersDetail from './OrdersDetail';
function orders() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-9">
            <OrdersDetail />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default orders;
