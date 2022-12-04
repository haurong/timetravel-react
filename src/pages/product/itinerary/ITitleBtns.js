import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ITINERARY_EDITITEM from './site-config';
import { useLocation } from 'react-router-dom';
import { ITINERARY_DELITEM, ITINERARY_ADDITEM } from './site-config';
import { useItineraryContext } from './ItineraryContext';

export default function ITitleBtns() {
  const { iData, setIData } = useItineraryContext();
  const location = useLocation();
  const mySubmit = async (e) => {
    const listNumber = location.pathname.split('/')[2];
    const { del } = await axios.delete(ITINERARY_DELITEM + listNumber, {
      list_number: listNumber,
    });
    console.log({ del });
    console.log(iData);
    console.log(iData[0]);
    for (let i = 0; i < iData.length; i++) {
      const { add } = await axios.post(ITINERARY_ADDITEM, iData[i]);
      console.log({ add });
    }
    Swal.fire({
      icon: 'success',
      title: '已儲存',
    });
  };
  return (
    <div id="iTitleBtns">
      <button type="button" className="btn btn-secondary" onClick={mySubmit}>
        儲存行程
      </button>
      <button type="button" className="btn btn-primary">
        加入購物車
      </button>
    </div>
  );
}
