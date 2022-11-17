import React from 'react';
import { useContext, useState } from 'react';
import axios from 'axios';
import { LOGIN_API } from '../my-config';
import AuthContext from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../member/style/LogIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LogIn() {
  const { setMyAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    account: '',
    password: '',
  });

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});

    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(LOGIN_API, formData);
    console.log(data);
    if (data.success) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      alert('登入成功');
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
      <div className="container ">
        <div className="row m-auto">
          <div className="m-flex">
            <Link className="logo m-auto" to="/">
              <img src={Logo} alt="logo" />
            </Link>

            <Form className="form col-5 m-auto" onSubmit={mySubmit}>
              <h1 className="login-text text-center pb-5">登入</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@mail.com"
                  id="account"
                  onChange={handler}
                  value={formData.account}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="8位以上英數密碼，請區分大小寫"
                  id="password"
                  onChange={handler}
                  value={formData.password}
                />
                <Link className="forget-password-text" to="/forget_password">
                  忘記密碼？
                </Link>
              </Form.Group>
              <div className="mx-auto">
                <Button
                  className="login-button d-flex"
                  variant="primary"
                  type="submit"
                >
                  登入
                </Button>
                <Form.Text className="nosigning-text">還沒註冊? </Form.Text>
                <Link className="signin-text" to="/signin">
                  立即註冊
                </Link>
              </div>
            </Form>
          </div>
          <div className="form-bg"></div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
