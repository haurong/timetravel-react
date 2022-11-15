import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
<<<<<<< Updated upstream
import Carousel from '../../../Component/Carousel/Carousel';
import Pagination from '../../../Component/Pagination/Pagination';

//breadcrumb還沒導入component
=======
import FoodList from './FoodList';
import BasicPagination from '../../../Component/Pagination';
import Carousel from '../../../Component/Carousel';

>>>>>>> Stashed changes
function Food() {
  return (
    <>
      <NavBar />

<<<<<<< Updated upstream
      <div className="container" style={{ marginTop: '80px' }}>
        <nav aria-label="breadcrumb">
          <div class="container breadcrumb">
            <ol class="breadcrumb" style={{ marginTop: '30px' }}>
              <li class="breadcrumb-item">
                <a href="#">首頁</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">美食列表</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">咖啡</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                萬祝號
              </li>
            </ol>
          </div>
        </nav>
        <Carousel />
        <div className="container">
          <div class="product_name">
            <div class="product_name_title">
              <h4>萬祝號</h4>
            </div>
            <div>
              <img src="../../icon/heart.svg" class="img_heart" />
              <img src="../../icon/heart.svg" class="img_calender" />
            </div>
          </div>
          <div class="star_group">
            <img src="./icon/star.svg" alt="" />
            <img src="./icon/star.svg" alt="" />
            <img src="./icon/star.svg" alt="" />
            <img src="./icon/star.svg" alt="" />
            <img src="./icon/star.svg" alt="" />
            <span>4.3顆星</span>
          </div>
          <div class="container location d-flex ">
            <div class="map_cate d-flex ">
              <div class="map">
                <img src="./icon/map_blue.svg" alt="" />
                <span class="m-1">基隆市｜仁愛區</span>
              </div>
              <div class="cate">
                <img src="./icon/food_blue.svg" alt="" />
                <span class="m-1">咖啡</span>
              </div>
            </div>
            <div class="tickets_group ">
              <img src="./icon/iphone.svg" alt="" />
              <span class="tickets">請出示電子票券</span>
              <span class="quantity_title">選擇張數</span>
            </div>
          </div>
        </div>
      </div>
      
=======
      <div className="container" style={{ height: '500px' }}>
       
        <Carousel />
        <BasicPagination />
      </div>
      {/* <FoodList /> */}
>>>>>>> Stashed changes
      <Footer />
    </>
  );
}

export default Food;
