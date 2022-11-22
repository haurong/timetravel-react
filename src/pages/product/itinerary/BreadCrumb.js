import React from 'react';
import { Link } from 'react-router-dom';
import './Itinerary-detail.scss';

function BreadCrumb({ siteData }) {
  // console.log(Sitedata);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="#/" style={{ textDecoration: 'none' }}>
              首頁
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#/" style={{ textDecoration: 'none' }}>
              景點
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#/" style={{ textDecoration: 'none' }}>
              {/* 戶外活動 */} {siteData.site_category_name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {/* 台北兒童樂園 */} {siteData.name}
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BreadCrumb;
