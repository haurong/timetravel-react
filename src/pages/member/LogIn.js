import React from 'react';
import '../member/style/LogIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function logIn() {
  return (
    <>
      <div className="container ">
        <div className="row m-auto">
          <div className="m-flex">
            <Link className="logo m-auto" to="/">
              <img src={Logo} alt="logo" />
            </Link>

            <Form className="form col-5 m-auto">
              <h1 className="login-text text-center pb-5">登入</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="8位以上英數密碼，請區分大小寫"
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

export default logIn;
