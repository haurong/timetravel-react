import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MY_HOST } from '../../config';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import _ from 'lodash';
import { ALLPRODUCT_LIST } from '../../config';
import { ADD_FOOD_COLLECT } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FOOD_IMG } from '../../config';
import Map from '../../icon/map.svg';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import MyPagination from '../../Component/Pagination/Pagination';
import Sidebar1 from '../../Component/Sidebar1/Sidebar1';
import { useFoodContext } from '../product/food/FoodContext/FoodContext';
function ProductList() {
  // [ {
  //   "sid": 13,
  //   "product_number": "F013",
  //   "product_name": "大胖肉焿",
  //   "p_selling_price": 79,
  //   "p_discounted_price": 100,
  //   "product_photo": "F013-1.jpg",
  //   "applicable_store": "大胖肉焿光華總店",
  //   "product_introdution": "簡約樸實的餐館，專門供應肉焿和豬肉早餐。",
  //   "p_business_hours": "0530-1400",
  //   "product_address": "新北市中和區光華街13號",
  //   "listing_status_sid": 1,
  //   "categories_sid": 1,
  //   "city_sid": 2,
  //   "area_sid": 27,
  //   "collect": 0,
  //   "categorise_name": "特色小吃",
  //   "area_name": "中和區",
  //   "city_name": "新北市"
  // },]

  // 紀錄資料庫取得原始資料
  const [productData, setProductData] = useState([]);
  //呈現分頁資料用
  const [productDisplay, setProductDisplay] = useState([]);

  const [searchWord, setSearchWord] = useState('');

  //載入資料指示,true代表正在載入資料
  const [isLoading, setIsLoading] = useState(false);

  //錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('');

  //分頁
  //當前分頁最小為1,最大看資料計算最大頁數
  const [pageNow, setPageNow] = useState(1);
  //每頁多少筆資料
  const [perPage, setPerPage] = useState(12);
  //總共多少頁。在資料進入後(didMount)後需要計算出後才決定
  const [pageTotal, setPageTotal] = useState(0);

  const [like, setLike] = useState(false);
  //TODO:按下收藏後送資料到資料庫

  const { count, setCount } = useFoodContext();
  //TODO:1.拿到member_sid 2.送到member_food_collect新增一筆收藏
  const [addCollect, setAddCollect] = useState({
    sid: '',
    member_sid: '',
    food_product_sid: '',
  });
  const [collect, setCollect] = useState(false);
  const toggleLike = () => {
    setCollect(!collect);
    setLike(!like);
  };

  // async function toggleLike(e) {
  //   setLike(!like);
  //   e.preventDefault();
  //   const { collect } = await axios.post(ADD_FOOD_COLLECT, addCollect);
  // }

  const getAllListData = async () => {
    try {
      const response = await axios.get(ALLPRODUCT_LIST);
      console.log(response.data);

      const pageList = _.chunk(response.data, perPage);

      console.log(pageList);

      if (pageList.length > 0) {
        setPageTotal(pageList.length);
        //紀錄分塊後的資料
        setProductDisplay(pageList);
        //設定到state裡
        setProductData(response.data);
      }
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
  };

  const paginationBar = (
    <ul className="pagination d-flex">
      <li className="page-item ">
        <Link
          className="page-link  prevPage"
          to={`?page=${pageNow - 1}`}
          aria-label="Previous"
          onClick={() => {
            const newPageNowMinus = pageNow - 1;
            setPageNow(newPageNowMinus);
          }}
        >
          <MdOutlineChevronLeft />
        </Link>
      </li>
      {Array(pageTotal)
        .fill(1)
        .map((v, i) => {
          const classNames = ['page-item'];
          const p = pageNow - 5 + i;
          if (p < 1 || p > pageTotal) return null;
          if (p === pageNow) classNames.push('active');
          const link = `?page=${p}`;
          return (
            <li className={classNames.join(' ')} key={p}>
              <Link
                className="page-link"
                to={link}
                onClick={() => {
                  setPageNow(p);
                }}
              >
                {p}
              </Link>
            </li>
          );
        })}
      <li className="page-item">
        <Link
          className="page-link "
          to={`?page=${pageNow + 1}`}
          aria-label="Next"
          onClick={() => {
            const newPageNowPlus = pageNow + 1;
            setPageNow(newPageNowPlus);
          }}
        >
          <MdOutlineChevronRight />
        </Link>
      </li>
    </ul>
  );
  //TODO:計算收藏+1或-1
  const display = errorMessage ? (
    errorMessage
  ) : (
    <Row xs={1} lg={4} className="d-flex justify-content-center flex-wrap">
      {productDisplay.length > 0 &&
        productDisplay[pageNow - 1].map((v, i) => {
          return (
            <Card className="MyCard col-3" style={{ width: '20rem' }} key={i}>
              <Card.Img
                variant="top"
                className="foodCardImg1"
                src={`${FOOD_IMG}${v.product_photo}`}
              />
              <Card.Body>
                <Card.Title className="Card_Title">{v.product_name}</Card.Title>
                <Card.Text className="Card_Text">
                  <Card.Img src={Map} className="Map_icon" />
                  <span class="Card_Score">
                    {v.city_name} | {v.area_name}
                  </span>
                </Card.Text>
                <div className="d-flex PriceAndCollect">
                  <div>
                    <button className="Heart_btn" onClick={toggleLike}>
                      <img
                        src={like ? PinkHeart : Heart}
                        style={{ width: '25px', height: '25px' }}
                        alt=""
                      />

                      <span>{collect ? v.collect + 1 : v.collect}</span>
                    </button>
                  </div>
                  <div>
                    <h2 variant="primary" className="Card_Price">
                      NT${v.p_selling_price}
                    </h2>
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
    </Row>
  );
  const location = useLocation();
  useEffect(() => {
    getAllListData();
  }, [location]);
  return (
    <>
      <NavBar />
      <div className="givePadding"></div>

      <div className="container givePadding col12 d-flex">
        <div className="col-lg-3">
          <Sidebar1 />
        </div>
        <div className="col-lg-9 " style={{ margin: 0 }}>
          <div
            style={{
              paddingTop: '60px',
              paddingLeft: '40px',
            }}
          >
            {display}
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            margin: 'auto',
            overflow: 'scroll',
          }}
        >
          {paginationBar}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductList;
