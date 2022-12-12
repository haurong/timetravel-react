import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useHotelContext } from '../stays/Context/HotelContext';
import { useTicketContext } from '../ticket/Context/TicketContext';
import { useLocation } from 'react-router-dom';
import { TICKET_LIST } from './ticket-config';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Ticket.scss';
import '../../../../node_modules/antd/dist/antd.css';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

// import MyPagination from './TK_Pagination/TK_Pagination';
import HotelListSortSelector from '../stays/HotelListSortSelector/HotelListSortSelector';

import CardList from '../../../Component/Card_List/Card_List_Ticket';
import Breadcrumb from '../../../Component/BreadCrumb/BreadCrumbList';
import Sidebar from '../../../Component/Sidebar1/Sidebar_Ticket';
import Slider from './Slider/Slider.js';
import DatePicker from './DatePicker/DatePicker.js';
import RankChoose from './RankChoose/RankChoose.js';
import CitySelection from './CitySelection/CitySelection.js';
import { useHotelContext } from '../stays/Context/HotelContext';
import _ from 'lodash';

function Ticket() {
  const [ticketData, setTicketData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rowsAll: [],
  });

  const {
    ticketAllData,
    setTicketAllData,
    setTicketSortData,
    setDisplayData,
    perPage,
    setPageTotal,
    pageNow,
    pageTotal,
    setPageNow,
    setHotelSort,
  } = useTicketContext();

  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const path = window.location.pathname.split('/');

  async function getList() {
    const response = await axios.get(TICKET_LIST + `?` + usp.toString());
    // const response = await axios.get(TICKET_LIST);
    // console.log(response.data);
    setTicketAllData(response.data);
    setTicketData(response.data);
    setTicketSortData(response.data.rowsAll);
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

  const paginationBar = (
    <ul className="pagination d-flex">
      <li className="page-item ">
        <div>
          <button
            className="page-link  prevPage"
            aria-label="Previous"
            onClick={() => {
              if (pageNow > 1) {
                setPageNow(pageNow - 1);
              }
            }}
          >
            <MdOutlineChevronLeft />
          </button>
        </div>
      </li>
      {Array(pageTotal)
        .fill(1)
        .map((v, i) => {
          const classNames = ['page-item'];
          const p = i + 1;

          if (pageNow >= 4 && pageNow <= pageTotal - 3) {
            if (pageNow > p + 3 || pageNow < p - 3) return null;
          } else if (pageNow === 3) {
            if (pageNow > p + 2 || pageNow < p - 4) return null;
          } else if (pageNow === 2) {
            if (pageNow > p + 1 || pageNow < p - 5) return null;
          } else if (pageNow === 1) {
            if (pageNow > p || pageNow < p - 6) return null;
          } else if (pageNow === pageTotal - 2) {
            if (pageNow > p + 4 || pageNow < p - 2) return null;
          } else if (pageNow === pageTotal - 1) {
            if (pageNow > p + 5 || pageNow < p - 1) return null;
          } else if (pageNow === pageTotal) {
            if (pageNow > p + 6 || pageNow < p) return null;
          }
          if (p === pageNow) classNames.push('active');
          return (
            <li className={classNames.join(' ')} key={p}>
              <div>
                <button
                  className="page-link pagi"
                  onClick={() => {
                    setPageNow(p);
                  }}
                >
                  {p}
                </button>
              </div>
            </li>
          );
        })}

      <li className="page-item">
        <div>
          <button
            className="page-link nextPage"
            onClick={() => {
              if (pageNow < pageTotal) {
                setPageNow(pageNow + 1);
              }
            }}
          >
            <MdOutlineChevronRight />
          </button>
        </div>
      </li>
    </ul>
  );
  // console.log(ticketData);
  useEffect(() => {
    getList();
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="space"></div>
      <div
        className="container col-12 d-flex breadCrumb_Sort;"
        style={{ paddingLeft: '14px' }}
      >
        <div style={{ paddingTop: '10px' }} className="textAlign-center">
          <Breadcrumb />
        </div>

        <div className="d-flex col-lg-10 hotelSort">
          <HotelListSortSelector />
        </div>
      </div>

      <div className="container givePadding col-12 d-flex">
        <div className="col-lg-3 px-3" style={{ paddingTop: '20px' }}>
          <Sidebar />
        </div>
        <div className="col-lg-9 CardListStyle">
          <div>
            <CardList />
          </div>
        </div>
      </div>
      <div className="container foodPagination">{paginationBar}</div>
      <div className="space"></div>

      <Footer />
    </>
  );
}

export default Ticket;
