import React from 'react';
import { useState, useContext } from 'react';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import axios from 'axios';
import { RESET_PASSWORD_API } from '../../config';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/context/AuthContext';

function ResetPassword() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    againNewPassword: '',
    sid: JSON.parse(localStorage.getItem('auth')).sid,
  });

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(RESET_PASSWORD_API, formData);

    if (data.success) {
      alert('重設密碼成功');
      navigate('/');
      e.preventDefault();
      logout();
    } else {
      alert('重設密碼失敗');
    }
  };
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-5">
            <h1>重設密碼</h1>
            <form className="form" onSubmit={mySubmit}>
              <div className="mb-3 profile-input">
                <label className="form-label">舊密碼</label>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  placeholder="請輸入舊密碼"
                  onChange={handler}
                  value={formData.oldPassword}
                />
              </div>
              <div className="mb-3 profile-input">
                <label className="form-label">新密碼</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="8位以上英數密碼，請區分大小寫"
                  onChange={handler}
                  value={formData.newPassword}
                />
              </div>
              <div className="mb-3 profile-input">
                <label className="form-label">再次輸入新密碼</label>
                <input
                  type="password"
                  className="form-control"
                  id="againNewPassword"
                  placeholder="請輸入相同密碼"
                  onChange={handler}
                  value={formData.againNewPassword}
                />
              </div>
              <div className="mb-3 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary profile-button d-flex mx-auto"
                >
                  儲存
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
