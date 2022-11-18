import React from 'react';
import '../member/style/SignIn.scss';
import '../../global.scss';
import Logo from '../../icon/logo/logo_white.svg';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <div className="container">
        <div className="row m-auto">
          <div className="m-flex">
            <Link className="logo m-auto" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <form class="form col-5 m-auto">
              <h1 className="login-text text-center">創建帳戶</h1>
              <p className="text-center">使用email註冊</p>
              <div class="mb-3">
                <label for="inputName" class="form-label">
                  姓名
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="王小明"
                  //placeholder文字顏色修改
                />
              </div>
              <div class="mb-3">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="example@mail.com"
                />
              </div>
              <div class="mb-3">
                <label for="inputPassword4" class="form-label">
                  密碼
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="8位以上英數密碼，請區分大小寫"
                />
              </div>
              <div class="mb-3">
                <label for="inputPassword4" class="form-label">
                  再次輸入密碼
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="請輸入相同密碼"
                />
              </div>
              <div class="mb-3 mx-auto">
                <button
                  type="submit"
                  class="btn btn-primary login-button d-flex"
                >
                  註冊
                </button>
                <p id="" className="nosigning-text text-center">
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
