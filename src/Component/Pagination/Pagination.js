import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MyPagination({ page, totalPages }) {
 // const firstPage = `?page=1`;
  //const lastPage = `?page=${totalPages}`;
  const prevPage = `?page=page-1`;
  const nextPage = `?page=page+1`;
  return (
    <ul className="pagination">
      <li className="page-item disabled">
        <Link className="page-link " to={prevPage} aria-label="Previous">
          Previous
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
              <Link className="page-link" to={link}>
                {p}
              </Link>
            </li>
          );
        })}
      <li className="page-item">
        <Link className="page-link" to={nextPage} aria-label="Next">
          Next
        </Link>
      </li>
    </ul>
  );
}
// variant="outlined"
