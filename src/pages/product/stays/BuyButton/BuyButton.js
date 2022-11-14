import React from 'react';

function BuyButton() {
	return (
		<>
			<div>
				<button className="BottomBar_Buy_Right" style={{ backgroundColor: '#63D2FF' }}>
					加入購物車
				</button>
			</div>
			<div>
				<button className="BottomBar_Buy_Right" style={{ backgroundColor: '#59d8a1' }}>
					立即訂購
				</button>
			</div>
		</>
	);
}

export default BuyButton;
