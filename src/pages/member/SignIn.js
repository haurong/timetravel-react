import React from 'react';
import { useState } from 'react';
import '../member/style/SignIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SIGNIN_API } from '../../config';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    againPassword: '',
  });

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;

    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(SIGNIN_API, formData);
    if (data.success) {
      alert('註冊成功');
      navigate('/');
    } else {
      alert('註冊失敗');
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-auto">
          <div className="m-flex">
            <Link className="logo m-auto" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <form className="form col-5 m-auto" onSubmit={mySubmit}>
              <h1 className="login-text text-center">創建帳戶</h1>
              <p className="text-center">使用email註冊</p>
              <div className="mb-3">
                <label className="form-label">姓名</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="王小明"
                  onChange={handler}
                  value={formData.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@mail.com"
                  onChange={handler}
                  value={formData.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">密碼</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="8位以上英數密碼，請區分大小寫"
                  onChange={handler}
                  value={formData.password}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">再次輸入密碼</label>
                <input
                  type="password"
                  className="form-control"
                  id="againPassword"
                  placeholder="請輸入相同密碼"
                  onChange={handler}
                  value={formData.againPassword}
                />
              </div>
              <div className="mb-3 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary login-button d-flex"
                >
                  註冊
                </button>
                <p className="nosigning-text text-center">
                  或是已有帳戶?
                  <Link className="signin-text" to="/logIn">
                    登入
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="form-bg"></div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
