import { Rate } from 'antd';
import React from 'react';
const rate = () => {
	return (
		<>
			<div className="d-flex align-items-center">
				{/* TODO:拿到評分數值後 取整數部分換成 defaultValue  */}
				<Rate disabled defaultValue={4} className="TimeTravel_Rate" />
				<div className="rate_text">
					<p>{/* TODO:拿到評分數值 */}4.3顆星</p>
				</div>
			</div>
		</>
	);
};
export default rate;
