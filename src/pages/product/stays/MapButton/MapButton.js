import React from 'react';
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
