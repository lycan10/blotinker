import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-subscribe">
                <p>Subscribe</p>
            </div>
            <div className="navbar-title">
                <h1>BLOTINKER</h1>
                <p>Innovations For You</p>
            </div>
            <div className="navbar-menu">
                <h3>MENU</h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar