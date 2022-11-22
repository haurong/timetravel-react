import React from 'react';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import Card1 from '../../Component/Card_List/Card';

function Collect() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="col-9">
            <div className="d-flex mb-4">
              <h1 className="ps-5 m-0">我的收藏</h1>
              <p className="m-auto ms-3">3 個行程在您的收藏</p>
            </div>
            <div className="d-flex">
              <Card1 />
              <Card1 />
              <Card1 />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collect;
