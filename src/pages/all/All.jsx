import React from 'react'
import Categories from '../categories/Categories'

import "./all.css"

const All = () => {
  return (
    <div className='all'>
         <div className="all-container">
            <div className="all-title">
                <h1>All</h1>
            </div>
            <Categories />
        </div>
    </div>
  )
}

export default All