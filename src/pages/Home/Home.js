import React, { useState } from 'react';
import '../../global.scss';
import './Home.scss';
import Tags from '../../pages/product/ticket/Tags/Tags';

function Home() {
  const [wewer,serwewer] = useState('行程')
  return (
    <>
      <div className="container">
        <div className="row m-auto">
          <div className="home-part">
            <div>
              <Tags />
              
            </div>
          </div>
          <div className="home_bg"></div>

          <div className="home-part2">
            <div>
              <h1>最新優惠</h1>
            </div>
          </div>

          <div className="home-part3">
            <div>
              <h1>熱門商品</h1>
            </div>
          </div>

          <div className="home-part4">
            <div>
              <h1>各類特色主題</h1>
            </div>
          </div>

          <div className="home-part5">
            <div className="home-why-us row">
              <h1>為什麼選擇TimeTravel?</h1>
              <p>
                你知道世界上有超過百萬名自由行旅客選擇TimeTravel作為旅遊規劃網站嗎？
                <br></br>
                他們透過TimeTravel找到安全又安心的體驗行程！
              </p>
              <div className="home-why-us-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
