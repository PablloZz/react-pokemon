import React from "react"
import "./Pagination.css"

function Pagination({ prevPage, nextPage }) {
  return (
    <div className='buttons'>
      {prevPage && (
        <button onClick={prevPage} className='button'>
          Previous Page
        </button>
      )}
      {nextPage && (
        <button onClick={nextPage} className='button'>
          Next Page
        </button>
      )}
    </div>
  )
}

export default Pagination