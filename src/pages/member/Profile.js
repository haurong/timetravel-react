import React from 'react';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';

function Profile() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding">
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
