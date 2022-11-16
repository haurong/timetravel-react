import React from 'react';
// import { SITE_IMG } from './site-config';
import { SITE_IMG } from './site-config';

export default function IItem() {
  return (
    <div id="iItem">
      <p>item</p>
      <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    </div>
  );
}
