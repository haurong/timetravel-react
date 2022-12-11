import React from 'react';
import './HotelDetail.scss';
import { BsFillDiamondFill } from 'react-icons/bs';
// import { useHotelContext } from '../../../stays/Context/HotelContext';
import { useTicketContext } from '../../Context/TicketContext';
function HotelDetail() {
	const { ticketListData } = useTicketContext();
	return (
		<>
			<h5 className="tkDetail_address">
				<ul>
					<li>
						地址：{ticketListData.address}
					</li>
					{/* <li>
						<BsFillDiamondFill className="hotel_detail_BsFillDiamondFill" />
						地址：11169台北市士林區承德路五段55號 
					</li> */}
					
				</ul>
			</h5>
		</>
	);
}

export default HotelDetail;
