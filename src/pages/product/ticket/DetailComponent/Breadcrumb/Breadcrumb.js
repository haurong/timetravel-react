import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './BreadCrumb.scss';

function BreadCrumb({ ticketData }) {
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
    }
  }
  useEffect(() => {
    getType();
  }, [location]);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol id="breadcrumb" className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink id="bcindex" to="/">
              首頁
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink id="bctype" to={'/' + path[1]}>
              {typeName}
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink id="bccatename" href="#/">
              {ticketData.classname}
            </NavLink>
          </li>
          <li
            id="bcitem"
            className="breadcrumb-item active"
            aria-current="page"
          >
            <p>{ticketData.name}</p>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BreadCrumb;
