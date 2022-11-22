import React from 'react';
import '../../global.scss';
import './style/Comment.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import CommentDetail from './CommentDetail';

function Comment() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="Comment-height">
            <div className="CommentDetail">
              <h1 className="m-0 text-start">我的評論</h1>
              <CommentDetail className="CommentDetail-card" />
              <CommentDetail />
              <CommentDetail />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Comment;
