import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card_List from '../../../Component/Card_List/Card_List';
//import Card from 'react-bootstrap/Card';
import BasicPagination from '../../../Component/Pagination/Pagination';
import Qrcode from '../../../Component/QRcode/Qrcode';
import Card1 from '../../../Component/Card/Card';
//import Accordions from '../../../Component/Accordions/Accordions';
function FoodDetail() {
  return (
    <>
      <NavBar />
      <div className="container FoodListGroup givePadding">
        <Row className="container d-flex ">
          <Col className="Accordion col-3 g-4">
            {/* <Card style={{ width: '18rem' }}>
              {/* <Accordions className="col-2 " /> */}
            {/* </Card> */} 
          </Col>
          <Col className="col-9">
           
            <Card_List />
          </Col>
        </Row>
        <div className="Food_pagination givePadding ">
          <BasicPagination />
        </div>
        <Card1 />
        <Qrcode />
      </div>
      <Footer />
    </>
  );
}

export default FoodDetail;
