import { React, useState } from 'react';
import './TagButton.scss';
import { ReactComponent as HomeTagBtn } from '../../../icon/stay_white.svg';
function TagButton(props) {
  const [background, setBackground] = useState();

  return (
    <>
      <button className="home_tag_btn"

	//   onClick={() => {
    //       props.setBackgroundStay(background)
    //     }}
		
		>

        <p>住宿</p>
        <div>
          <HomeTagBtn className="home_tag_btn_icon icon" />
        </div>
      </button>
    </>
  );
}

export default TagButton;
