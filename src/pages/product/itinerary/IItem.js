import React from 'react';
import { SITE_IMG } from './site-config';
import Trash from './../../../icon/Trash.svg';

export default function IItem() {
  return (
    <div id="iItem">
      <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
      <div className="iItemText">
        <h2>台北兒童樂園</h2>
        <p>台北市 士林區</p>
      </div>

      <span className="icon">
        <img src={Trash} alt="" />
      </span>
    </div>
  );
}
