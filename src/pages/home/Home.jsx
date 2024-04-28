import React, {useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../posts/Posts'

import banner from "../../assets/main-post.jpg"
import Footer from '../../components/footer/Footer'

import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"

import image5 from "../../assets/p1.jpg"
import image6 from "../../assets/p2.jpg"
import image7 from "../../assets/p3.jpg"

import cta1 from "../../assets/c3.jpg"

import { useNavigate } from 'react-router-dom';



import "./home.css";
import PostCards from '../../components/postcards/PostCards';

import PopularCards from '../../components/popularcards/PopularCards';
import transition from '../../transition';

import { motion } from "framer-motion";

const Home = () => {

    const navigate = useNavigate()

    const latestData = [
        {
            id: 0,
            img: image2,
            title: "THE UNBRANDED BRAND",
            postDate: "Jun 12, 2023",
            postTime: 2,
            height:300 // Specify the height for the first post card
        },
        {
            id: 1,
            img: image4,
            title: "SEEKING INSPIRATION? 15 RESOURCES THAT WILL SURPRISE YOU",
            postDate: "Jun 12, 2023",
            postTime: 4,
            height: 400 // Specify the height for the second post card
        },
        {
            id: 2,
            img:image3,
            title: "73 QUESTIONS WITH DONNA FAY",
            postDate: "Jun 12, 2023",
            postTime: 1,
            height: 280
        },
        {
            id: 3,
            img:image1,
            title: "HOW TO BRAND A DISEASE?",
            postDate: "Jun 12, 2023",
            postTime: 1,
            height: 320
        }
    ]

    const popularData = [
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
        }
    ]

  return (
        <div className="home-container">
            <div className="home-featured-story">
                <div className="home-featured-story-img">
                    <img src={banner} alt="" />
                </div>
                <div className="home-featured-story-content">
                    <p>FEATURED STORY</p>
                    <div className="home-featured-story-title">
                        <div className="home-featured-story-title">
                            <ul>
                                <li>Jun 12, 2023</li>
                            <span><li></li></span> 
                                <li>2 min</li>
                            </ul>
                        </div>
                        <h1 onClick={()=> navigate("/posts")}>A SURREAL CONCRETE DREAM</h1>
                    </div>
                </div>
        </div>
        <div className="home-latest-container">
            <h3>LATEST</h3>
        <div className="home-latest"> 
            {
                latestData.map(({ id, img, title, postDate, postTime, height }) => (
                    <PostCards
                        key={id}
                        img={img}
                        title={title}
                        postDate={postDate}
                        postTime={postTime}
                        height={height}
                    />
                ))
            }
        </div>
        </div>
        <div className="home-sotw">
            <div className="home-sotw-image">
                <div className="home-sotw-div"></div>
                <div className=" home-sotw-content">
                    <p>STORY OF THE WEEK</p>
                    <div className="home-sotw-title">
                        <div className=" post-category home-sotw-time">
                            <ul>
                                <li>Jun 12, 2023</li>
                            <span><li></li></span> 
                                <li>2 min</li>
                            </ul>
                        </div>
                        <h1>THE STORY BEHIND “FYI: I’M ABOUT TO LOVE YOU” — AN INTERVIEW WITH KAY VAN HANS</h1>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="home-popular">
            <h3>Most Popular</h3>
        <div className="home-popular-container">
            {
                popularData.map(({ id, img, title, postDate, postTime, content })=>{
                    return(
                        <div>
                            <PopularCards 
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
        </div>
        </div>
        <div className="home-cta" id='subscribe'>
            <div className="home-cta-container">
                <div className="home-cta-form" >
                    <div className="home-cta-form-title">
                        <h1 style={{color: "white"}}>Stay updated! Subscribe to our blog today.</h1>
                    </div>
                    <div className="home-cta-form-input">
                        <div className="home-cta-input-button">
                            <p>Email <span>*</span></p>
                            <h3>SUBSCRIBE</h3>
                        </div>
                        <div className="home-cta-form-input-main">
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="home-cta-image">
                    <img src={cta1} alt="" />
                </div>
            </div>
        </div>

        </div>
  )
}

export default Home;