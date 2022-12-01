import React from 'react';
import axios from 'axios';
import ITINERARY_EDITITEM from './site-config';

export default function ITitleBtns() {
  const mySubmit = async (e) => {
    e.preventDefault();
    // const { data } = await axios.post(ITINERARY_EDITITEM, list); //TODO
    // console.log(data);
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
