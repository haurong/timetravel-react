import React from 'react';
import { useState } from 'react';
import '../../global.scss';
import './style/Profile.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import axios from 'axios';
import { PROFILE_API } from '../../config';
import { UPLOAD_AVATAR_API } from '../../config';

function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    telephone: '',
    sid: JSON.parse(localStorage.getItem('auth')).sid,
  });
  // const [avatar, setAvatar] = useState({
  //   sid: JSON.parse(localStorage.getItem('auth')).sid,
  // });
  //console.log(formData);
  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({ ...formData, [id]: val });
  };
  const handleOnClickUpload = (e) => {
    const id = e.currentTarget.id;
    const file = e.currentTarget.files;
    setFormData({ ...formData, [id]: file });
  };
  console.log(handleOnClickUpload);

  const mySubmit = async (e) => {
    e.preventDefault();
    const { image } = await axios.post(UPLOAD_AVATAR_API);
    const { data } = await axios.put(PROFILE_API, formData);

    if (data.success && image) {
      alert('儲存成功');
    } else {
      alert('儲存失敗');
    }
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-5">
            <h1>修改個人資訊</h1>

            <form className="form" onSubmit={mySubmit}>
              <div className="profile_img">
                <img src="" />
                <div className="profile-hovor">
                  <label>
                    <input
                      type="file"
                      className="profile-input-text text-center"
                      id="avatar"
                      onChange={handleOnClickUpload}
                      files={formData.avatar}
                    />
                    <div className="profile-hovor-text text-center">編輯</div>
                  </label>

                  <div className="profile-hovor-bg text-center"></div>
                </div>
              </div>
              <div className="mb-3 profile-input">
                <label className="form-label ">姓名</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="王小明"
                  onChange={handler}
                  value={formData.name}
                />
              </div>
              {/*  */}
              <div className="mb-3 profile-input">
                <label className="form-label">手機號碼</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telephone"
                  required
                  pattern="[0-9]{9}"
                  placeholder="09xxxxxxxx"
                  onChange={handler}
                  value={formData.telephone}
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
