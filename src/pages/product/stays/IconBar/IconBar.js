import './IconBar.scss';
import React from 'react';
import { ReactComponent as MapMarker } from '../../../../icon/map_blue.svg';
import { ReactComponent as Stay } from '../../../../icon/stay.svg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdKingBed } from 'react-icons/md';
function IconBar() {
  return (
    <>
      <div className="d-flex IconBar">
        <div className="icon ">
          <MapMarker className="Hotel_Icon" />
        </div>
        <h5>三重區</h5>
        <div className="icon">
          <Stay className="Hotel_Icon" />
        </div>
        <h5>飯店</h5>
      </div>
    </>
  );
}

export default IconBar;
