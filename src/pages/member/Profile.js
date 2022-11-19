import React from 'react';
import '../../global.scss';
import './style/Profile.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';

function Profile() {
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

export default Profile;
