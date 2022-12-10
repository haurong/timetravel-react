import React from 'react';
import './ButtonSign.scss';
import { NavLink } from 'react-router-dom';
function ButtonSign() {
  return (
    <>
      <button className="Bottom_Sign">
        <NavLink to="/signIn" className="homeSiginLink">
          立即註冊
        </NavLink>
      </button>
    </>
  );
}

export default ButtonSign;
