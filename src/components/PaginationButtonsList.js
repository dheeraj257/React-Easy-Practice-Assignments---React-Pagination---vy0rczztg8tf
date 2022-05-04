import React from 'react'
// import { Post } from './Post'

const PaginationButtonsList = ({Page, handleClick }) => {
    return (
        <div className="col-12 d-flex justify-content-center pagination-buttons-list">
            <button id={`button-${Page}`} onClick={handleClick} className="  btn btn-primary">Next</button>
        </div>
    )
}

export { PaginationButtonsList }