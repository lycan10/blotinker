import React from 'react'
import Categories from '../categories/Categories'


import image5 from "../../assets/p1.jpg"
import cat1 from "../../assets/sub1.jpg"
import { useGetData } from '../../components/hooks/useGetData';
import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const Health = () => {
  const location = useLocation();
  const { data: health, isLoading: healthloading, healtherror } = useGetData('/posts?perPage=20&category=2');

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <div className='travels'> 
      <Navbar />
      <div className="travel-container">
        <CategoryCards title="Health & Wellness" data={health && health?.posts?.length > 0 ? health?.posts: []}/>
      </div>
      <Footer />
    </div>
  )
}

export default Health