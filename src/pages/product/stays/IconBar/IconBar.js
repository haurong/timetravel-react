import './IconBar.scss';
import React from 'react';
import { ReactComponent as MapMarker } from '../../../../icon/map_blue.svg';
import { ReactComponent as Stay } from '../../../../icon/stay.svg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdKingBed } from 'react-icons/md';
function IconBar(props) {
  return (
    <>
      <div className="d-flex IconBar">
        <div className="icon ">
          <MapMarker className="Hotel_Icon" />
        </div>
        <h5>{props.hotelListDataArea}</h5>
        <div className="icon">
          <Stay className="Hotel_Icon" />
        </div>
        <h5>{props.hotelListDataCategories}</h5>
      </div>
    </>
  );
}

export default IconBar;
