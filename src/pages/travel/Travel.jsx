import React from 'react'
import Categories from '../categories/Categories'
import { useGetData } from '../../components/hooks/useGetData';
import "./travel.css"

import cat1 from "../../assets/sub1.jpg"

import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx';

const travelData = [
    {
        id: 0,
        header: "Travel & Adventure",
        img: cat1,
        title: "FETCH FESTIVAL BRLN 2023",
        author: "ByJena McGregorForbes Staff",
      
    }
  ]

const Travel = () => {
  const { data: travel, isLoading: loading, error } = useGetData('/posts?perPage=15&category=1&minimal=true');

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