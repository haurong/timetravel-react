import { Carousel } from 'antd';
import React from 'react';
import './Carousel.scss';
import pic1 from './pic/25-1.jpg';
import pic2 from './pic/25-2.jpg';
import pic3 from './pic/25-3.jpg';

const imgStyle = {
  // width: '100%',
  height: '450px',
  margin: 'auto',
};

const App = () => (
  <Carousel autoplay autoplaySpeed={1000}>
    <div className="imgDiv">
      <img style={imgStyle} src={pic1} className="theImg" alt=""></img>
    </div>
    <div className="imgDiv">
      <img style={imgStyle} src={pic2} className="theImg" alt=""></img>
    </div>
    <div className="imgDiv">
      <img style={imgStyle} src={pic3} className="theImg" alt=""></img>
    </div>
  </Carousel>
);

export default App;
