import React, { useState, useEffect } from 'react';
import './navbar.css'; // Assuming you have a CSS file for styling

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { toast } from 'react-toastify';
import {HashLink} from "react-router-hash-link"

import { NavLink, Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import sub from "../../assets/sub3.jpg"
import close from "../../assets/close.png"
import { IoMdClose } from "react-icons/io";

import menuItems from './MenuItems';

import logo from "../../assets/Logo11.png"

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCreate } from '../hooks/useCreate';
import Spinner from 'react-bootstrap/Spinner';
import { useGetUserInfo } from '../hooks/useGetUserInfo';
import SubscribeBTN from './SubscribeBTN';

const date = new Date()

const Navbar = () => {

    const [show, setShow] = useState(false);
    const { token }= useGetUserInfo();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const [active, setActive] = useState(false);
    const { mutate, isLoading, isError, error } = useCreate();
    const [email, setEmail] = useState('');

    const handleClick = () => {
        setActive(!active);
        if (!active) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      };
    
      useEffect(() => {
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, []);

    const toggleDropdown = () => {
        console.log('Toggle dropdown');
        const body = document.querySelector('body');
        const newIsOpen = !isOpen;
        
        if (newIsOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto'; 
        }
    
        setIsOpen(newIsOpen);
    };

    const navigateToHome = () => {
        const newUrl = "/"
        window.location.href = newUrl
        setIsOpen(false)
    }
    const navigateToContact = () => {
      const newUrl = "/contact"
      window.location.href = newUrl
      setIsOpen(false)
  }

    const navigateToAll = () => {
        const newUrl = "/all"
        window.location.href = newUrl
        setIsOpen(false)
    }
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
    const navigateToAbout = () => {
      const newUrl = "/about"
      window.location.href = newUrl
      setIsOpen(false)
  }

    const navigateToCreatePost = () => {
        navigate('/admin');
        setIsOpen(false);
    };

    const handleSubmit = () => {
        if (email) {
          mutate(
            { email, name:email, 'endpoint':'/subscribers' },
            {
              onSuccess: (data) => {
                setEmail('');
                setShow(false);
                toast.success('Success');
              },
              onError: (err)=>{
                toast.error(err?.message || 'Error');
              }
            }
          );
        }
      };

    return (
        <div className='navbar'>
            <div className="navbar-container">
                <SubscribeBTN />
                <div className="navbar-title">
                    <div className='navbar-logo' onClick={navigateToHome}>
                      <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-menu" onClick={toggleDropdown}>
                    <h3>MENU</h3>
                </div>
            </div>
            <div className={`navbar-dropdown ${isOpen ? 'is-active' : ''}`}>
                <div className="navbar-main-container">
                   <div className="navbar-header">
                    <h3 onClick={navigateToCreatePost}>{token ? "Dashboard" : "LOGIN"}</h3>
                    <div className='navbar-logo' onClick={navigateToHome}>
                      <img src={logo} alt="" />
                    </div>
                    <h3 onClick={toggleDropdown}>CLOSE</h3>
                   </div>
                   <div className="navbar-menus-container slide-top">
                   <div className="navbar-menus">
                    <NavLink className="links" onClick={navigateToTravel}>TRAVEL AND ADVENTURE</NavLink>
                    <NavLink className="links" onClick={navigateToHealth}>HEALTH AND WELLNESS</NavLink>
                    <NavLink className="links" onClick={navigateToFood}>FOOD AND RECIPES</NavLink>
                    <NavLink // CSS class name for the active state
                    className="links" onClick={navigateToAll}>ALL</NavLink>
                    <NavLink className="links" onClick={navigateToHome}>HOME</NavLink>
                    <NavLink className="links" onClick={navigateToAbout}>ABOUT</NavLink>
                    <NavLink className="links" onClick={navigateToContact}>CONTACT</NavLink>
                    <div className="navbar-menu-socials">
                    <Link to={"https://www.facebook.com/profile.php?id=61561143368097"}><FaFacebookF className='footer-socials-space cta-socials' /></Link>
                    <Link to={"https://x.com/TUnburden"}><FaXTwitter className='footer-socials-space cta-socials' /></Link>
                    <Link to={"https://www.instagram.com/unburden_okay?igsh=MWxkOTFjbndpdmI2dA%3D%3D&utm_source=qr"}><FaInstagram className='footer-socials-space cta-socials' /></Link>
                    <Link to={"https://www.tiktok.com/@the.unburden?_t=8nOMw6g2oXB&_r=1"}><FaTiktok className='footer-socials-space cta-socials' /></Link>
                    </div>
                   </div>
                   <div className="navbar-menu-cta">
                    <h1 style={{color: "white", marginBottom: "3rem", fontSize:"18px", fontWeight:"lighter"}}>Stay updated! Subscribe to our blog today.</h1>
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
                            <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    </div>
                   
                   </div>
                   <div className="footer-copyright cta-copy">
                        <p>&#169; {date.getFullYear()} by BLOTINKER. Powered by LycanTech.</p>
                    </div>
                </div>
            </div>

     <nav className="navbar-mobile">
      <div className='navbar-logo2' onClick={navigateToHome}>
                      <img src={logo} alt="" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
      
      {active ? <AiOutlineClose /> : <RxHamburgerMenu /> }
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
        
            <div className="navbar-menu-socials-mobile">
                <Link to={"https://www.facebook.com/profile.php?id=61561143368097"} ><FaFacebookF className='footer-socials-space cta-socials cta-mobile' /></Link>
                <Link to={"https://x.com/TUnburden"}><FaXTwitter className='footer-socials-space cta-socials cta-mobile' /></Link>
                <Link to={"https://www.instagram.com/unburden_okay?igsh=MWxkOTFjbndpdmI2dA%3D%3D&utm_source=qr"}><FaInstagram className='footer-socials-space cta-socials cta-mobile' /></Link>
                <Link to={"https://www.tiktok.com/@the.unburden?_t=8nOMw6g2oXB&_r=1"}><FaTiktok className='footer-socials-space cta-socials cta-mobile' /></Link>
            </div>
            <div className="navbar-menu-socials-mobile">
            <SubscribeBTN />
            </div>
            
      </ul>
     
    </nav>
        </div>
    );
}

export default Navbar;
