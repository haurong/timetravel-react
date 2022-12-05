import * as React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';
import { useHotelContext } from '../../pages/product/stays/Context/HotelContext';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
export default function MyPagination() {
  const { pageNow, setPageNow, pageTotal } = useHotelContext();
  return (
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
        .map((el, i) => {
          const classNames = ['page-item'];

          //  現在第幾頁
          const p = i + 1;
          //  頁籤範圍
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
          }else if (pageNow === pageTotal - 1) {
            if (pageNow > p + 5 || pageNow < p - 1) return null;
          }else if (pageNow === pageTotal ) {
            if (pageNow > p + 6 || pageNow < p ) return null;
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
        {/* <Link
          className="page-link nextPage"
          aria-label="Next"
          onClick={() => {
            setPageNow(1);
          }}
        >
          <MdOutlineChevronRight />
        </Link> */}
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
}
// variant="outlined"
