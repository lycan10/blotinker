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

const categoryData = [
  {
      id: 0,
      img: image5,
      title: "FETCH FESTIVAL BRLN 2023",
      content: "See the full program for the upcoming festival. Early bird tickets are on sale now.",
      postDate: "Jun 12, 2023",
      postTime: 2,
  },
  {
      id: 1,
      img: image6,
      title: "365 DAYS. 365 FRAMES.",
      content: "What can we learn from Matthew Soja’s latest work? Shots from the same location in Oslo for one whole year, every single day.",
      postDate: "Jun 12, 2023",
      postTime: 4,
  },
  {
      id: 2,
      img:image7,
      title: "20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE",
      content: "The full list includes 10 cities in 8 different countries.",
      postDate: "Jun 12, 2023",
      postTime: 1,
  },
  {
    id: 3,
    img: image5,
    title: "FETCH FESTIVAL BRLN 2023",
    content: "See the full program for the upcoming festival. Early bird tickets are on sale now.",
    postDate: "Jun 12, 2023",
    postTime: 2,
},
{
    id: 4,
    img: image6,
    title: "365 DAYS. 365 FRAMES.",
    content: "What can we learn from Matthew Soja’s latest work? Shots from the same location in Oslo for one whole year, every single day.",
    postDate: "Jun 12, 2023",
    postTime: 4,
},
{
    id: 5,
    img:image7,
    title: "20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE",
    content: "The full list includes 10 cities in 8 different countries.",
    postDate: "Jun 12, 2023",
    postTime: 1,
},
{
  id: 6,
  img: image5,
  title: "FETCH FESTIVAL BRLN 2023",
  content: "See the full program for the upcoming festival. Early bird tickets are on sale now.",
  postDate: "Jun 12, 2023",
  postTime: 2,
},
{
  id: 7,
  img: image6,
  title: "365 DAYS. 365 FRAMES.",
  content: "What can we learn from Matthew Soja’s latest work? Shots from the same location in Oslo for one whole year, every single day.",
  postDate: "Jun 12, 2023",
  postTime: 4,
},
{
  id: 8,
  img:image7,
  title: "20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE",
  content: "The full list includes 10 cities in 8 different countries.",
  postDate: "Jun 12, 2023",
  postTime: 1,
}
]

const Categories = () => {

  return (
        <div className="category-container">
          <div className="category-title">
            <p>ALL</p>
          </div>
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