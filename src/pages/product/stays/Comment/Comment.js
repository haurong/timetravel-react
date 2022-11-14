import React from 'react';
import { Rate } from 'antd';
import CommentCard from './CommentCard';

function Comment() {
	return (
		<div>
			<div className="Comment_Top">
				<span
					style={{
						fontSize: '40px',
						color: '#59d8a1',
						marginRight: '50px',
					}}
				>
					4.3
				</span>
				<div className="RateAndNumber">
					<Rate disabled defaultValue={4} className="TimeTravel_Rate" />
					<p style={{ color: '#8a8a8a' }}>437條評論</p>
				</div>
			</div>

			<CommentCard />
			<CommentCard />
			<CommentCard />
			<CommentCard />
			<CommentCard />
		</div>
	);
}

export default Comment;
