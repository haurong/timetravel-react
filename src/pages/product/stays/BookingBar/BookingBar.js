import React from 'react';
import './BookingBar.scss';
import { useSlideOut } from '../Context/SlideOutContext';
function BookingBar() {
  const { slideOut, setSliderout } = useSlideOut();
  if (slideOut) {
    console.log('true');
  }
  return <div className="BookingBar">BookingBar</div>;
}

export default BookingBar;
