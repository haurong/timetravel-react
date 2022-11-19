import React from 'react';
import { Link } from 'react-router-dom';
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
          <li className="sideBar-list ">
            <Link className="sideBar-link" to="/profile">
              修改個人資料
            </Link>
          </li>
          <li className="sideBar-list ">
            <Link className="sideBar-link" to="/profile">
              重設密碼
            </Link>
          </li>
          <li className="sideBar-list ">
            <Link className="sideBar-link" to="/cart">
              訂單記錄
            </Link>
          </li>
          <li className="sideBar-list">
            <Link className="sideBar-link" to="/profile">
              我的行程規劃
            </Link>
          </li>
          <li className="sideBar-list">
            <Link className="sideBar-link" to="/profile">
              我的票夾
            </Link>
          </li>
          <li className="sideBar-list">
            <Link className="sideBar-link" to="/profile">
              我的評論
            </Link>
          </li>
          <li className="sideBar-list">
            <Link className="sideBar-link" to="/profile">
              我的收藏
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
