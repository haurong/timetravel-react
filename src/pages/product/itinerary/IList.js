import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Trash from './../../../icon/Trash.svg';
import { ITINERARY_ITEM, SITE_IMG } from './site-config';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import ThemeContext from './ThemeContext';

// dnd功能shinder建議取消，此頁面僅供瀏覽列表跟地圖
export default function IList() {
  const [list, setList] = useState([]);
  const [arr, setArr] = useState([]);
  const [dList, setDlist] = useState([]);
  const [dList1, setDlist1] = useState([]);
  const [dList2, setDlist2] = useState([]);
  const [dList3, setDlist3] = useState([]);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];

  async function getItemList() {
    const response = await axios.get(ITINERARY_ITEM + sid);
    const newData = response.data;
    console.log(response.data);
    // console.log(newData.filter((v) => v.sequence === 1));

    setList(response.data);
    setArr(response.data);

    setDlist(newData.filter((v) => v.sequence === 1));
    setDlist1(newData.filter((v) => v.day === 1));
    setDlist2(newData.filter((v) => v.day === 2));
    setDlist3(newData.filter((v) => v.day === 3));
  }

  useEffect(() => {
    getItemList();
  }, [location]);

  return (
    <ThemeContext.Provider value={{}}>
      <DragDropContext
        onDragEnd={(result) => {
          const { destination, source, draggableId } = result;
          if (!destination) {
            return;
          }
          if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
          ) {
            return;
          }
          // const column = this.state
          console.log(list);
          const [remove] = list.splice(source.index, 1);
          list.splice(destination.index, 0, remove);
          // for (let i = 0; i < list.length; i++) {
          //   if (i < 3) {
          //     list[i].day = 1;
          //   } else if (i < 6) {
          //     list[i].day = 2;
          //   } else {
          //     list[i].day = 3;
          //   }
          //   list[i].sequence = i;
          // }
          setList(list);
        }}
      >
        <Droppable droppableId="id" id="drop">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {arr.map((el, i) => {
                const d = list[i - 1] ? list[i - 1].day : 0;
                const dItem = +arr.filter((v) => v.day === el.day).length;

                return (
                  <div key={i}>
                    {/* {d !== el.day ? (
                      <div
                        key={i + '0'}
                        id={'day' + el.day}
                        className={'day stickyt' + el.day + ' day' + el.day}
                        onClick={() => {
                          document.querySelector('#iList').scrollTo({
                            top:
                              document.querySelector('#iItem' + el.day + '-1')
                                .offsetTop - 120,
                            behavior: 'smooth',
                          });
                        }}
                      >
                        <h2>{'Day' + el.day}</h2>
                        <h3>{dItem + '個行程'}</h3>
                      </div>
                    ) : (
                      ''
                    )} */}
                    <Draggable draggableId={i + ' '} index={i}>
                      {(p) => (
                        <div
                          className="iItem"
                          id={'iItem' + el.day + '-' + el.sequence}
                          {...p.draggableProps}
                          ref={p.innerRef}
                        >
                          {/* <img
                          className="iItem-img"
                          src={SITE_IMG + el.img1}
                          alt=""
                        /> */}
                          <div className="iItemText " {...p.dragHandleProps}>
                            <h2>{el.name}</h2>
                            <p>{el.city_name + ' ' + el.area_name}</p>
                          </div>
                          <span
                            className="icon"
                            onClick={() => {
                              const newArr = arr;
                              const keep = newArr.splice(i + 1);
                              setArr(keep);
                            }}
                          >
                            <img src={Trash} alt="" />
                          </span>
                        </div>
                      )}
                    </Draggable>
                  </div>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </ThemeContext.Provider>
  );
}
