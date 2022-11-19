import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {FOOD_LIST} from '../../../config.js'
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card_List from '../../../Component/Card_List/Card_List';
import BasicPagination from '../../../Component/Pagination/Pagination';
import Qrcode from '../../../Component/QRcode/Qrcode';
import Card1 from '../../../Component/Card/Card'

function Food() {
  const [foodData, setFoodData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });

  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getList() {
    const response = await axios.get(FOOD_LIST);
    setFoodData(response.data);
  }
console.log(foodData)
  useEffect(() => {
    getList();
  }, [location]);
  return (
    <>
      <NavBar />
      <div className="container FoodListGroup givePadding">
        <Row className="container d-flex ">
          <Col className="Accordion col-3 g-4"></Col>
          <Col className="col-9">
            <Card_List />
          </Col>
        </Row>
        <div className="Food_pagination givePadding ">
          <BasicPagination />
        </div>
        <Qrcode />
      </div>
      <Card1 />
      <Footer />
    </>
  );
}

export default Food;
