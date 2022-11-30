import React, { useEffect, useState } from 'react';
import '../../global.scss';
import './style/Comment.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CommentDetail from './CommentDetail';
import { useCommentContext } from './context/CommentContext';
import { COMMENT_API } from '../../config';

function Comment() {
  const member_sid = JSON.parse(localStorage.getItem('auth')).sid;
  const location = useLocation();
  const { commentData, setCommentData } = useCommentContext();
  async function getComment() {
    const response = await axios.get(COMMENT_API(member_sid));
    setCommentData(response.data);
  }
  useEffect(() => {
    getComment();
  }, [location]);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="Comment-height">
            <div className="CommentDetail">
              <h1 className="m-0 text-start">我的評論</h1>
              <CommentDetail
                className="CommentDetail-card"
                rows={commentData}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Comment;
