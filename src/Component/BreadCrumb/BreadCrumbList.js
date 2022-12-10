import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './BreadCrumb.scss';

function BreadCrumbList() {
  const [typeName, setTypeName] = useState('');
  const location = useLocation();
  const path = window.location.pathname.split('/');
  const type = path[1];
  // const sid = path[2];
  async function getType() {
    if (type === 'site') {
      setTypeName('景點');
    }
    if (type === 'food') {
      setTypeName('美食');
    }
    if (type === 'stays') {
      setTypeName('住宿');
    }
    if (type === 'ticket') {
      setTypeName('票劵');
    }if(type === 'productList'){
      setTypeName('商品列表')
    }
  }
  useEffect(() => {
    getType();
  }, [location]);
  return (
    <>
      <div aria-label="breadcrumb">
        <ol id="breadcrumb" className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink id="bcindex" to="/">
              首頁
            </NavLink>
          </li>
          <li className="breadcrumb-item active" style={{ width: '100px' }}>
            <p>{typeName}</p>
          </li>
        </ol>
      </div>
    </>
  );
}

export default BreadCrumbList;
