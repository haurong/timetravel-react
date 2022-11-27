import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './Footer';
// import NavbarIndex from './NavBarIndex';
import NavBarIndex2 from './NavBarIndex2';
import './NavBarIndex2.scss';
// import './Layout.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function Layout() {
  const [show, setShow] = useState()
  return (
    <>
      {/* 導覽列 */}
      {/* <NavbarIndex /> */}

      <NavBarIndex2
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
        className={ show ? 'nav-normal' : 'nav-hide' }
      />


      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

      {/* 頁尾資訊 */}
      <Footer />
    </>
  );
}
export default Layout;
