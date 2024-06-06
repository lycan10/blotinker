import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"

import image5 from "../../assets/p1.jpg"
import image6 from "../../assets/p2.jpg"
import image7 from "../../assets/p3.jpg"
import CategoryCards from '../../components/categorycards/CategoryCards'
import "./categorycards.css"
import { FaArrowRightLong } from "react-icons/fa6";

import cat1 from "../../assets/sub1.jpg"

import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import image1 from "../../assets/3.jpg";

import Advert from '../advert/Advert'
import { Advert2 } from '../advert/Advert2'
import ListCard from '../admingridcard/ListCard'

const CategoriesCardHome = ({ title, data, goto}) => {

  return (
        <div className="category-card-container">
          <div className="category-menu-container">
          <div className="category-menu-title" onClick={goto}>
            <h1>{title}</h1>
            <FaArrowRightLong className='category-menu-title-icon' />
          </div>
          <div className="category-menu-content-container">
            <div className="category-menu-content-left">

            { data.length > 0 &&
             <Link className="text-decoration-none text-dark" to={`/posts/${data[0].slug}`}> <div className="category-menu-content-left-top">
                <div className="category-menu-content-left-top-image">
                  <img src={data[0].imageUrl} alt="" />
                </div>
                <div className="category-menu-content-left-top-text">
                <Link className="text-decoration-none text-dark" to={`/posts/${data[0].slug}`}><h3>{data[0].title}</h3></Link>
                  <p>{data[0].author.name}</p>
                </div>
              </div>
              </Link>
            }
            <div className="category-menu-content-left-bottom">
            <div className="category-menu-content-left-bottom-left-container"> 
              { data.length > 1 &&
                <Link className="text-decoration-none text-dark" to={`/posts/${data[1].slug}`}><div className="category-menu-content-left-bottom-left"> 
                  <div className="category-menu-content-left-bottom-left-img"> 
                    <img src={data[1].imageUrl} alt="" />
                  </div>
                  <div className="category-menu-content-left-bottom-left-text"> 
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[1].slug}`}><h1>{data[1].title}</h1></Link>
                    <p>{data[1].author.name}</p>
                  </div>
                </div>
                </Link>
              }
              { data.length > 2 &&
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[2].slug}`}><div className="category-menu-content-left-bottom-left"> 
                  <div className="category-menu-content-left-bottom-left-img"> 
                    <img src={data[2].imageUrl} alt="" />
                  </div>
                  <div className="category-menu-content-left-bottom-left-text"> 
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[2].slug}`}><h1>{data[2].title}</h1></Link>
                    <p>{data[2].author.name}</p>
                  </div>
                </div>
                </Link>
              }
            </div>

            <div className="category-menu-content-left-bottom-right-container"> 
              { data.length > 3 &&
                <Link className="text-decoration-none text-dark" to={`/posts/${data[3].slug}`}><div className="category-menu-content-left-bottom-left"> 
                  <div className="category-menu-content-left-bottom-left-img"> 
                    <img src={data[3].imageUrl} alt="" />
                  </div>
                  <div className="category-menu-content-left-bottom-left-text"> 
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[3].slug}`}><h1>{data[3].title}</h1></Link>
                    <p>{data[3].author.name}</p>
                  </div>
                </div>
                </Link>
              }
              { data.length > 4 &&
               <Link className="text-decoration-none text-dark" to={`/posts/${data[4].slug}`}><div className="category-menu-content-left-bottom-left"> 
                  <div className="category-menu-content-left-bottom-left-img"> 
                    <img src={data[4].imageUrl} alt="" />
                  </div>
                  <div className="category-menu-content-left-bottom-left-text"> 
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[4].slug}`}><h1>{data[4].title}</h1></Link>
                    <p>{data[4].author.name}</p>
                  </div>
                </div>
                </Link> 
              }

            </div>
            </div>
            </div>
            
            <div className="category-menu-content-right-container">
              { data.length > 5 &&
                <Link className="text-decoration-none text-dark" to={`/posts/${data[5].slug}`}><div className="category-menu-content-right">
                  <img src={data[5].imageUrl} alt="" />
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[5].slug}`}><h1>{data[5].title}</h1></Link>
                  <p>{data[5].author.name}</p>
                </div>
                </Link>
              }
              { data.length > 6 &&
               <Link className="text-decoration-none text-dark" to={`/posts/${data[6].slug}`}> <div className="category-menu-content-right">
                  <img src={data[6].imageUrl} alt="" />
                  <Link className="text-decoration-none text-dark" to={`/posts/${data[6].slug}`}><h1>{data[6].title}</h1></Link>
                  <p>{data[6].author.name}</p>
                </div>
                </Link>
              }
            </div>

          </div>
          </div>
          <div className="category-menu-container-ad-container">
              <Advert />
          </div>
        </div>
  )
}

export default CategoriesCardHome;