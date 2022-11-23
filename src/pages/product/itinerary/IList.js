import React, { useEffect, useState } from 'react';
import Trash from './../../../icon/Trash.svg';
import { SITE_IMG } from './site-config';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'leaflet';

export default function IList({ iData }) {
  // const [CN, setCN] = useState('');

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="id">
        {(provided) => (
          <>
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
            {/* <Draggable> */}
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
            {/* </Draggable>
            <Draggable> */}
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
            {/* </Draggable>
            <Draggable> */}
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
            {/* </Draggable> */}
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
            {/* <Draggable> */}
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
            {/* </Draggable>
            <Draggable> */}
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
            {/* </Draggable>
            <Draggable> */}
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
            {/* </Draggable> */}
            <div
              id="d3"
              className="day day3 stickyt0"
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
            {/* <Draggable> */}
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
            {/* </Draggable>
            <Draggable> */}
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
            {/* </Draggable>
            <Draggable> */}
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
            {/* </Draggable> */}
          </>
        )}
      </Droppable>
    </DragDropContext>

    // {/* <div
    //   id="d1"
    //   className="day day1 stickyt0"
    //   onClick={() => {
    //     document.querySelector('#iList').scrollTo({
    //       top: document.querySelector('#iItem1-1').offsetTop - 120,
    //       behavior: 'smooth',
    //     });
    //   }}
    // >
    //   <h2>Day 1</h2>
    //   <h3>3個行程</h3>
    // </div>
    // <div className="iItem" id="iItem1-1">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText ">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>
    // <div className="iItem" id="iItem">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>
    // <div className="iItem" id="iItem">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>

    // <div
    //   id="d2"
    //   className="day day2 stickyt50"
    //   onClick={() => {
    //     document.querySelector('#iList').scrollTo({
    //       top: document.querySelector('#iItem2-1').offsetTop - 120,
    //       behavior: 'smooth',
    //     });
    //   }}
    // >
    //   <h2>Day 2</h2>
    //   <h3>3個行程</h3>
    // </div>
    // <div className="iItem" id="iItem2-1">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText ">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>
    // <div className="iItem" id="iItem">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>
    // <div className="iItem" id="iItem">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>

    // <div
    //   id="d3"
    //   className="day day3 stickyt0"
    //   onClick={() => {
    //     document.querySelector('#iList').scrollTo({
    //       top: document.querySelector('#iItem3-1').offsetTop - 120,
    //       behavior: 'smooth',
    //     });
    //   }}
    // >
    //   <h2>Day 3</h2>
    //   <h3>3個行程</h3>
    // </div>
    // <div className="iItem" id="iItem3-1">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText ">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>
    // <div className="iItem" id="iItem">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div>
    // <div className="iItem" id="iItem">
    //   <img className="iItem-img" src={SITE_IMG + '/6.jpg'} alt="" />
    //   <div className="iItemText">
    //     <h2>台北兒童樂園</h2>
    //     <p>台北市 士林區</p>
    //   </div>
    //   <span className="icon">
    //     <img src={Trash} alt="" />
    //   </span>
    // </div> */}
  );
}
