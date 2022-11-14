import React from 'react';
import './MapButton.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';
function MapButton() {
	return (
		<>
			<button className="map_button">
				<FaMapMarkerAlt className="map_button_icon" />
				查看地圖
			</button>
		</>
	);
}

export default MapButton;
