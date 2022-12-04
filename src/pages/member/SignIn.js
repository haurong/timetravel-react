import React from 'react';
import { useState, useEffect } from 'react';
import '../member/style/SignIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import EyeClosed from '../../icon/eye_closed.svg';
import Eye from '../../icon/eye.svg';
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
    errorMsg: {
      username: '',
      email: '',
      password: '',
      againPassword: '',
    },
  });

  const [passwordFieldType, setPasswordFieldType] = useState('password');
  const [passwordAgainFieldType, setPasswordAgainFieldType] =
    useState('password');

  const validateUsername = (value) => {
    let errorMsg = '';
    if (value.username.length === 0) {
      errorMsg = '請輸入姓名';
    }
    return errorMsg;
  };

  const validateEmail = (value) => {
    let errorMsg = '';
    const emailRule = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (value && value.email) {
      if (!emailRule.test(value.email)) {
        errorMsg = '請輸入正確格式的email';
      }
    } else {
      errorMsg = '請輸入email';
    }
    return errorMsg;
  };
  const validatePassword = (value) => {
    let errorMsg = '';
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (value && value.password) {
      if (!passwordRule.test(value.password)) {
        errorMsg = '請輸入8位以上英數密碼，區分大小寫';
      }
    } else {
      errorMsg = '請輸入密碼';
    }
    return errorMsg;
  };
  const validateAgainPassword = (value) => {
    let errorMsg = '';
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (value && value.againPassword) {
      if (!passwordRule.test(value.againPassword)) {
        errorMsg = '請輸入8位以上英數密碼，區分大小寫';
      } else if (value.password !== value.againPassword) {
        errorMsg = '密碼不相同';
      }
    } else {
      errorMsg = '請輸入密碼';
    }
    return errorMsg;
  };
  const validate = (value) => {
    if (value.username !== '')
      value.errorMsg.username = validateUsername(value);
    if (value.email !== '') value.errorMsg.email = validateEmail(value);
    if (value.password !== '')
      value.errorMsg.password = validatePassword(value);
    if (value.againPassword !== '')
      value.errorMsg.againPassword = validateAgainPassword(value);
    return (
      value.errorMsg.username === '' &&
      value.errorMsg.email === '' &&
      value.errorMsg.password === '' &&
      value.errorMsg.againPassword === ''
    );
  };

  const handlerUsernameChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
    if (formData.username !== '')
      formData.errorMsg.username = validateUsername(formData);
  };

  const handlerEmailChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
    if (formData.email !== '')
      formData.errorMsg.email = validateEmail(formData);
  };

  const handlerPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
    if (formData.password !== '')
      formData.errorMsg.password = validatePassword(formData);
  };

  const handlerAgainPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
    if (formData.againPassword !== '')
      formData.errorMsg.againPassword = validateAgainPassword(formData);
  };

  // const handler = (e) => {
  //   const id = e.currentTarget.id;
  //   const val = e.currentTarget.value;

  //   setFormData({ ...formData, [id]: val });
  // };

  const mySubmit = async (e) => {
    e.preventDefault();
    if (validate(formData)) {
      const { data } = await axios.post(SIGNIN_API, formData);
      if (data.success) {
        alert('註冊成功,請重新登入');
        navigate('/login');
      } else {
        alert('註冊失敗');
      }
    }
  };
  useEffect(() => {
    validate(formData);
  });

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
                  onChange={handlerUsernameChange}
                  value={formData.name}
                />
                <p className="errorMsg">{formData.errorMsg.username}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="example@mail.com"
                  onChange={handlerEmailChange}
                  value={formData.email}
                />
                <p className="errorMsg">{formData.errorMsg.email}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">密碼</label>
                <div className="password-group">
                  <input
                    type={passwordFieldType}
                    className="form-control"
                    id="password"
                    placeholder="8位以上英數密碼，請區分大小寫"
                    onChange={handlerPasswordChange}
                    value={formData.password}
                  />
                  <p className="errorMsg">{formData.errorMsg.password}</p>
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
              <div className="mb-3">
                <label className="form-label">再次輸入密碼</label>
                <div className="password-group">
                  <input
                    type={passwordAgainFieldType}
                    className="form-control"
                    id="againPassword"
                    placeholder="請輸入相同密碼"
                    onChange={handlerAgainPasswordChange}
                    value={formData.againPassword}
                  />
                  <p className="errorMsg">{formData.errorMsg.againPassword}</p>
                  <button
                    className="icon login-eye-btn"
                    type="button"
                    onClick={() => {
                      setPasswordAgainFieldType(
                        passwordAgainFieldType === 'text' ? 'password' : 'text'
                      );
                    }}
                  >
                    {passwordAgainFieldType === 'text' ? (
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
