import React from "react";
import { MainUl, Mainli, Mainanchor } from "../../styles/GlobalComponents";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <MainUl className="pagination">
        {pageNumbers.map((number) => (
          <Mainli
            key={number}
            className="page-item"
            onClick={() => paginate(number)}
          >
            <Mainanchor href="javascript:void(0);" className="page-link">
              {number}
            </Mainanchor>
          </Mainli>
        ))}
      </MainUl>
    </nav>
  );
};

export default Pagination;
