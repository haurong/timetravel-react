import React from 'react';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';

function ResetPassword() {
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-5">
            <h1>重設密碼</h1>
            <form className="form">
              <div className="mb-3 profile-input">
                <label htmlFor="inputPassword4" className="form-label">
                  舊密碼
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="請輸入舊密碼"
                />
              </div>
              <div className="mb-3 profile-input">
                <label htmlFor="inputPassword4" className="form-label">
                  新密碼
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="8位以上英數密碼，請區分大小寫"
                />
              </div>
              <div className="mb-3 profile-input">
                <label htmlFor="inputPassword4" className="form-label">
                  再次輸入新密碼
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="請輸入相同密碼"
                />
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
