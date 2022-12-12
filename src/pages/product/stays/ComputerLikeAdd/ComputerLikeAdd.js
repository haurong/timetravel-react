import React, { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ReactComponent as Heart } from '../../../../icon/heart_gray.svg';
import { ReactComponent as FillHeart } from '../../../../icon/heart.svg';
import { ReactComponent as CalendarAdd } from '../../../../icon/calendar+add.svg';
import { ADD_COLLECT } from '../../../../config';
import { useHotelContext } from '../Context/HotelContext';
import axios from 'axios';
import { FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import './ComputerLikeAdd.scss';

import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import Calendar from '../../../../icon/calendar+add.svg';
import {
  ITINERARY_ADDITEM,
  ITINERARY_LIST,
  ITINERARY_ADDLIST,
} from '../../itinerary/site-config';

function ComputerLikeAdd() {
  const { hotelListData, collectItem, setCollectItem } = useHotelContext();
  // async function testList() {
  //   const res = await axios.get(
  //     `http://localhost:3001/productAll/checkCollect/36`
  //   );
  //   console.log(res.data);
  //   setCollectItem(res.data);
  // }
  // useEffect(() => {
  //   console.log('抓資料');
  //   testList();
  // }, []);
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[3];
  const [userData, setUserData] = useState([]);

  async function userDatas() {
    if (localStorage.getItem('auth') !== null) {
      const membersid = JSON.parse(localStorage.getItem('auth')).sid;
      const response = await axios.get(ITINERARY_LIST + '/' + membersid);
      setUserData(response.data);
    }
  }

  const [formData, setFormData] = useState({
    list_number: 0,
    day: 1,
    sequence: 10,
    category: 3,
    category_id: 288 + +sid,
    time: null,
  });

  const mySubmit = async () => {
    // 判斷是否登入 如果沒登入
    if (localStorage.getItem('auth') === null) {
      return await Swal.fire({
        title: '請先登入',
        confirmButtonText: '立即登入',
        confirmButtonColor: '#59d8a1',
        showCancelButton: true,
        cancelButtonText: '返回頁面',
        cancelButtonColor: '#D9D9D9',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = '/logIn';
        }
      });
    }
    let selOptions = {};
    let j = 1;
    userData.map((el, i) => {
      selOptions[i] = el.list_name;
      j++;
    });
    const newOpt = { ...selOptions, newList: `建立行程` };
    const { value: selected } = await Swal.fire({
      title: '新增至哪個行程?',
      input: 'select',
      inputOptions: newOpt,
      inputPlaceholder: '',
      confirmButtonText: '確認',
      confirmButtonColor: '#59d8a1',
      showCancelButton: true,
      cancelButtonText: '取消',
      cancelButtonColor: '#D9D9D9',
    });
    console.log(selected);

    if (selected === 'newList') {
      const { value: listname } = await Swal.fire({
        title: '新增行程名稱',
        input: 'text',
        inputValue: `我的行程${j}`,
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
        allowOutsideClick: false,
        inputValidator: (value) => {
          if (!value) {
            return '請輸入行程名稱';
          }
        },
      });

      const membersid = JSON.parse(localStorage.getItem('auth')).sid;
      const listNumber = uuidv4();
      const { data } = await axios.post(ITINERARY_ADDLIST, {
        member_sid: membersid,
        list_number: listNumber,
        list_name: listname,
        day: 1,
        status: 1,
      });
      if (data.success) {
        const { data } = await axios.post(ITINERARY_ADDITEM, {
          list_number: listNumber,
          day: 1,
          sequence: 10,
          category: 3,
          category_id: 288 + +sid,
          time: null,
        });
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: `新增成功`,
            confirmButtonText: '確認',
            confirmButtonColor: '#59d8a1',
          });
        } else {
          console.log('error1');
        }
      }
    } else if (selected <= userData.length) {
      setFormData({
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 3,
        category_id: 288 + +sid,
        time: null,
      });
      const { data } = await axios.post(ITINERARY_ADDITEM, {
        list_number: userData[selected].list_number,
        day: 1,
        sequence: 10,
        category: 3,
        category_id: 288 + +sid,
        time: null,
      });
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: `新增至${selOptions[selected]}`,
          confirmButtonText: '確認',
          confirmButtonColor: '#59d8a1',
        });
      } else {
        console.log('error2');
      }
    }
  };
  useEffect(() => {
    userDatas();
  }, [location]);

  useEffect(() => {
    console.log(collectItem);
  }, [collectItem]);
  const [likeAndCalendar, setLikeAndCalendar] = useState({
    like: false,
    calendar: false,
  });
  return (
    <>
      <div
        className="LikeAddOnCom icon ComputerLikeAdd_canTouch"
        onClick={() => {
          const member_sid = JSON.parse(localStorage.getItem('auth')).sid;
          const product_sid = hotelListData.sid;
          const collect_product_name = hotelListData.product_name;

          // setLikeAndCalendar({
          //   like: !likeAndCalendar.like,
          //   calendar: likeAndCalendar.calendar,
          // });
          if (collectItem.includes(hotelListData.product_name)) {
            const res = axios.post(
              'http://localhost:3001/productAll/DelCollect',
              {
                member_sid: member_sid,
                product_sid: product_sid,
                collect_product_name: collect_product_name,
              }
            );
            // console.log(res);
            setCollectItem(
              collectItem.filter((v) => {
                return v !== hotelListData.product_name;
              })
            );
          } else {
            setCollectItem([...collectItem, hotelListData.product_name]);
            const res = axios.post(ADD_COLLECT, {
              member_sid: member_sid,
              product_sid: product_sid,
              collect_product_name: collect_product_name,
            });
          }
        }}
      >
        {/* TODO:點下去變色 加入收藏 */}
        {collectItem.includes(hotelListData.product_name) ? (
          <FillHeart className="HotelHeart" />
        ) : (
          <Heart className="noActiveHotelHeart" />
        )}
        {/* <Heart className="noActiveHotelHeart" /> */}
        {/* <FillHeart className="HotelHeart" /> */}
      </div>
      <div
        className="icon ComputerLikeAdd_canTouch "
        onClick={() => {
          setLikeAndCalendar({
            like: likeAndCalendar.like,
            calendar: !likeAndCalendar.calendar,
          });
        }}
      >
        {/* TODO:點下去變色 加入行成 */}

        <CalendarAdd
          className="noActiveHotelCalendarAdd"
          onClick={() => {
            mySubmit();
          }}
        />

        {/* <CalendarAdd className="noActiveHotelCalendarAdd" /> */}
        {/* <CalendarAdd className="HotelCalendarAdd" /> */}
        {/* <button
          className="CalendarBtn"
          onClick={() => {
            mySubmit();
          }}
        >
          <img src={Calendar} className="Calendar_icon" alt="" />
        </button> */}
      </div>
    </>
  );
}

export default ComputerLikeAdd;
