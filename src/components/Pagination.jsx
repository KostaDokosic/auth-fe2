import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONFIG } from "../utils/static";

const Pagination = ({ page, total }) => {
  const getNumberOfPages = () => Math.ceil(total / CONFIG.moviesPerPage);

  const navigate = useNavigate();

  let pages = [];
  for (let i = 1; i <= getNumberOfPages(); i++) {
    pages.push(
      <li className="page-item" key={i}>
        <Link className="page-link" to={`/?page=${i}`}>
          {i}
        </Link>
      </li>
    );
  }

  return (
    <div className="mt-5 mb-b">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              disabled={page <= getNumberOfPages()}
              onClick={() => navigate(`/?page=${page - 1}`)}
            >
              Prev
            </button>
          </li>

          {pages.map((page) => page)}

          <li className="page-item">
            <button
              disabled={page >= getNumberOfPages()}
              className="page-link"
              onClick={() => navigate(`/?page=${page + 1}`)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
