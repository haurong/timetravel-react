import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../global.scss';
import './SideBar.scss';
import AuthContext from '../pages/member/context/AuthContext';
import { userImg } from '../config';
import proSetImg from '../pages/member/prosetImg.png';

function SideBar() {
  const { myAuth } = useContext(AuthContext);
  return (
    <>
      <div className="sideBar_card col-3">
        <div className="sideBar_member">
          <div
            className="sideBar_img"
            style={
              myAuth.member_img !== null
                ? {
                    backgroundImage: `url(${userImg}${myAuth.member_img})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }
                : {
                    //預設照片
                    backgroundImage: `url(${proSetImg}) `,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                  }
            }
          ></div>
          {/* <img className="sideBar_img" src="" /> */}
          <h2 className="sideBar_h2">{myAuth.email}</h2>
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
            <NavLink className="sideBar-link" to="/itinerary">
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
