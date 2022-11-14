import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdKingBed } from 'react-icons/md';
function IconBar() {
	return (
		<>
			<div className="d-flex IconBar">
				<FaMapMarkerAlt className="Hotel_Icon" />
				<h5>三重區</h5>
				<MdKingBed className="Hotel_Icon MdKingBed" />
				<h5>飯店</h5>
			</div>
		</>
	);
}

export default IconBar;
