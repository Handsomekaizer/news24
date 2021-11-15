import React from 'react';

function Pagination({ page, setPage, totalResults, pageSize }) {
  const pageNumbers = [];
  const resultsPerPage = pageSize;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  let start, end;
  if (totalPages === 1) {
    return null;
  }
  if (totalPages < 10) {
    start = 1;
    end = totalPages;
  } else {
    if (page <= 6) {
      start = 1;
      end = 10;
    } else if (page + 4 >= totalPages) {
      start = totalPages - 9;
      end = totalPages;
    } else {
      start = page - 5;
      end = page + 4;
    }
  }

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {page > 1 && (
        <li onClick={() => setPage((prevPage) => prevPage - 1)}>Prev</li>
      )}
      {pageNumbers.map((currPage) => (
        <li
          key={currPage}
          className={currPage === page ? 'active' : undefined}
          onClick={() => setPage(currPage)}
        >
          {currPage}
        </li>
      ))}
      {page < totalPages && (
        <li onClick={() => setPage((prevPage) => prevPage + 1)}>Next</li>
      )}
    </ul>
  );
}

export default Pagination;
