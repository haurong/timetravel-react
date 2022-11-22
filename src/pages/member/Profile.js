import React from 'react';
import '../../global.scss';
import './style/Profile.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';

function Profile() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-5">
            <h1>修改個人資訊</h1>
            <div className="profile_img">
              <div className="profile-hovor">
                //TODO增加上傳檔案按鈕
                <div className="profile-hovor-text text-center">編輯</div>
                <div className="profile-hovor-bg text-center"></div>
              </div>
            </div>
            {/* <img className="profile_img" src="" /> */}

            <form className="form">
              <div className="mb-3 profile-input">
                <label htmlFor="inputName" className="form-label ">
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="王小明"
                />
              </div>
              <div className="mb-3 profile-input">
                <label htmlFor="inputEmail4" className="form-label">
                  手機號碼
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                  required
                  placeholder="09xx-xxx-xxx"
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

export default Profile;
