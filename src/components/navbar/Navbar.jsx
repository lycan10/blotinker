import React, { useState, useEffect } from 'react';
import './navbar.css'; // Assuming you have a CSS file for styling

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

import {HashLink} from "react-router-hash-link"

import { NavLink, Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import sub from "../../assets/sub3.jpg"
import close from "../../assets/close.png"
import { IoMdClose } from "react-icons/io";
const date = new Date()

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
  


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

    const navigateToCreatePost = () => {
        navigate('/createpost');
        setIsOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="navbar-subscribe" onClick={handleShow}>
                    <p>Subscribe</p>
                </div>
                <div className="navbar-title">
                    <h1 onClick={navigateToHome}>BLOTINK</h1>
                </div>
                <div className="navbar-menu" onClick={toggleDropdown}>
                    <h3>MENU</h3>
                </div>
            </div>
            <div className={`navbar-dropdown ${isOpen ? 'is-active' : ''}`}>
                <div className="navbar-main-container">
                   <div className="navbar-header">
                    <h3 onClick={navigateToCreatePost}>CREATE POST</h3>
                    <h1 onClick={navigateToHome}>BLOTINKER</h1>
                    <h3 onClick={toggleDropdown}>CLOSE</h3>
                   </div>
                   <div className="navbar-menus-container slide-top">
                   <div className="navbar-menus">
                    <NavLink className="links" onClick={navigateToTravel}>TRAVEL AND ADVENTURE</NavLink>
                    <NavLink className="links" onClick={navigateToHealth}>HEALTH AND WELLNESS</NavLink>
                    <NavLink className="links" onClick={navigateToFood}>FOOD AND RECIPES</NavLink>
                    <NavLink // CSS class name for the active state
                    className="links" onClick={navigateToAll}>ALL</NavLink>
                    <NavLink className="links">HOME</NavLink>
                    <NavLink className="links" to="">ABOUT</NavLink>
                    <NavLink className="links" to="">CONTACT</NavLink>
                    <div className="navbar-menu-socials">
                    <Link ><FaFacebookF className='footer-socials-space cta-socials' /></Link>
                    <Link><FaXTwitter className='footer-socials-space cta-socials' /></Link>
                    <Link><FaInstagram className='footer-socials-space cta-socials' /></Link>
                    </div>
                   </div>
                   <div className="navbar-menu-cta">
                    <h1 style={{color: "white", marginBottom: "3rem", fontSize:"18px", fontWeight:"lighter"}}>Stay updated! Subscribe to our blog today.</h1>
                    <div className="home-cta-form-input">
                        <div className="home-cta-input-button">
                            <p>Email <span>*</span></p>
                            <h3>SUBSCRIBE</h3>
                        </div>
                        <div className="home-cta-form-input-main">
                            <input type="text" />
                        </div>
                    </div>
                    </div>
                   
                   </div>
                   <div className="footer-copyright cta-copy">
                        <p>&#169; {date.getFullYear()} by BLOTINKER. Powered by LycanTech.</p>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={true} centered size="lg">
       
        <Modal.Body>
            <div className="sub">
                <div className="sub-image">
                    <img src={sub} alt="" />
                </div>
                <div className="sub-text-container">
                    <div className="sub-button-container">
                    <div className="sub-button" onClick={handleClose}>
                        <IoMdClose className='sub-button2' />
                    </div>
                    </div>
                    <div className="sub-text">
                        <h1>Subscribe</h1>
                        <p>For all the latest travel destinations, recipes and wellness tips.</p>
                    </div>
                    <div className="sub-form">
                        <div className="sub-input">
                            <input type="text" placeholder='Your name' />
                        </div>
                        <div className="sub-input">
                        <input type="text" placeholder='your.email@example.com' />
                        </div>
                        <div className="sub-input-button">
                            SUBSCRIBE
                        </div>
                    </div>
                    <div className="sub-footer">
                        <p>We value your privacy and will never send irrelevant information.</p>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
        </div>
    );
}

export default Navbar;
