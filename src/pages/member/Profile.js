import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import '../../global.scss';
import './style/Profile.scss';
import Swal from 'sweetalert2';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import axios from 'axios';
import { PROFILE_API, MY_HOST } from '../../config';
import { UPLOAD_AVATAR_API, userImg } from '../../config';
import AuthContext from '../member/context/AuthContext';
import { pick } from 'lodash';
import proSetImg from './prosetImg.png';

function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    telephone: '',
    sid: JSON.parse(localStorage.getItem('auth')).sid,
  });

  const [placeHolderValue, setPlaceHolderValue] = useState({});

  const [selectPic, setSelectPic] = useState(null);

  // 預覽圖片
  const [preview, setPreview] = useState('');

  const { myAuth, setMyAuth } = useContext(AuthContext);
  // const [avatar, setAvatar] = useState({
  //   sid: JSON.parse(localStorage.getItem('auth')).sid,
  // });
  //console.log(formData);

  //  把資料存進placeholder
  useEffect(() => {
    setPlaceHolderValue({ name: myAuth.username, telephone: myAuth.telephone });
  }, []);

  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectPic) {
      setPreview('');
      return;
    }

    const objectUrl = URL.createObjectURL(selectPic);
    // console.log(objectUrl);
    setPreview(objectUrl);

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectPic]);

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({ ...formData, [id]: val });
  };
  const handleOnClickUpload = (e) => {
    const id = e.currentTarget.id;
    const file = e.currentTarget.files[0];
    // setFormData({ ...formData, [id]: file });
    if (file) {
      setSelectPic(file);
    }
  };
  // console.log(handleOnClickUpload);

  const mySubmit = async (e) => {
    e.preventDefault();
    const picForm = new FormData();
    picForm.append('avatar', selectPic);
    picForm.append('sid', formData.sid);
    const image = await axios.post(UPLOAD_AVATAR_API, picForm);
    // console.log('picForm',picForm);
    // console.log(image);

    if (formData.username !== '' && formData.telephone !== '') {
      const { data } = await axios.put(PROFILE_API, formData);
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: '儲存成功',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
        let r = await axios.get(
          `http://localhost:3001/member/api/information/${
            JSON.parse(localStorage.getItem('auth')).sid
          }`
        );
        console.log(r.data, myAuth);
        setMyAuth({
          ...myAuth,
          member_img: r.data[0].member_img,
          username: r.data[0].username,
          telephone: r.data[0].telephone,
        });
        return;
      } else {
        Swal.fire({
          icon: 'error',
          title: '儲存失敗',
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
        return;
      }
    }
    if (image) {
      let r = await axios.get(
        `http://localhost:3001/member/api/information/${
          JSON.parse(localStorage.getItem('auth')).sid
        }`
      );
      // console.log(r.data);
      setMyAuth({ ...myAuth, member_img: r.data[0].member_img });
      Swal.fire({
        icon: 'success',
        title: '儲存成功',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '儲存失敗',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
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
              <div
                className="profile_img"
                style={
                  myAuth.member_img !== null
                    ? selectPic
                      ? {
                          backgroundImage: `url(${preview})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                        }
                      : {
                          backgroundImage: `url(${userImg}${myAuth.member_img}) `,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                        }
                    : selectPic
                    ? {
                        backgroundImage: `url(${preview})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                      }
                    : {
                        //  預設照片
                        backgroundImage: `url(${proSetImg}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                      }
                }
              >
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
                <label
                  className="form-label"
                  onClick={() => {
                    setFormData({
                      username: '我是編輯後',
                      telephone: '0980400300',
                      sid: JSON.parse(localStorage.getItem('auth')).sid,
                    });
                  }}
                >
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder={placeHolderValue.name}
                  onChange={handler}
                  value={formData.username}
                />
              </div>
              {/*  */}
              <div className="mb-3 profile-input">
                <label className="form-label">手機號碼</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telephone"
                  // required
                  // pattern="[0-9]{9}"
                  placeholder={placeHolderValue.telephone}
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
