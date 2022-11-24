import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FOOD_LIST } from '../../../config.js';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import FoodMap from './FoodMap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card_List from '../../../Component/Card_List/Card_List';
import MyPagination from '../../../Component/Pagination/Pagination';
import BreadCrumb from '../../../pages/product/stays/Breadcrumb/Breadcrumb';
import './Food.scss';
//import Qrcode from '../../../Component/QRcode/Qrcode';
//import Card1 from '../../../Component/Card/Card';

function Food() {
  // const [foodData, setFoodData] = useState({
  //   totalRows: 0,
  //   totalPages: 0,
  //   perPage: 0,
  //   page: 1,
  //   rows: [],
  // });

  // const location = useLocation();
  // const usp = new URLSearchParams(location.search);

  // async function getList() {
  //   const response = await axios.get(FOOD_LIST + `?` + usp.toString());
  //   setFoodData(response.data);
  // }
  // console.log(foodData);
  // useEffect(() => {
  //   getList();
  // }, [location]);
  return (
    <>
      <NavBar />
      <div className="space "></div>
      <div className="container col-12 givePadding">
        <BreadCrumb />
      </div>
     
      <div className="foodMap">
         <FoodMap className="foodmap"/>
      </div>
      {/* <div className="container FoodListGroup givePadding">
        <Row className="container d-flex content">
          <Col className="Accordion col-2 g-4">
            <Accordion defaultActiveKey="0" className="Accordion" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-1"></Col>
          <Col className=" col-9 g-4 mt-4 cardList">
            <Card_List rows={foodData.rows} />
          </Col>
        </Row> */}
      {/*         
          <div className=" col-12 givePadding">
            <MyPagination page={foodData.page} totalPages={foodData.totalPages} />
          </div>
      
        {/* <Qrcode /> */}
      {/* </div>  */}
      <Footer />
    </>
  );
}

export default Food;
