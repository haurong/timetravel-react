import React, { useEffect, useState } from 'react';
import { SITE_LIST } from './site-config';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SiteCardList from './Site-card-list';

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
      <NavBar />
      <SiteCardList rows={siteData.rows} />
      <Footer />
    </>
  );
}

export default Site;
