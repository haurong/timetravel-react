import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

// import './Layout.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function Layout() {
  const [show, setShow] = useState()
  return (
    <>
      {/* 導覽列 */}
      {/* <NavbarIndex /> */}

      <NavBar />

      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

      {/* 頁尾資訊 */}
      <Footer />
    </>
  );
}
export default Layout;
