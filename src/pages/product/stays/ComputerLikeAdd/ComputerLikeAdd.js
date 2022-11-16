import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import './ComputerLikeAdd.scss';

function ComputerLikeAdd() {
	return (
		<>
			<div
				className="LikeAddOnCom"
				onClick={() => {}}
				style={{
					width: '40px',
					height: '40px',
					padding: '8px',
					// marginRight: '20px',
				}}
			>
				{/* TODO:點下去變色 加入收藏 */}
				{/* <BsHeart
						style={{
							width: '100%',
							height: '100%',
							transform: 'translateY(2px) translateX(5px)',
							color: '#aeaeae',
						}}
					/> */}
				<BsHeartFill
					style={{
						width: '100%',
						height: '100%',
						transform: 'translateY(2px) translateX(5px)',
						color: '#EA8A8A',
					}}
				/>
			</div>
			<div
				onClick={() => {}}
				style={{
					width: '40px',
					height: '40px',
					padding: '8px',
					marginRight: '5px',
				}}
			>
				{/* TODO:點下去變色 加入行成 */}
				{/* <FaCalendarAlt style={{ width: '100%', height: '100%', color: '#aeaeae' }} /> */}
				<FaCalendarAlt style={{ width: '100%', height: '100%', color: '#59D8A1' }} />
			</div>
		</>
	);
}

export default ComputerLikeAdd;
