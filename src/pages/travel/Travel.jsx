import React, { useEffect } from 'react'
import Categories from '../categories/Categories'
import { useGetData } from '../../components/hooks/useGetData';
import "./travel.css"

import cat1 from "../../assets/sub1.jpg"

import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';


const Travel = () => {
  const location = useLocation();
  const { data: travel, isLoading: loading, error } = useGetData('/posts?perPage=20&category=1');

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  
  return (
    <div className='travels'>
      <Navbar />
      <div className="travel-container">
        <CategoryCards title="Travel & Adventure" data={travel && travel?.posts?.length > 0 ? travel?.posts: []}/>    
      </div>
      <Footer />
    </div>
  )
}

export default Travel