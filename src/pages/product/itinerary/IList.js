import React, { useEffect, useState } from 'react';
import IDay from './IDay';
import Trash from './../../../icon/Trash.svg';
import { SITE_IMG } from './site-config';
import { Link } from 'react-router-dom';

export default function IList({ iData }) {
  // const [CN, setCN] = useState('');

  return (
    <div id="iList">
      <div>
        test
        {iData.map((el, i) => {
          return <p>{el.sid}</p>;
        })}
        {/* {iData} */}
        {/* {iData[0]} */}
        {/* {iData[0]} */}
      </div>
      <div
        id="d1"
        className="day day1 stickyt0"
        onClick={() => {
          document.querySelector('#iList').scrollTo({
            top: document.querySelector('#iItem1-1').offsetTop - 120,
            behavior: 'smooth',
          });
        }}
      >
        <h2>Day 1</h2>
        <h3>3個行程</h3>
      </div>
      <div className="iItem" id="iItem1-1">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText ">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
      <div className="iItem" id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
      <div className="iItem" id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>

      <div
        id="d2"
        className="day day2 stickyt50"
        onClick={() => {
          document.querySelector('#iList').scrollTo({
            top: document.querySelector('#iItem2-1').offsetTop - 120,
            behavior: 'smooth',
          });
        }}
      >
        <h2>Day 2</h2>
        <h3>3個行程</h3>
      </div>
      <div className="iItem" id="iItem2-1">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText ">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
      <div className="iItem" id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
      <div className="iItem" id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>

      <div
        id="d3"
        className="day day3 stickyt100"
        onClick={() => {
          document.querySelector('#iList').scrollTo({
            top: document.querySelector('#iItem3-1').offsetTop - 120,
            behavior: 'smooth',
          });
        }}
      >
        <h2>Day 3</h2>
        <h3>3個行程</h3>
      </div>
      <div className="iItem" id="iItem3-1">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText ">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
      <div className="iItem" id="iItem">
        <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
        <div className="iItemText">
          <h2>台北兒童樂園</h2>
          <p>台北市 士林區</p>
        </div>
        <span className="icon">
          <img src={Trash} alt="" />
        </span>
      </div>
      <div className="iItem" id="iItem">
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
