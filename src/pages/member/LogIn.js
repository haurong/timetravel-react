import React from 'react';
import '../member/style/LogIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function logIn() {
  return (
    <>
      <div className="container">
        <div className="row m-auto">
          <div className="m-flex">
            <div className="logo m-auto col-6">
              <img src={Logo} alt="logo" />
            </div>
            <Form className="form col-6 m-auto padding-form">
              <h1 className="login-text text-center pb-5">登入</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="8位以上英數密碼，請區分大小寫"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="mx-auto" variant="primary" type="submit">
                登入
              </Button>
            </Form>
          </div>
          <div className="form-bg"></div>
        </div>
      </div>
    </>
  );
}

export default logIn;
