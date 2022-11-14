import React from 'react';
import { BsFillDiamondFill } from 'react-icons/bs';
function HotelDetail() {
	return (
		<>
			<h5>
				<ul className="hotel_detail_ul">
					<li>
						<BsFillDiamondFill style={{ margin: '0px 8px', fontSize: '16px' }} />
						飯店名稱：路徑行旅
					</li>
					<li>
						<BsFillDiamondFill style={{ margin: '0px 8px', fontSize: '16px' }} />
						飯店電話：(03) 887 - 0099
					</li>
					<li>
						<BsFillDiamondFill style={{ margin: '0px 8px', fontSize: '16px' }} />
						飯店地址：花蓮縣瑞穗鄉溫泉一街 17 號
					</li>
					<li>
						<BsFillDiamondFill style={{ margin: '0px 8px', fontSize: '16px' }} />
						入住時間：15:00 以後
					</li>
					<li>
						<BsFillDiamondFill style={{ margin: '0px 8px', fontSize: '16px' }} />
						退房時間：11:00 以前
					</li>
				</ul>
			</h5>
		</>
	);
}

export default HotelDetail;
