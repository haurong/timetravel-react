import React from 'react';
import { NavLink } from 'react-router-dom';
import '../global.scss';
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
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/profile">
              修改個人資料
            </NavLink>
          </li>
          <li className="sideBar-list ">
            <NavLink className="sideBar-link" to="/reset_password">
              重設密碼
            </NavLink>
          </li>
          <li className="sideBar-list ">
            <NavLink className="sideBar-link" to="/orders">
              訂單記錄
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/site">
              我的行程規劃
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/ticket_qrcode">
              我的票夾
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/comment">
              我的評論
            </NavLink>
          </li>
          <li className="sideBar-list">
            <NavLink className="sideBar-link" to="/collect">
              我的收藏
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
