import React, { useState } from 'react';
import IDay from './IDay';
import Trash from './../../../icon/Trash.svg';
import { SITE_IMG } from './site-config';
import { Link } from 'react-router-dom';

export default function IList() {
  const [CN, setCN] = useState('');
  function move() {
    const iList = document.querySelector('#iList');
    window.scrollTop = 100;
    // window.scrollTop = iList.offsetTop();
  }

  return (
    <div id="iList">
      <div className="day day1 stickyt0" onClick={move()}>
        <h2>Day 1</h2>
        <h3>3個行程</h3>
      </div>
      <div id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText ">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
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

      <div className="day day2 stickyt50">
        <h2>Day 2</h2>
        <h3>3個行程</h3>
      </div>
      <div id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText ">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
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

      <div className="day day3 stickyt100">
        <h2>Day 3</h2>
        <h3>3個行程</h3>
      </div>
      <div id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText ">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
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
      {/* <IDay day="day1" />
      <IDay day="day2" />
      <IDay day="day3" /> */}
    </div>
  );
}
