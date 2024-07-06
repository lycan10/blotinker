import React from 'react'
import Categories from '../categories/Categories'

import "./food.css"
import image6 from "../../assets/p2.jpg"
import cat1 from "../../assets/sub1.jpg"
import { useGetData } from '../../components/hooks/useGetData';
import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
  const location = useLocation();
  const { data: food, isLoading: foodloading, fooderror } = useGetData('/posts?perPage=20&category=3');

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return (
    <div className='travels'>
      <Navbar />
      <div className="travel-container">
        <CategoryCards title="Food & Recipes" data={food && food?.posts?.length > 0 ? food?.posts: []}/>
      </div>
      <Footer /> 
    </div>
  )
}

export default Food