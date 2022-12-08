import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { SITE_IMG } from './site-config';
import { useHotelContext } from '../stays/Context/HotelContext';
import { useEffect, useState } from 'react';
import _ from 'lodash';
// import { imgUrl } from '../../config';
// import Star from '../../icon/star.svg';
// import Heart from '../../icon/heart_white.svg';

function SiteCardList() {
  const {
    hotelSort,
    hotelSortData,
    displayData,
    setDisplayData,
    setPageTotal,
    perPage,
    pageNow,
    setPageNow,
  } = useHotelContext();
  //  處理排序（價格、收藏數）
  const handleSortPrice = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];

    // 處理目的地
    switch (hotelSort) {
      case 'sortByPriceDESC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return b.room_price - a.room_price;
        });
        break;
      case 'sortByPriceASC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return a.room_price - b.room_price;
        });
        break;
      case 'sortByCollectDESC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return b.collect - a.collect;
        });
        break;
      case 'sortByCollectASC':
        newHotelSortData = [...newHotelSortData].sort((a, b) => {
          return a.collect - b.collect;
        });
        break;
      default:
        break;
    }

    return newHotelSortData;
  };
  //  列表資料篩選（地區）
  const handleArea = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];

    // 處理目的地
    switch (hotelSort) {
      case 'area_Taipei':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name === '台北市';
        });
        break;
      case 'area_NewTaipei':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name === '新北市';
        });
        break;
      case 'area_Keelung':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name === '基隆市';
        });
        break;
      // 指所有的產品都出現
      case 'area_All':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.city_name !== '';
        });
        break;
      default:
        break;
    }

    return newHotelSortData;
  };
  //  列表資料篩選（住宿類型）
  const handleCate = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];

    // 處理目的地
    switch (hotelSort) {
      case 'cate_Site_1':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 1;
        });
        break;
      case 'cate_Site_2':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 2;
        });
        break;
      case 'cate_Site_3':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 3;
        });
        break;
      case 'cate_Site_4':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 4;
        });
        break;
      case 'cate_Site_5':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid === 5;
        });
        break;
      // 指所有的產品都出現
      case 'cate_Site_All':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.site_category_sid !== '';
        });
        break;
      default:
        break;
    }

    return newHotelSortData;
  };
  //  列表資料篩選（收藏數）
  const handleAddLike = (hotelSortData, hotelSort) => {
    let newHotelSortData = [...hotelSortData];
    // console.log(newHotelSortData);

    // 處理目的地
    switch (hotelSort) {
      case 'like<100':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 100;
        });
        break;
      case 'like200':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 200 && v.collect > 100;
        });
        break;
      case 'like300':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 300 && v.collect > 200;
        });
        break;
      case 'like400':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 400 && v.collect > 300;
        });
        break;
      case 'like500':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect <= 500 && v.collect > 400;
        });
        break;
      case 'like>500':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect >= 500;
        });
        break;
      case 'likeAll':
        newHotelSortData = hotelSortData.filter((v) => {
          return v.collect < 1000;
        });
        break;
      // 指所有的產品都出現
      default:
        break;
    }

    return newHotelSortData;
  };
  //  把資料處理成分頁
  const getFoodListData = (v, perPage) => {
    const pageList = _.chunk(v, perPage);
    // console.log('pageList:', pageList[0]);

    if (pageList.length > 0) {
      setPageTotal(pageList.length);
      //紀錄分塊後的資料
      setDisplayData(pageList);
      // setHaveData(true);
    }
  };

  useEffect(() => {
    // console.log();
    let newHotelSortData = [];
    setPageNow(1);
    // newHotelSortData = handleSortPrice(hotelSortData, hotelSort.sortBy);
    newHotelSortData = handleArea(hotelSortData, hotelSort.area);
    newHotelSortData = handleCate(newHotelSortData, hotelSort.cate);
    // newHotelSortData = handleAddLike(newHotelSortData, hotelSort.like);

    setDisplayData(newHotelSortData);
    getFoodListData(newHotelSortData, perPage);
  }, [hotelSort.area, hotelSort.like, hotelSort.cate, hotelSort.sortBy]);
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {displayData[pageNow - 1]
        ? displayData[pageNow - 1].map((el, i) => {
            return (
              <Col key={i}>
                <Link to={'/site/' + el.sid}>
                  <Card className="Card">
                    <Card.Img
                      className="card-img"
                      variant="top"
                      // src={SITE_IMG + '/' + el.img1.split(',')[0]}
                    />
                    {/* <button className="Heart_Btn">
                  <Card.Img src={''} className="Card_Heart" />
                </button> */}
                    <Card.Body className="card-margin0">
                      <Card.Title>{el.name}</Card.Title>
                      <Card.Text></Card.Text>
                      <p>{el.site_category_name}</p>
                      <p className="card-text">
                        {el.city_name}
                        {el.area_name}
                      </p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })
        : ''}
    </Row>
  );
}

export default SiteCardList;
