import React from 'react';
import { useContext, useState, useEffect } from 'react';
import '../member/style/LogIn.scss';
import '../../global.scss';
import Swal from 'sweetalert2';
import Logo from '../../icon/logo/logo_white.svg';
import EyeClosed from '../../icon/eye_closed.svg';
import Eye from '../../icon/eye.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOGIN_API } from '../../config';
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

function LogIn() {
  const { setMyAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState({
    email: '',
    password: '',
  });
  const [passwordFieldType, setPasswordFieldType] = useState('password');

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
  const validate = (value) => {
    // if (value.email !== '') value.errorMsg.email = validateEmail(value);
    // if (value.password !== '')
    //   value.errorMsg.password = validatePassword(value);
    // return value.errorMsg.email === '' && value.errorMsg.password === '';
    if (value.email !== '') {
      return false;
    } else if (value.password !== '') {
      return false;
    } else {
      return true;
    }
  };
  const handlerEmailChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
    // if (formData.email !== '')
    //   formData.errorMsg.email = validateEmail(formData);
  };

  const handlerPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
    // if (formData.password !== '')
    //   formData.errorMsg.password = validatePassword(formData);
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    if (formData.email.length === 0 || formData.password.length === 0) {
      setErrorMsg({
        email: validateEmail(formData),
        password: validatePassword(formData),
      });
      return;
    }
    if (validate(errorMsg)) {
      const { data } = await axios.post(LOGIN_API, formData);
      //console.log(data);
      if (data.success) {
        localStorage.setItem('auth', JSON.stringify(data.auth));
        console.log(JSON.stringify(data));
        setMyAuth({ ...data.auth, authorised: true });
        navigate('/');
      } else {
        localStorage.removeItem('auth'); // 移除
        Swal.fire({
          icon: 'error',
          title: '帳號密碼錯誤',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
      }
    }
  };

  useEffect(() => {
    if (formData.email !== '') {
      let emailErrorMsg = validateEmail(formData);
      setErrorMsg({
        email: emailErrorMsg,
        password: errorMsg.password,
      });
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.password !== '') {
      let passwordErrorMsg = validatePassword(formData);
      setErrorMsg({
        email: errorMsg.email,
        password: passwordErrorMsg,
      });
    }
  }, [formData.password]);

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
                <label
                  className="form-label"
                  onClick={() => {
                    setFormData({
                      email: 'user@gmail.com',
                      password: 'Aa123456',
                    });
                  }}
                >
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="example@mail.com"
                  id="email"
                  onChange={handlerEmailChange}
                  value={formData.email}
                />
                <p className="errorMsg">{errorMsg.email}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">密碼</label>
                <div className="password-group">
                  <input
                    type={passwordFieldType}
                    className="form-control"
                    placeholder="8位以上英數密碼，請區分大小寫"
                    id="password"
                    onChange={handlerPasswordChange}
                    value={formData.password}
                  />
                  <p className="errorMsg">{errorMsg.password}</p>
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
