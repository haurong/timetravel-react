import React from 'react';
import '../../global.scss';
import './style/CommentDetail.scss';
import Star_icon from '../../icon/star.svg';
import Edit from '../../icon/edit.svg';
import Trash from '../../icon/Trash.svg';

function CommentDetail() {
  return (
    <>
      <div className="card col-10 comment-card">
        <div className="card-body body-comment-padding">
          <div className="d-flex">
            <div className="comment_img"></div>
            {/* <img className="sideBar_img" src="" /> */}
            <div className="comment_title">
              <h2>欣葉日本料理 | 日式料理吃到飽</h2>
              <div className="d-flex">
                <div className="star_group star-comment-margin">
                  <img src={Star_icon} alt="" />
                  <img src={Star_icon} alt="" />
                  <img src={Star_icon} alt="" />
                  <img src={Star_icon} alt="" />
                  <img src={Star_icon} alt="" />
                </div>
                <p className="comment-time my-auto">2022/10/20</p>
              </div>
            </div>
            <div className="d-flex comment-icon-dlex my-auto">
              <div className="icon comment-icon">
                <img src={Edit} alt="" />
              </div>
              <div className="icon comment-icon ">
                <img src={Trash} alt="" />
              </div>
            </div>
          </div>
          <p className="card-text comment-body-text">
            已經成為每次帶小孩去墾丁的口袋景點之一了，除了可以消耗時間，小孩也能增長許多豐富的知識，每次都很依依不捨的離開呢！
          </p>
        </div>
      </div>
    </>
  );
}

export default CommentDetail;
