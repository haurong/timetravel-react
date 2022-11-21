import React from 'react';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
function TicketQRcode() {
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="givePadding profile_padding">
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TicketQRcode;
