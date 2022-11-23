import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import BreadCrumb from '../../../Component/BreadCrumb/BreadCrumb';
import './Site-detail.scss';
import { SITE_DETAIL } from './site-config';

function SiteDetail() {
  const [siteData, setSiteData] = useState({});

  const location = useLocation();
  const path = window.location.pathname.split('/');
  const sid = path[2];
  async function getData() {
    const response = await axios.get(SITE_DETAIL + sid);
    // const response = await axios.get(SITE_DETAIL);
    setSiteData(response.data);
  }

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <>
      {/* <NavBar /> */}
      <BreadCrumb siteData={siteData} />
      <Footer />
    </>
  );
}

export default SiteDetail;
