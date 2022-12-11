import React from 'react';
import './ShowPic.scss';

import pic1 from '../pic/14-3.jpg';
import pic2 from '../pic/14-4.jpg';
import pic3 from '../pic/14-5.jpg';

function ShowPic() {
  return (
    <>
      <div className="Hotel_showPic">
        <img src={pic1} alt="pic1"></img>
        <p>波利摩天輪</p>
      </div>
      <div className="Hotel_showPic">
        <img src={pic2} alt="pic2"></img>
        <p>飛天神奇號（飛天巴士）</p>
      </div>
      <div className="Hotel_showPic">
        <img src={pic3} alt="pic3"></img>
        <p>宇宙迴旋（輻射飛椅）</p>
      </div>
    </>
  );
}

export default ShowPic;
