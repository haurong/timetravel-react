import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Trash from './../../../icon/Trash.svg';
import { ITINERARY_ITEM, SITE_IMG } from './site-config';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';

// dnd功能shinder建議取消，此頁面僅供瀏覽列表跟地圖
export default function IList({ iData }) {
  const [list, setList] = useState([]);
  // const [dList1, setDlist1] = useState([]);
  // const [dList2, setDlist2] = useState([]);
  // const [dList3, setDlist3] = useState([]);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];

  async function getItemList() {
    const response = await axios.get(ITINERARY_ITEM + sid);
    const newData = response.data;
    setList(response.data);
    // setDlist1(newData.filter((v) => v.day === 1));
    // setDlist2(newData.filter((v) => v.day === 2));
    // setDlist3(newData.filter((v) => v.day === 3));
  }

  useEffect(() => {
    getItemList();
  }, [location]);

  let arr = list;

  return (
    <DragDropContext
      onDragEnd={(result) => {
        // console.log(result);
        const { source, destination, draggableId } = result;
        if (!destination) {
          return;
        }

        console.log(list);
        const [remove] = list.splice(source.index, 1);
        list.splice(destination.index, 0, remove);
        setList(list);
      }}
    >
      <Droppable droppableId="id">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((el, i) => {
              const dList = +arr.filter((v) => v.day === el.day).length;
              {
                /* dList1[i].sequence = i; */
              }
              return (
                <>
                  {el.sequence === 1 ? (
                    <div
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
                      <h3>{dList + '個行程'}</h3>
                    </div>
                  ) : (
                    ''
                  )}
                  {/* {list.map((el, i) => {
                    return (
                      <Draggable draggableId={el.sid + ''} index={i}>
                        {(p) => (
                          <div
                            className="iItem"
                            id={'iItem' + el.day + '-' + el.sequence}
                            ref={p.innerRef}
                            {...p.draggableProps}
                            {...p.dragHandleProps}
                          >
                            <img
                              className="iItem-img"
                              src={SITE_IMG + el.img1}
                              alt=""
                            />
                            <div className="iItemText ">
                              <h2>{el.name}</h2>
                              <p>{el.city_name + ' ' + el.area_name}</p>
                            </div>
                            <span className="icon">
                              <img src={Trash} alt="" />
                            </span>
                          </div>
                        )}
                      </Draggable>
                    );
                  })} */}
                  <Draggable draggableId={el.sid + ' '} index={i}>
                    {(p) => (
                      <div
                        className="iItem"
                        id={'iItem' + el.day + '-' + el.sequence}
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                      >
                        <img
                          className="iItem-img"
                          src={SITE_IMG + el.img1}
                          alt=""
                        />
                        <div className="iItemText ">
                          <h2>{el.name}</h2>
                          <p>{el.city_name + ' ' + el.area_name}</p>
                        </div>
                        <span className="icon">
                          <img src={Trash} alt="" />
                        </span>
                      </div>
                    )}
                  </Draggable>
                </>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
