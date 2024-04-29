import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"

import image5 from "../../assets/p1.jpg"
import image6 from "../../assets/p2.jpg"
import image7 from "../../assets/p3.jpg"
import CategoryCards from '../../components/categorycards/CategoryCards'
import "./categorycards.css"
import { FaArrowRightLong } from "react-icons/fa6";

import { motion } from "framer-motion";


const Categories = ({ id, img, title, author, header }) => {

  return (
        <div className="category-card-container">
          <div className="category-menu-container">
          <div className="category-menu-title">
            <h1>{header}</h1>
            <FaArrowRightLong className='category-menu-title-icon' />
          </div>
          <div className="category-menu-content-container2">
            <div className="category2-menu-content-left">
            <div className="category-menu-content-left-top">
            <div className="category-menu-content-left-top-image">
            <img src={img} alt="" />
            </div>
            <div className="category-menu-content-left-top-text">
            <h3>{title}</h3>
            <p>{author}</p>
            </div>
            </div>
            <div className="category-menu-content-left-bottom">
            <div className="category-menu-content-left-bottom-left-container"> 
            <div className="category-menu-content-left-bottom-left"> 
            <div className="category-menu-content-left-bottom-left-img"> 
              <img src={img} alt="" />
            </div>
            <div className="category-menu-content-left-bottom-left-text"> 
              <h1>{title}</h1>
              <p>{author}</p>
            </div>
            </div>
            <div className="category-menu-content-left-bottom-left"> 
            <div className="category-menu-content-left-bottom-left-img"> 
              <img src={img} alt="" />
            </div>
            <div className="category-menu-content-left-bottom-left-text"> 
              <h1>{title}</h1>
              <p>{author}</p>
            </div>
            </div>
            </div>
            <div className="category-menu-content-left-bottom-right-container"> 
            <div className="category-menu-content-left-bottom-left"> 
            <div className="category-menu-content-left-bottom-left-img"> 
              <img src={img} alt="" />
            </div>
            <div className="category-menu-content-left-bottom-left-text"> 
              <h1>{title}</h1>
              <p>{author}</p>
            </div>
            </div>
            <div className="category-menu-content-left-bottom-left"> 
            <div className="category-menu-content-left-bottom-left-img"> 
              <img src={img} alt="" />
            </div>
            <div className="category-menu-content-left-bottom-left-text"> 
              <h1>{title}</h1>
              <p>{author}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="category2-menu-content-right-container">
              <div className="category-menu-content-right">
                <img src={img} alt="" />
                <h1>{author}</h1>
                <p>{author}</p>
                </div>
                <div className="category-menu-content-right">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{author}</p>
                </div>
            </div>
          </div>
          </div>
        </div>
  )
}

export default Categories;