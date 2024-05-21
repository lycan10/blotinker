import React from 'react'
import Categories from '../categories/Categories'


import image5 from "../../assets/p1.jpg"
import cat1 from "../../assets/sub1.jpg"

import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'

const HealthData = [
    {
        id: 0,
        header: "Health & Wellness",
        img: image5,
        title: "FETCH FESTIVAL BRLN 2023",
        author: "ByJena McGregorForbes Staff",
      
    }
  ]

const Health = () => {


  return (
    <div className='travels'>
      <Navbar />
        <div className="travel-container">
        {
             HealthData.map(({ id, img, title, header, author })=>{
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

export default Health