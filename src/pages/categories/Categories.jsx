import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";

import CategoryCards from '../../components/categorycards/CategoryCards';
import CategoryCards2 from '../../components/categorycards/CategoryCards2';
import "./categories.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGetData } from '../../components/hooks/useGetData';
import cat1 from "../../assets/sub1.jpg";

import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Categories = () => {
  const location = useLocation()
  const { data: travel, isLoading: loading, error } = useGetData('/posts?perPage=7&category=1&minimal=true');
  const { data: health, isLoading: healthloading, healtherror } = useGetData('/posts?perPage=7&category=2&minimal=true');
  const { data: food, isLoading: foodloading, fooderror } = useGetData('/posts?perPage=7&category=3&minimal=true');
  
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <div className="category">
      <div className="category-container">
        <div className="category-content-container">
          <CategoryCards title="Travel & Adventure" data={travel && travel?.posts?.length > 0 ? travel?.posts: []}/>
        </div>
        <div className="category-content-container">
        <CategoryCards2 title="Health & Wellness" data={health && health?.posts?.length > 0 ? health?.posts: []}/>
        </div>
        <div className="category-content-container">
        <CategoryCards title="Food & Recipes" data={food && food?.posts?.length > 0 ? food?.posts: []}/>
        </div>
      </div>
    </div> 
  );
}

export default Categories;
