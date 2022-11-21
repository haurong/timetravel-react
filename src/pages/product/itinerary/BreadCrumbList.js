import React from 'react';
import { Link } from 'react-router-dom';
import './Itinerary-detail.scss';

function BreadCrumbList() {
  // console.log(Sitedata);
  return (
    <>
      <div aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="#/" style={{ textDecoration: 'none' }}>
              首頁
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <Link href="#/" style={{ textDecoration: 'none' }}>
              行程
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default BreadCrumbList;
