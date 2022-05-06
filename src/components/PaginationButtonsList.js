import React from 'react'
import { useState } from 'react/cjs/react.production.min';
// import { Post } from './Post'

const PaginationButtonsList = ({Page,handleClick}) => {

    const array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        return (
            <div className="col-12 d-flex justify-content-center pagination-buttons-list">
                {
                    array1.map((curr)=>{
                         return   <button key={curr} id={`button-${curr}`} onClick={()=>handleClick(curr)} className={`btn ${curr==Page?'active-btn':''}`}>{curr}</button>
                    })
                    
                }
            </div>
        )
}

export { PaginationButtonsList }