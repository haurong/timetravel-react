import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ITINERARY_LIST, ITINERARY_ADDLIST, SITE_IMG } from './site-config';
import { useItineraryContext } from './ItineraryContext';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import SideBar from '../../../layout/SideBar';
import ItineraryCardList from './ItineraryCardList';
import './Itinerary.scss';
import './../../member/style/Profile.scss';

function Itinerary() {
  // const [iData, setIData] = useState([]);
  const { iTData, setITData } = useItineraryContext();

  async function getList() {
    if (localStorage.getItem('auth') !== null) {
      const membersid = JSON.parse(localStorage.getItem('auth')).sid;
      const response = await axios.get(ITINERARY_LIST + '/' + membersid);
      setITData(response.data);
    }
  }

  const location = useLocation();

  useEffect(() => {
    getList();
  }, [location]);

  const newItinerary = async () => {
    const j = iTData.length;
    const { value: listname } = await Swal.fire({
      title: '新增行程名稱',
      input: 'text',
      inputValue: `我的行程${j + 1}`,
      confirmButtonText: '確認',
      confirmButtonColor: '#59d8a1',
      showCancelButton: true,
      cancelButtonText: '取消',
      cancelButtonColor: '#D9D9D9',
      allowOutsideClick: false,
      inputValidator: (value) => {
        if (!value) {
          return '請輸入行程名稱';
        }
      },
    });
    // const membersid = JSON.parse(localStorage.getItem('auth')).sid;
    // const listNumber = uuidv4();
    // const { data } = await axios.post(ITINERARY_ADDLIST, {
    //   member_sid: membersid,
    //   list_number: listNumber,
    //   list_name: listname,
    //   day: 1,
    //   status: 1,
    // });
    // iTData.push({
    //   member_sid: membersid,
    //   list_number: listNumber,
    //   list_name: listname,
    //   // day: 1,
    //   status: 1,
    // });
    // setITData(iTData);

    // if (listname.length > 1) {
    //   Swal.fire({
    //     icon: 'success',
    //     title: `新增成功`,
    //     confirmButtonText: '確認',
    //     confirmButtonColor: '#59d8a1',
    //   });
    // }

    //   } else {
    //     console.log('error1');
    //   }
    //   // window.location.reload();
  };

  return (
    <>
      <div className="orders-total-wrap">
        <NavBar />
        <div className="container">
          <div className="givePadding profile_padding d-flex">
            <SideBar />
            {/* <div className="profile col-9"> */}
            <div className=" col-9 CardListStyle">
              <div className="d-flex justify-content-between">
                <div className="ititlerow">
                  <h1 className="titlespace-x ps-3 ">我的行程規劃 </h1>
                  {iTData.length === 0 ? '' : <p>{iTData.length}個規劃</p>}
                </div>
                <button
                  type="button"
                  className="btn btn-primary btnstyle"
                  onClick={() => newItinerary()}
                  style={{ marginRight: '20px' }}
                >
                  新增規劃
                </button>
              </div>
              <ItineraryCardList rows={iTData} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Itinerary;
