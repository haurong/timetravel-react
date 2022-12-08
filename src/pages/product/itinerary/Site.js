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
  const { setHotelSortData, perPage, setDisplayData, setPageTotal } =
    useHotelContext();
  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getList() {
    const response = await axios.get(SITE_LIST);
    setSiteData(response.data);
    setHotelSortData(response.data.rowsAll);
    const pageList = _.chunk(response.data.rowsAll, perPage);
    setDisplayData(pageList);
    setPageTotal(pageList.length);
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
      <Container className="spaceSite">
        <BreadCrumbList />
        <Row className="container d-flex">
          <Col className="Accordion col-3 g-4">
            <Card style={{ width: '18rem' }}>
              {/* <p>sidebar</p> */}
              <Sidebar1 />
              {/* <Accordions className="col-2 " /> */}
            </Card>
          </Col>
          <Col className="col-9">
            <div className="d-flex hotelSort">
              <HotelListSortSelector />
            </div>
            {/* <SiteCardList rows={siteData.rows} /> */}
            <SiteCardList />
          </Col>
        </Row>
        <div className="Food_pagination givePadding ">
          {/* <BasicPagination
            page={siteData.page}
            totalPages={siteData.totalPages}
          /> */}
          <MyPagination />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Site;
