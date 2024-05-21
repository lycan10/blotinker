import React from 'react'
import Categories from '../categories/Categories'

import "./travel.css"

import cat1 from "../../assets/sub1.jpg"

import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'

const travelData = [
    {
        id: 0,
        header: "Travel & Adventure",
        img: cat1,
        title: "FETCH FESTIVAL BRLN 2023",
        author: "ByJena McGregorForbes Staff",
      
    }
  ]

const Travel = () => {


  return (
    <div className='travels'>
      <Navbar />
        <div className="travel-container">
        {
              travelData.map(({ id, img, title, header, author })=>{
                return(
                   <div>
                    <CategoryCards 
                      key={id}
                      header= {header}
                      img={img}
                      title={title}
                      author={author}
                    />
                  </div>
                      )
                })
            }
    </div>
    </div>
  )
}

export default Travel