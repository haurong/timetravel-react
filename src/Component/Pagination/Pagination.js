import * as React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
export default function MyPagination({ page, totalPages }) {
  return (
    <ul className="pagination d-flex">
      <li className="page-item ">
        <Link
          className="page-link  prevPage"
          to={`?page=${page - 1}`}
          aria-label="Previous"
        >
          <MdOutlineChevronLeft />
        </Link>
      </li>
      {Array(13)
        .fill(1)
        .map((el, i) => {
          const classNames = ['page-item'];
          const p = page - 5 + i;
          if (p < 1 || p > totalPages) return null;
          if (p === page) classNames.push('active');
          const link = `?page=${p}`;
          return (
            <li className={classNames.join(' ')} key={p}>
              <Link className="page-link pagi" to={link}>
                {p}
              </Link>
            </li>
          );
        })}
      <li className="page-item">
        <Link
          className="page-link nextPage"
          to={`?page=${page + 1}`}
          aria-label="Next"
        >
          <MdOutlineChevronRight />
        </Link>
      </li>
    </ul>
  );
}
// variant="outlined"
