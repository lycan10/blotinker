import React from 'react'
import Categories from '../categories/Categories'


import image5 from "../../assets/p1.jpg"
import cat1 from "../../assets/sub1.jpg"
import { useGetData } from '../../components/hooks/useGetData';
import CategoryCards from "../../components/categorycards/CategoryCards.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx';

const HealthData = [
    {
        id: 0,
        header: "Health & Wellness",
        img: image5,
        title: "FETCH FESTIVAL BRLN 2023",
        author: "ByJena McGregorForbes Staff",
      
    }
  ]

const Health = () => {
  const { data: health, isLoading: healthloading, healtherror } = useGetData('/posts?perPage=15&category=2&minimal=true');


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