import React, { useEffect, useState } from 'react';
import { SITE_LIST } from './site-config';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import SiteCardList from './Site-card-list';
import Site_Card_List from './Site_Card_List';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import BasicPagination from '../../../Component/Pagination/Pagination';

function Site() {
  const [siteData, setListData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });

  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getList() {
    const response = await axios.get(SITE_LIST);
    setListData(response.data);
  }

  useEffect(() => {
    getList();
  }, [location]);
  return (
    <>
      {/* <NavBar /> */}
      {/* <SiteCardList rows={siteData.rows} /> */}
      {/* <Site_Card_List rows={siteData.rows}/>
      <Footer /> */}

      <NavBar />
      <div className="container FoodListGroup givePadding">
        <Row className="container d-flex ">
          <Col className="Accordion col-3 g-4">
            <Card style={{ width: '18rem' }}>
              {/* <Accordions className="col-2 " /> */}
            </Card>
          </Col>
          <Col className="col-9">
            <Site_Card_List rows={siteData.rows} />
          </Col>
        </Row>
        <div className="Food_pagination givePadding ">
          <BasicPagination />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Site;
