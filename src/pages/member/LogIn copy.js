import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import '../member/style/LogIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import EyeClosed from '../../icon/eye_closed.svg';
import Eye from '../../icon/eye.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOGIN_API } from '../../config';
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setMyAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
  const [passwordFieldType, setPasswordFieldType] = useState('password');

  //const emailRule = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});

    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(LOGIN_API, formData);
    //console.log(data);
    if (data.success) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      console.log(JSON.stringify(data));
      setMyAuth({ ...data.auth, authorised: true });
      navigate('/');
    } else {
      localStorage.removeItem('auth'); // 移除
      alert('登入失敗');
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
              <h1 className="login-text text-center pb-5">登入</h1>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@mail.com"
                  id="email"
                  onChange={handler}
                  value={formData.email}
                />
                {validate ? (
                  <p className="error-text">{/* TODO放入提示訊息 */}</p>
                ) : null}
              </div>

              <div className="mb-3">
                <label className="form-label">密碼</label>
                <div className="password-group">
                  <input
                    type={passwordFieldType}
                    className="form-control"
                    placeholder="8位以上英數密碼，請區分大小寫"
                    id="password"
                    onChange={handler}
                    value={formData.password}
                  />
                  <button
                    className="icon login-eye-btn"
                    type="button"
                    onClick={() => {
                      setPasswordFieldType(
                        passwordFieldType === 'text' ? 'password' : 'text'
                      );
                    }}
                  >
                    {passwordFieldType === 'text' ? (
                      <div className="icon comment-icon">
                        <img src={EyeClosed} alt="" />
                      </div>
                    ) : (
                      <div className="icon comment-icon">
                        <img src={Eye} alt="" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-auto">
                <button
                  className="btn btn-primary login-button d-flex"
                  type="submit"
                >
                  登入
                </button>
                <p className="nosigning-text text-center">還沒註冊? </p>
                <Link className="signin-text" to="/signin">
                  立即註冊
                </Link>
              </div>
            </form>
          </div>
          <div className="form-bg"></div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
