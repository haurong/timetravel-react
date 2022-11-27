import React from 'react';
import './TagButton.scss';
import { ReactComponent as HomeTagBtn } from '../../../icon/food_white.svg';
function TagButton() {
	return (
		<>
			<button className="home_tag_btn">
				<p>美食</p>
				<div><HomeTagBtn className="home_tag_btn_icon icon" /></div>
			</button>
		</>
	);
}

export default TagButton;