import React from 'react'
// import { Post } from './Post'

const PaginationButtonsList = ({ Page, handleClick }) => {
    return (
        <div className="col-12 d-flex justify-content-center pagination-buttons-list">
            {     Page===1?
                <button id={`button-${Page}`} onClick={handleClick} className="active-btn  btn btn-primary">Next</button>

            :      <button id={`button-${Page}`} onClick={handleClick} className="  btn btn-primary">Next</button>
        }
        </div>
    )
}

export { PaginationButtonsList }