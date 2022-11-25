import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../icon/logo/logo_white.svg';
import FbIcon from '../icon/fb.svg';
import IgIcon from '../icon/ig.svg';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="logo-icon givePadding">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" width="160" height="33" />
            </Link>
            <span className="icon">
              <img className="ig" src={IgIcon} alt="ig" />
            </span>
            <span className="icon">
              <img className="fb" src={FbIcon} alt="fb" />
            </span>
          </div>
          <div className="footer-line"></div>
          <div className="footer-text d-flex givePadding">
            <p>E-mail：service@TimeTravel.com</p>
            <p className="copyright">
              COPYRIGHT © 2022 TimeTravel All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
