import React, {useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";

import CategoryCards from '../../components/categorycards/CategoryCards';
import CategoryCards2 from '../../components/categorycards/CategoryCards2';
import "./categories.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGetData } from '../../components/hooks/useGetData';
import cat1 from "../../assets/sub1.jpg";

import { motion } from "framer-motion";
import CategoriesCardHome from '../../components/categorycards/CategoriesCardHome';
import CategoriesCardHome2 from '../../components/categorycards/CategoriesCardHome2';

const CategoriesHome = () => {
  const { data: travel, isLoading: loading, error } = useGetData('/posts?perPage=7&category=1&minimal=true');
  const { data: health, isLoading: healthloading, healtherror } = useGetData('/posts?perPage=7&category=2&minimal=true');
  const { data: food, isLoading: foodloading, fooderror } = useGetData('/posts?perPage=7&category=3&minimal=true');
  const [isOpen, setIsOpen] = useState(false);

  
  const navigateToTravel = () => {
    const newUrl = "/travel"
    window.location.href = newUrl
    setIsOpen(false)
}
const navigateToFood = () => {
    const newUrl = "/food"
    window.location.href = newUrl
    setIsOpen(false)
}
const navigateToHealth = () => {
    const newUrl = "/health"
    window.location.href = newUrl
    setIsOpen(false)
}

  return (
    <div className="category">
      <div className="category-container">
        <div className="category-content-container">
          <CategoriesCardHome title="Travel & Adventure" goto={navigateToTravel} data={travel && travel?.posts?.length > 0 ? travel?.posts: []}/>
        </div>
        <div className="category-content-container">
        <CategoriesCardHome2 title="Health & Wellness" goto={navigateToHealth} data={health && health?.posts?.length > 0 ? health?.posts: []}/>
        </div>
        <div className="category-content-container">
        <CategoriesCardHome title="Food & Recipes" goto={navigateToFood} data={food && food?.posts?.length > 0 ? food?.posts: []}/>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHome;
