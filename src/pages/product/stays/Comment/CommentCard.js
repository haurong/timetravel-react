import React from 'react';
import { Rate } from 'antd';

function CommentCard() {
	return (
		<div className="Comment_Bottom">
			<div className="Comment_Card">
				<div style={{ marginBottom: '30px' }} className="d-flex">
					<div
						style={{
							borderRadius: '50%',
							backgroundColor: '#ccc',
							width: '50px',
							height: '50px',
							marginRight: '50px',
						}}
					></div>
					<div style={{ marginRight: 'auto' }}>
						<p style={{ marginBottom: '-8px', fontSize: '18px', color: '#8A8A8A' }}>
							花花
						</p>
						<Rate disabled defaultValue={4} className="TimeTravel_Rate" />
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<div style={{ color: '#8A8A8A' }}>2022/11/24</div>
					</div>
				</div>
				<div style={{ fontSize: '14px', lineHeight: '28px', color: '#4D4D4D' }}>
					已經成為每次帶小孩去墾丁的口袋景點之一了，除了可以消耗時間，小孩也能增長許多豐富的知識，每次都很依依不捨的離開呢！
				</div>
			</div>
		</div>
	);
}

export default CommentCard;
