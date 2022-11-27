import React from 'react';
import './MobileFooter.scss';
import LogoIcon from '../../../../../icon/logo/logo_white.svg';
import FbIcon from '../../../../../icon/fb.svg';
import IgIcon from '../../../../../icon/ig.svg';
// import './../../../public/img/icon/logo/logo_white.svg';
function MobileFooter() {
  return (
    <div className=" MobileFooter justify-content-center">
      <div>
        <div className="d-flex justify-content-center">
          <img
            src={LogoIcon}
            alt=""
            style={{
              width: '160px',
              height: '33px',
              marginTop: '100px',
              marginBottom: '20px',
            }}
          ></img>
        </div>
        <div className="d-flex justify-content-center">
          <p style={{ color: 'white', fontSize: '14px', marginBottom: '50px' }}>
            E-mail：service@TimeTravel.com
          </p>
        </div>
        <hr
          style={{
            width: '85%',
            color: 'white',
            borderTop: '2px white solid',
            opacity: 1,
            margin: '0px auto 50px',
          }}
        />
        <div
          className="d-flex justify-content-center"
          style={{ marginBottom: '30px' }}
        >
          <img
            src={FbIcon}
            alt=""
            style={{
              width: '40px',
              height: '40px',
              margin: '0px 10px',
            }}
          ></img>
          <img
            src={IgIcon}
            alt=""
            style={{
              width: '40px',
              height: '40px',
              margin: '0px 10px',
            }}
          ></img>
        </div>
        <div className="d-flex justify-content-center">
          <p style={{ color: 'white', fontSize: '13px', marginBottom: '50px' }}>
            COPYRIGHT © 2022 TimeTravel All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
