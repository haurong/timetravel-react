import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

import './Layout.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function Layout() {
  const [show, setShow] = useState(true);

  // useScrollPosition(({ prevPos, currPos }) => {
    // 這裡可以監視目前的捲軸狀態
  //   console.log(currPos.x);
  //   console.log(currPos.y);
  //   if (currPos.y < -300) {
  //     setShow(false);
  //   } 
  //   else {
  //     setShow(true);
  //   }
  // });

  return (
    <>
      {/* 導覽列 */}
      {/* <NavbarIndex /> */}

      <NavBar className={show ? 'nav-normal' : 'nav-hide'} />

      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

      {/* 頁尾資訊 */}
      <Footer />
    </>
  );
}
export default Layout;
