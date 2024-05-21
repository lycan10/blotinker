import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"

import image5 from "../../assets/p1.jpg"
import image6 from "../../assets/p2.jpg"
import image7 from "../../assets/p3.jpg"
import CategoryCards from '../../components/categorycards/CategoryCards'
import CategoryCards2 from '../../components/categorycards/CategoryCards2'
import "./categories.css"
import { FaArrowRightLong } from "react-icons/fa6";

import cat1 from "../../assets/sub1.jpg"

import { motion } from "framer-motion";

const travelData = [
  {
      id: 0,
      header: "Travel & Adventure",
      img: cat1,
      title: "FETCH FESTIVAL BRLN 2023",
      author: "ByJena McGregorForbes Staff",
    
  }
]
const HealthData = [
  {
      id: 0,
      header: "Health & Wellness",
      img: image5,
      title: "FETCH FESTIVAL BRLN 2023",
      author: "ByJena McGregorForbes Staff",
    
  }
]
const foodData = [
  {
      id: 0,
      header: "Food & Recipes",
      img: image6,
      title: "FETCH FESTIVAL BRLN 2023",
      author: "ByJena McGregorForbes Staff",
    
  }

]


const Categories = () => {

  return (
    <div className="category">
        <div className="category-container">

          <div className="category-content-container">
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
            <div className="category-content-container">
            {
              HealthData.map(({ id, img, title, header, author })=>{
                return(
                   <div>
                    <CategoryCards2
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
            <div className="category-content-container">
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
        </div>
  )
}

export default Categories;