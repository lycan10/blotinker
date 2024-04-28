import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"

import image5 from "../../assets/p1.jpg"
import image6 from "../../assets/p2.jpg"
import image7 from "../../assets/p3.jpg"
import CategoryCards from '../../components/categorycards/CategoryCards'
import "./categories.css"
import { FaArrowRightLong } from "react-icons/fa6";

import cat1 from "../../assets/sub1.jpg"

import { motion } from "framer-motion";


const Categories = () => {

  return (
        <div className="category-card-container">
          <div className="category-menu-container">
          <div className="category-menu-title">
            <h1>Travel & Adventure</h1>
            <FaArrowRightLong />
          </div>
          <div className="category-menu-content-container">
            <div className="category-menu-content-left">
            <div className="category-menu-content-left-top">
            <img src={cat1} alt="" />
            <h3></h3>
            <p></p>

            </div>
            <div className="category-menu-content-left-bottom"></div>
            </div>
            <div className="category-menu-content-right">

            </div>
          </div>
          </div>

          {/* <div className="category-content-container">
            {
              categoryData.map(({ id, img, title, postDate, postTime, content })=>{
                return(
                   <div>
                    <CategoryCards 
                      key={id}
                      img={img}
                      title={title}
                      postDate={postDate}
                      postTime={postTime}
                      content={content}
                    />
                  </div>
                      )
                })
            }
            </div> */}
        </div>
  )
}

export default Categories;