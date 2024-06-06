import React, {useEffect, useRef, useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Posts from '../posts/Posts'

import cta1 from "../../assets/c3.jpg"

import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Spinner from 'react-bootstrap/Spinner';

import "./home.css";
import PostCards from '../../components/postcards/PostCards';

import PopularCards from '../../components/popularcards/PopularCards';
import transition from '../../transition';

import { motion } from "framer-motion";
import Categories from '../categories/Categories'
import PostCardMobile from '../../components/postcards/PostCardMobile'
import { toast } from 'react-toastify';
import { Navigation } from 'swiper/modules';

import { useGetData } from '../../components/hooks/useGetData';
import { useCreate } from '../../components/hooks/useCreate';
import { dateFormat } from '../../util/dateFormat';
import { Link, useHistory } from 'react-router-dom';
import CategoriesHome from '../categories/CategoriesHome'

const Home = () => {

    const navigate = useNavigate();
    const [email, setEmail]=useState('');
    const { mutate, isLoading, isError } = useCreate();
    const { data: latest, isLoading: loading } = useGetData('/posts?perPage=7&status=published&minimal=true');
    const { data: storyOftheWeek, isLoading: storyOftheWeekloading, storyOftheWeekerror } = useGetData('/posts?perPage=1&category=8&minimal=true');
    const { data: featured, isLoading: featuredloading, featurederror } = useGetData('/posts?perPage=1&category=7&minimal=true');
    const { data: popular, isLoading: popularloading, popularerror } = useGetData('/posts?perPage=3&status=published&popular=true&minimal=true');
    
    const handleSubmit = () => {
        if (email) {
          mutate(
            { email, name:email, 'endpoint':'/subscribers' },
            {
              onSuccess: (data) => {
                setEmail('');
                toast.success('Success');
              },
              onError: (err)=>{
                toast.error('Error');
              }
            }
          );
        }
      };
  return (
    <div className="home">
            <Navbar />
        <div className="home-container">
        {
            featured && featured?.posts.length > 0 &&
            <div className="home-featured-story">
                <div className="home-featured-story-img">
                    <img src={featured?.posts[0]?.imageUrl} alt="" />
                </div>
                <div className="home-featured-story-content">
                    <p>FEATURED STORY</p>
                    <div className="home-featured-story-title">
                        <div className="home-featured-story-title">
                            <ul>
                                <li>{dateFormat(featured?.posts[0].createdAt)}</li>
                            <span><li></li></span> 
                                <li>{featured?.posts[0].read_time}</li>
                            </ul>
                        </div>
                        <Link className="text-decoration-none text-white" to={`/posts/${featured?.posts[0].slug}`}><h1 className='text-uppercase'>{featured?.posts[0].title}</h1></Link>
                    </div>
                </div>
            </div>
        }
        <div className="home-latest-container">
            <h3>Latest</h3>
        <div className="home-latest"> 
            {
                latest && latest?.posts?.length > 0 &&
                latest?.posts?.map(({ id, imageUrl, title, createdAt, views, slug }, i) => (
                    <PostCards
                        key={id}
                        img={imageUrl}
                        title={title}
                        postDate={dateFormat(createdAt)}
                        postTime={views}
                        slug={slug}
                        height={i === 0 ? 300: i===1 ? 400: i===2 ? 280 : 320}
                    />
                ))
            }
        </div>
        </div>
        <div className="home-latest-container-mobile">
            <h3>Latest</h3>
            <div className="home-latest">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    { latest && latest?.posts?.length > 0 && latest?.posts.map(({ id, imageUrl, title, createdAt, views, slug  }) => (
                        <SwiperSlide key={id}>
                            <PostCardMobile
                                img={imageUrl}
                                title={title}
                                postDate={createdAt}
                                postTime={views}
                                slug={slug}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className="home-sotw">
            <div className="home-sotw-image">
                <div className="home-sotw-div"></div>
                <div className=" home-sotw-content">
                    <p>STORY OF THE WEEK</p>
                    { storyOftheWeek && storyOftheWeek?.posts.length > 0 &&
                        <div className="home-sotw-title">
                            <div className=" post-category home-sotw-time">
                                <ul>
                                    <li>{dateFormat(storyOftheWeek?.posts[0].createdAt)}</li>
                                <span><li></li></span> 
                                    <li>{storyOftheWeek?.posts[0].read_time}</li>
                                </ul>
                            </div>
                            <Link className="text-decoration-none text-dark" to={`/posts/${storyOftheWeek?.posts[0].slug}`}><h1 className='text-uppercase'>{storyOftheWeek?.posts[0].title}</h1></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
        
        <div className="home-popular">
            <h3>Most popular</h3>
            <div className="home-popular-container">
                { popular && popular?.posts.length> 0 && 
                    <PopularCards data={popular.posts} />
                }
            </div>
            <div className="home-popular-container-mobile">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                { popular && popular?.posts?.length && popular?.posts && (
                    <SwiperSlide >
                        <PopularCards data={popular.posts} />
                    </SwiperSlide>
                )}
                </Swiper>
                
            </div>
        </div>
        <div className="home-categories">
            <CategoriesHome />
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
                            <h3 onClick={()=>handleSubmit()}>{isLoading ? <><Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            <span>Loading...</span></>: "SUBSCRIBE" }</h3>
                        </div>
                        <div className="home-cta-form-input-main">
                            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="home-cta-image">
                    <img src={cta1} alt="" />
                </div>
            </div>
        </div>

        </div>
        <Footer />
        </div>
  )
}

export default Home;