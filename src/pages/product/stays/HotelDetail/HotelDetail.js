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
						飯店名稱：路徑行旅
					</li>
					<li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						飯店電話：(03) 887 - 0099
					</li>
					<li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						飯店地址：花蓮縣瑞穗鄉溫泉一街 17 號
					</li>
					<li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						入住時間：15:00 以後
					</li>
					<li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						退房時間：11:00 以前
					</li>
				</ul>
			</h5>
		</>
	);
}

export default HotelDetail;
