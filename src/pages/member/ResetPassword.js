import React from 'react';
import { useState, useContext, useEffect } from 'react';
import '../../global.scss';
import './style/ResetPassword.scss';
import Swal from 'sweetalert2';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import EyeClosed from '../../icon/eye_closed.svg';
import Eye from '../../icon/eye.svg';
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

  const [errorMsg, setErrorMsg] = useState({
    oldPassword: '',
    newPassword: '',
    againNewPassword: '',
  });

  const [passwordOldFieldType, setPasswordOldFieldType] = useState('password');
  const [passwordFieldType, setPasswordFieldType] = useState('password');
  const [passwordAgainFieldType, setPasswordAgainFieldType] =
    useState('password');

  const validateOldPassword = (value) => {
    let errorMsg = '';
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (value && value.oldPassword) {
      if (!passwordRule.test(value.oldPassword)) {
        errorMsg = '請輸入8位以上英數密碼，區分大小寫';
      }
    } else {
      errorMsg = '請輸入舊密碼';
    }
    return errorMsg;
  };

  const validateNewPassword = (value) => {
    let errorMsg = '';
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (value && value.newPassword) {
      if (!passwordRule.test(value.newPassword)) {
        errorMsg = '請輸入8位以上英數密碼，區分大小寫';
      }
    } else {
      errorMsg = '請輸入新密碼';
    }
    return errorMsg;
  };
  const validateAgainNewPassword = (value) => {
    let errorMsg = '';
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (value && value.againNewPassword) {
      if (!passwordRule.test(value.againNewPassword)) {
        errorMsg = '請輸入8位以上英數密碼，區分大小寫';
      } else if (value.newPassword !== value.againNewPassword) {
        errorMsg = '密碼不相同';
      }
    } else {
      errorMsg = '請輸入相同新密碼';
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
    if (value.oldPassword !== '') {
      return false;
    } else if (value.newPassword !== '') {
      return false;
    } else if (value.againNewPassword !== '') {
      return false;
    } else {
      return true;
    }
  };

  // const handler = (e) => {
  //   const id = e.currentTarget.id;
  //   const val = e.currentTarget.value;
  //   setFormData({ ...formData, [id]: val });
  // };

  const handlerOldPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };
  const handlerNewPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };
  const handlerAgainNewPasswordChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});
    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    if (
      formData.oldPassword.length === 0 ||
      formData.newPassword.length === 0 ||
      formData.againNewPassword.length === 0
    ) {
      setErrorMsg({
        oldPassword: validateOldPassword(formData),
        newPassword: validateNewPassword(formData),
        againNewPassword: validateAgainNewPassword(formData),
      });
      return;
    }
    const { data } = await axios.post(RESET_PASSWORD_API, formData);
    if (validate(errorMsg)) {
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: '重設密碼成功,請重新登入',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
        navigate('/');
        e.preventDefault();
        logout();
      } else {
        Swal.fire({
          icon: 'error',
          title: '重設密碼失敗',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
      }
    }
  };

  useEffect(() => {
    if (formData.oldPassword !== '') {
      let oldPasswordErrorMsg = validateOldPassword(formData);
      setErrorMsg({
        oldPassword: oldPasswordErrorMsg,
        newPassword: errorMsg.newPassword,
        againNewPassword: errorMsg.againNewPassword,
      });
    }
  }, [formData.oldPassword]);

  useEffect(() => {
    if (formData.newPassword !== '') {
      let newPasswordErrorMsg = validateNewPassword(formData);
      setErrorMsg({
        oldPassword: errorMsg.oldPassword,
        newPassword: newPasswordErrorMsg,
        againNewPassword: errorMsg.againNewPassword,
      });
    }
  }, [formData.newPassword]);

  useEffect(() => {
    if (formData.againNewPassword !== '') {
      let againNewPasswordErrorMsg = validateAgainNewPassword(formData);
      setErrorMsg({
        oldPassword: errorMsg.oldPassword,
        newPassword: errorMsg.newPassword,
        againNewPassword: againNewPasswordErrorMsg,
      });
    }
  }, [formData.againNewPassword]);

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
                <label
                  className="form-label"
                  onClick={() => {
                    setFormData({
                      oldPassword: 'Aa123456',
                      newPassword: 'Aa1234567',
                      againNewPassword: 'Aa1234567',
                      sid: JSON.parse(localStorage.getItem('auth')).sid,
                    });
                  }}
                >
                  舊密碼
                </label>
                <div className="password-group">
                  <input
                    type={passwordOldFieldType}
                    className="form-control"
                    id="oldPassword"
                    placeholder="請輸入舊密碼"
                    onChange={handlerOldPasswordChange}
                    value={formData.oldPassword}
                  />
                  <p className="errorMsg">{errorMsg.oldPassword}</p>
                  <button
                    className="icon login-eye-btn"
                    type="button"
                    onClick={() => {
                      setPasswordOldFieldType(
                        passwordOldFieldType === 'text' ? 'password' : 'text'
                      );
                    }}
                  >
                    {passwordOldFieldType === 'text' ? (
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
              <div className="mb-3 profile-input">
                <label className="form-label">新密碼</label>
                <div className="password-group">
                  <input
                    type={passwordFieldType}
                    className="form-control"
                    id="newPassword"
                    placeholder="8位以上英數密碼，請區分大小寫"
                    onChange={handlerNewPasswordChange}
                    value={formData.newPassword}
                  />
                  <p className="errorMsg">{errorMsg.newPassword}</p>
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
              <div className="mb-3 profile-input">
                <label className="form-label">再次輸入新密碼</label>
                <div className="password-group">
                  <input
                    type={passwordAgainFieldType}
                    className="form-control"
                    id="againNewPassword"
                    placeholder="請輸入相同密碼"
                    onChange={handlerAgainNewPasswordChange}
                    value={formData.againNewPassword}
                  />
                  <p className="errorMsg">{errorMsg.againNewPassword}</p>
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
