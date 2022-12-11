import React, { useEffect } from 'react';
import axios from 'axios';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Heart from '../../icon/heart_gray.svg';
import PinkHeart from '../../icon/heart.svg';
import Map from '../../icon/map.svg';

import { MY_HOST, PRODUCT_LIST } from '../../config';
import { useAllContext } from '../AllContext/AllContext';
function Collect() {
  const { collect, setCollect, productData, setProductData } = useAllContext();

  async function getMemberCollect() {
    const response = await axios.get(PRODUCT_LIST);
    setProductData(response.data);
    console.log(response.data);
    const responseCollect = await axios.get(
      `http://localhost:3001/productAll/checkCollect/${
        JSON.parse(localStorage.getItem('auth')).sid
      }`
    );
    setCollect(responseCollect.data);
    console.log(responseCollect.data);
  }

  useEffect(() => {
    console.log('先拿到要顯示的資料跟收藏');
    getMemberCollect();
  }, []);

  const handleCollect = (productData, collect) => {
    // let newProduct = [...productData];
    let newProduct = productData.filter((item) => {
      return collect.includes(item.product_name) === true;
    });
    setProductData(newProduct);
    console.log('newProduct', newProduct);
  };

  useEffect(() => {
    handleCollect(productData, collect);
  }, [collect]);

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="col-9 CardListStyle">
            <div className="d-flex mb-4">
              <h1 className="ps-2 m-0">我的收藏</h1>
              <p className="m-auto ms-3">{collect.length} 個項目在您的收藏</p>
            </div>

            <Row
              xs={1}
              lg={4}
              className="d-flex justify-content-flexstart flex-wrap "
            >
              {productData?.map((v, i) => {
                return (
                  <Card
                    className="MyCard col-3"
                    style={{ width: '20rem' }}
                    key={i}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <Card.Img
                        variant="top"
                        className="foodCardImg1"
                        src={MY_HOST + `/uploads/` + v.photo}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="Card_Title">
                        {v.product_name}
                      </Card.Title>

                      <Card.Text className="Card_Text">
                        <Card.Img src={Map} className="Map_icon" />
                        <span className="Card_Score">
                          {v.city_name} | {v.area_name}
                        </span>
                      </Card.Text>
                      <div className="d-flex PriceAndCollect">
                        <div>
                          <button
                            className="Heart_btn"
                            onClick={() => {
                              const member_sid = JSON.parse(
                                localStorage.getItem('auth')
                              ).sid;
                              const product_sid = v.sid;
                              const collect_product_name = v.product_name;

                              //後端先發送移除收藏
                              if (collect.includes(v.product_name)) {
                                axios.post(
                                  'http://localhost:3001/productAll/DelCollect',
                                  {
                                    member_sid: member_sid,
                                    product_sid: product_sid,
                                    collect_product_name: collect_product_name,
                                  }
                                );
                                console.log(1111);
                                //前端顯示空心
                                setCollect(
                                  collect.filter((el) => {
                                    return el !== v.product_name;
                                  })
                                );
                              } else {
                                //前端發送新增收藏
                                axios.post(
                                  'http://localhost:3001/productAll/AddCollect',
                                  {
                                    member_sid: member_sid,
                                    product_sid: product_sid,
                                    collect_product_name: collect_product_name,
                                  }
                                );
                                //解構出原收藏陣列,把新的收藏塞回去
                                setCollect([...collect, v.product_name]);
                              }
                            }}
                          >
                            <img
                              src={
                                collect.includes(v.product_name)
                                  ? PinkHeart
                                  : Heart
                              }
                              style={{ width: '25px', height: '25px' }}
                              alt=""
                            />
                            <span>
                              {collect.includes(v.product_name)
                                ? Number(v.collect) + 1
                                : v.collect}
                            </span>
                          </button>
                        </div>
                        <div>
                          <h2 variant="primary" className="Card_Price">
                            {v.price !== 0 ? `NT${v.price}` : null}
                          </h2>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collect;
