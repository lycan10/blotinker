import React from 'react'
import Categories from '../categories/Categories'

import "./all.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

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
        <Footer />
    </div>
  )
}

export default All