import React from 'react'

const Pagination = ({totalArticles, articlesPerPage, paginate}) => {
  
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles/articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="ml-2">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)}href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
