import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss';

function SideBar() {
  return (
    <>
      <div className="sideBar_card col-3">
        <div className="sideBar_member">
          <div className="sideBar_img"></div>
          {/* <img className="sideBar_img" src="" /> */}
          <h2 className="sideBar_h2">朴吉米</h2>
        </div>
        <ul className="list-group list-group-flush sideBar-list-group">
          <li
            className={({ isActive }) =>
              [
                'sideBar-list p-3 hover:bg-indigo-600 duration-500',
                isActive ? 'router-link-active sideBar-list' : null,
              ].join(' ')
            }
          >
            <NavLink className="sideBar-link" to="/profile">
              修改個人資料
            </NavLink>
          </li>
          <li className="sideBar-list ">
            <NavLink className="sideBar-link" to="/profile">
              重設密碼
            </NavLink>
          </li>
          <li className="sideBar-list ">
            <NavLink className="sideBar-link" to="/cart">
              訂單記錄
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/profile">
              我的行程規劃
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/profile">
              我的票夾
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/profile">
              我的評論
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/profile">
              我的收藏
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
