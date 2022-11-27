import React from 'react';
import './HotelDetail.scss';
import { BsFillDiamondFill } from 'react-icons/bs';
function HotelDetail() {
	return (
		<>
			<h5 className="hotel_detail">
				<ul>
					<li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						地點名稱：台北市兒童新樂園

					</li>
					<li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						地址：11169台北市士林區承德路五段55號 
					</li>
					
				</ul>
			</h5>
		</>
	);
}

export default HotelDetail;
