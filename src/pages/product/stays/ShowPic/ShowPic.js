import React from 'react';
import './ShowPic.scss';

import pic1 from './Hotel_Pic/1-1.jpg';
import pic2 from './Hotel_Pic/1-2.jpg';
import pic3 from './Hotel_Pic/1-3.jpg';
import pic4 from './Hotel_Pic/1-4.jpg';

import HotelRomeData from './hotel_room.json';

function ShowPic() {
	// console.log(HotelRomeData);
	return (
		<>
			<div className="Hotel_showPic">
				<img src={pic1} alt="pic1"></img>
				<h5>行政雙人房</h5>
			</div>
			<div className="Hotel_showPic">
				<img src={pic2} alt="pic2"></img>
				<h5>豪華雙人房</h5>
			</div>
			<div className="Hotel_showPic">
				<img src={pic3} alt="pic3"></img>
				<h5>豪華三人房</h5>
			</div>
			<div className="Hotel_showPic">
				<img src={pic4} alt="pic4"></img>
				<h5>豪華四人房</h5>
			</div>
		</>
	);
}

export default ShowPic;
