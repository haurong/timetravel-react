import React, { useState } from 'react';
import '../../global.scss';
import './Home.scss';
// import Tags from '../../pages/product/ticket/Tags/Tags';
import BannerSliderHot from '../../pages/product/ticket/BannerSlider/BannerSliderHot';
import BannerSliderNewest from '../../pages/product/ticket/BannerSlider/BannerSliderNewest';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import ButtonSign from '../../pages/product/ticket/ButtonSign/ButtonSign';

function Home() {
  return (
    <>
    {/* <div className="home_bg_test"></div> */}
      <div className="container">
        <div className="row">
          <div className="home-part1">
            <div>
              {/* <Tags /> */}
            </div>
          </div>
          <div className="home_bg"></div>
          

          <div className="home-part2">
            <div>
              <h1>最新優惠</h1>
            </div>
          </div>

          <div className="container">
            <BannerSliderNewest />
          </div>

          <div className="home-part3">
            <div>
              <h1>熱門商品</h1>
            </div>
          </div>

          <div className="container">
            <BannerSliderHot />
          </div>

          <div className="home-part4">
              <div className=" feature-card ">
                <div className=" feature-circle "></div>
                <h5>防疫旅館</h5>
              </div>
              <div className=" feature-card ">
                <div className=" feature-circle "></div>
                <h5>戶外露營</h5>
              </div>
              <div className=" feature-card ">
                <div className=" feature-circle "></div>
                <h5>親子旅遊</h5>
              </div>
              <div className=" feature-card ">
                <div className=" feature-circle "></div>
                <h5>樂園專區</h5>
              </div>
              <div className=" feature-card ">
                <div className=" feature-circle "></div>
                <h5>吃到飽餐廳</h5>
              </div>

          </div>

          <div className="home-part5">
            <div className="home-why-us row">
              <h1 className="why-us-tittle">為什麼選擇TimeTravel?</h1>
              <p className="why-us-p">
                你知道世界上有超過百萬名自由行旅客選擇TimeTravel作為旅遊規劃網站嗎？
                <br></br>
                他們透過TimeTravel找到安全又安心的體驗行程！
              </p>
              <ButtonSign />

              <div className="home-why-us-bg"></div>
            </div>
          </div>
        </div>
      </div>




      
    </>
  );
}

export default Home;
