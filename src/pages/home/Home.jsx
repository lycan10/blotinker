import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../posts/Posts'

const Home = () => {
  return (
    <div className='home'>
        {/* <Navbar /> */}
        <Posts />
    </div>
  )
}

export default Home