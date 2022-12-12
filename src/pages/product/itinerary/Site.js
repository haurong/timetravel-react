import React, { useEffect, useState } from 'react';
import { SITE_LIST } from './site-config';
import NavBar from '../../../layout/NavBar';
import { Container } from 'react-bootstrap';
import Footer from '../../../layout/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import BreadCrumbList from '../../../Component/BreadCrumb/BreadCrumbList';
import SiteCardList from './SiteCardList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import BasicPagination from '../../../Component/Pagination/Pagination';
import MyPagination from '../../../Component/Pagination/Pagination_Hotel';
import { useHotelContext } from '../stays/Context/HotelContext';
import Sidebar1 from '../../../Component/Sidebar1/Sidebar_Site';
import HotelListSortSelector from '../stays/HotelListSortSelector/HotelListSortSelector_forSite';
import _ from 'lodash';
import './Site.scss';

function Site() {
  const [siteData, setSiteData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });
  const {
    setHotelSortData,
    perPage,
    setDisplayData,
    setPageTotal,
    setHotelSort,
  } = useHotelContext();
  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getList() {
    const response = await axios.get(SITE_LIST);
    setSiteData(response.data);
    setHotelSortData(response.data.rowsAll);
    const pageList = _.chunk(response.data.rowsAll, perPage);
    setDisplayData(pageList);
    setPageTotal(pageList.length);
    //  hotelSort預設值
    setHotelSort({
      area: 'area_All',
      cate: 'cate_Ticket_All',
      like: 'likeAll',
      sortBy: '',
    });
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
      <div className="space "></div>
      <div
        className="container col-12 d-flex breadCrumb_Sort"
        style={{ paddingLeft: '14px' }}
      >
        <div style={{ paddingTop: '10px' }} className="textAlign-center">
          <BreadCrumbList />
        </div>

        <div className="d-flex col-lg-10 hotelSort">
          <HotelListSortSelector />
        </div>
      </div>

      <div className="container col-lg-12 d-flex foodContent">
        <div className="col-lg-3  px-3 " style={{ paddingTop: '20px' }}>
          <Sidebar1 />
        </div>
        <div className="col-lg-9 col-md-12 CardListStyle">
          <SiteCardList />
        </div>
      </div>
      {/* <div className="foodPagination">{paginationBar}</div> */}
      <div className="foodPagination">
        <MyPagination />
      </div>
      <div className="space"></div>
      <Footer />

      {/* <Container>
        <Row className="container d-flex">
          <Col className="Accordion col-3 g-4">
            <Card style={{ width: '18rem' }}>
              <Sidebar1 />
            </Card>
          </Col>
          <Col className="col-9">
            <SiteCardList />
          </Col>
        </Row>
        <div className="Food_pagination givePadding ">
          <MyPagination />
        </div>
      </Container>
      <Footer /> */}
    </>
  );
}

export default Site;
