import React from 'react'
import Categories from '../categories/Categories'

import "./all.css"
import Navbar from '../../components/navbar/Navbar'

const All = () => {
  return (
    <div className='all'>
      <Navbar />
         <div className="all-container">
            {/* <div className="all-title">
                <h1>All</h1>
            </div> */}
            <Categories />
        </div>
    </div>
  )
}

export default All