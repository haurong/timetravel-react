import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Pagination.scss'
export default function MyPagination({ page, totalPages }) {
 // const firstPage = `?page=1`;
  //const lastPage = `?page=${totalPages}`;
  const prevPage = `?page=page-1`;
  const nextPage = `?page=page+1`;
  return (
    <ul className="pagination d-flex">
      <li className="page-item ">
        <Link className="page-link  prevPage" to={prevPage} aria-label="Previous">
          0
        </Link>
      </li>
      {Array(11)
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
        <Link className="page-link nextPage" to={nextPage} aria-label="Next">
          14
        </Link>
      </li>
    </ul>
  );
}
// variant="outlined"
