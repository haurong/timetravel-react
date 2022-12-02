import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Trash from './../../../icon/Trash.svg';
import { ITINERARY_ITEM, SITE_IMG } from './site-config';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import { useItineraryContext } from './ItineraryContext';

export default function IList() {
  const { iData, setIData } = useItineraryContext();
  console.log(iData);
  // const [list, setList] = useState([]);
  // const [arr, setArr] = useState([]);
  // const [dList, setDlist] = useState([]);
  // const [dList1, setDlist1] = useState([]);
  // const [dList2, setDlist2] = useState([]);
  // const [dList3, setDlist3] = useState([]);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];

  async function getItemList() {
    const response = await axios.get(ITINERARY_ITEM + sid);
    setIData(response.data);
  }

  useEffect(() => {
    getItemList();
  }, [location]);

  useEffect(() => {}, [iData]);

  return (
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

        // console.log(list);
        const [remove] = iData.splice(source.index, 1);
        iData.splice(destination.index, 0, remove);

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
        setIData(iData);
      }}
    >
      {iData[0] ? (
        <Droppable droppableId="id" id="drop">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {iData.map((el, i) => {
                return (
                  <div key={i}>
                    <Draggable draggableId={i + ' '} index={i}>
                      {(p) => (
                        <div
                          className="iItem"
                          id={'iItem' + el.day + '-' + el.sequence}
                          {...p.draggableProps}
                          ref={p.innerRef}
                        >
                          <img
                            className="iItem-img"
                            src={SITE_IMG + el.img1}
                            alt=""
                          />
                          <div className="iItemText " {...p.dragHandleProps}>
                            <h2>{el.name}</h2>
                            <p>{el.city_name + ' ' + el.area_name}</p>
                          </div>
                          <span
                            className="icon"
                            onClick={() => {
                              const newData = iData;
                              const keep = newData.splice(i + 1);
                              setIData(keep);
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
      ) : (
        ''
      )}
    </DragDropContext>
  );
}
