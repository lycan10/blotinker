import React from 'react'
import Categories from '../categories/Categories'

import "./food.css"
import image6 from "../../assets/p2.jpg"
import cat1 from "../../assets/sub1.jpg"

import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'

const foodData = [
    {
        id: 0,
        header: "Food & Recipes",
        img: image6,
        title: "FETCH FESTIVAL BRLN 2023",
        author: "ByJena McGregorForbes Staff",
      
    }
  
  ]

const Food = () => {


  return (
    <div className='travels'>
      <Navbar />
        <div className="travel-container">
        {
              foodData.map(({ id, img, title, header, author })=>{
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

export default Food