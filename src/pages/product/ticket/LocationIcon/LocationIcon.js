import React, { Component } from 'react';
import './LocationIcon.scss';
import { ReactComponent as MapIcon } from '../../../../icon/map.svg';
import { ReactComponent as TicketIcon } from '../../../../icon/ticket_white.svg';

function LocationIcon() {
  return (
    <>
      <div className="IconSection d-flex">
        <MapIcon className="MapIcon" />
        <h5>新北市</h5>
        <TicketIcon className="MapIcon" />
        <h5>票券</h5>
      </div>
    </>
  );
}

export default LocationIcon;
