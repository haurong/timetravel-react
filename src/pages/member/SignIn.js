import React from 'react';
import { useState, useEffect } from 'react';
import '../member/style/SignIn.scss';
import '../../global.scss';
import Swal from 'sweetalert2';
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
  });
  const [errorMsg, setErrorMsg] = useState({
    username: '',
    email: '',
    password: '',
    againPassword: '',
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
    // if (value.username !== '')
    //   value.errorMsg.username = validateUsername(value);
    // if (value.email !== '') value.errorMsg.email = validateEmail(value);
    // if (value.password !== '')
    //   value.errorMsg.password = validatePassword(value);
    // if (value.againPassword !== '')
    //   value.errorMsg.againPassword = validateAgainPassword(value);
    // return (
    //   value.errorMsg.username === '' &&
    //   value.errorMsg.email === '' &&
    //   value.errorMsg.password === '' &&
    //   value.errorMsg.againPassword === ''
    // );
    if (value.username !== '') {
      return false;
    } else if (value.email !== '') {
      return false;
    } else if (value.password !== '') {
      return false;
    } else if (value.againPassword !== '') {
      return false;
    } else {
      return true;
    }
  };

  const handlerUsernameChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };

  const handlerEmailChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };

  const handlerPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };

  const handlerAgainPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };

  // const handler = (e) => {
  //   const id = e.currentTarget.id;
  //   const val = e.currentTarget.value;

  //   setFormData({ ...formData, [id]: val });
  // };

  const mySubmit = async (e) => {
    e.preventDefault();
    // if (formData.username.length === 0) {
    //   setErrorMsg({
    //     username: '請輸入姓名',
    //     email: errorMsg.email,
    //     password: errorMsg.password,
    //     againPassword: errorMsg.againPassword,
    //   });
    //   return;
    // }
    // if (formData.email.length === 0) {
    //   setErrorMsg({
    //     username: errorMsg.username,
    //     email: '請輸入信箱',
    //     password: errorMsg.password,
    //     againPassword: errorMsg.againPassword,
    //   });
    //   return;
    // }
    // if (formData.password.length === 0) {
    //   setErrorMsg({
    //     username: errorMsg.username,
    //     email: errorMsg.email,
    //     password: '請輸入密碼',
    //     againPassword: errorMsg.againPassword,
    //   });
    //   return;
    // }
    // if (formData.againPassword.length === 0) {
    // setErrorMsg({
    //   username: errorMsg.username,
    //   email: errorMsg.email,
    //   password: errorMsg.password,
    //   againPassword: '請再次輸入密碼',
    // });
    //   return;
    // }
    if (
      formData.username.length === 0 ||
      formData.email.length === 0 ||
      formData.password.length === 0 ||
      formData.againPassword.length === 0
    ) {
      setErrorMsg({
        username: validateUsername(formData),
        email: validateEmail(formData),
        password: validatePassword(formData),
        againPassword: validateAgainPassword(formData),
      });
      return;
    }
    if (validate(errorMsg)) {
      const { data } = await axios.post(SIGNIN_API, formData);
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: '註冊成功,請重新登入',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: '註冊失敗',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
      }
    }
  };
  // useEffect(() => {
  //   validate(formData);
  // }, [formData]);

  useEffect(() => {
    if (formData.username !== '') {
      let userNameErrorMsg = validateUsername(formData);
      setErrorMsg({
        username: userNameErrorMsg,
        email: errorMsg.email,
        password: errorMsg.password,
        againPassword: errorMsg.againPassword,
      });
    }
  }, [formData.username]);

  useEffect(() => {
    if (formData.email !== '') {
      let emailErrorMsg = validateEmail(formData);
      setErrorMsg({
        username: errorMsg.username,
        email: emailErrorMsg,
        password: errorMsg.password,
        againPassword: errorMsg.againPassword,
      });
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.password !== '') {
      let passwordErrorMsg = validatePassword(formData);
      setErrorMsg({
        username: errorMsg.username,
        email: errorMsg.email,
        password: passwordErrorMsg,
        againPassword: errorMsg.againPassword,
      });
    }
  }, [formData.password]);

  useEffect(() => {
    if (formData.againPassword !== '') {
      let againPasswordErrorMsg = validateAgainPassword(formData);
      setErrorMsg({
        username: errorMsg.username,
        email: errorMsg.email,
        password: errorMsg.password,
        againPassword: againPasswordErrorMsg,
      });
    }
  }, [formData.againPassword]);

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
                <label
                  className="form-label"
                  onClick={() => {
                    setFormData({
                      username: '我是使用者',
                      email: 'user@gmail.com',
                      password: 'Aa123456',
                      againPassword: 'Aa123456',
                    });
                  }}
                >
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="王小明"
                  onChange={handlerUsernameChange}
                  value={formData.username}
                />
                <p className="errorMsg">{errorMsg.username}</p>
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
                <p className="errorMsg">{errorMsg.email}</p>
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
                  <p className="errorMsg">{errorMsg.againPassword}</p>
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
