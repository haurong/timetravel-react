import './IconBar.scss';
import React from 'react';
import { ReactComponent as MapMarker } from '../../../../../icon/map_blue.svg';
import { ReactComponent as Ticket } from '../../../../../icon/ticket.svg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdKingBed } from 'react-icons/md';
function IconBar(props) {
  return (
    <>
      <div className="d-flex IconBar">
        <div>
          <MapMarker className="tkDetail_Icon" />
        </div>
        <p className="tkDetail_Icon_p">
          {props.ticketListDataCity} | {props.ticketListDataArea}
        </p>
        <div>
          <Ticket className="tkDetail_Icon" />
        </div>
        <p className="tkDetail_Icon_p">{props.ticketListDataCategories}</p>
      </div>
    </>
  );
}

export default IconBar;
