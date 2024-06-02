import React from 'react'

import "./footer.css"

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
  return (
    <div>
        <div className="footer-container">
        <div className="footer-title">
                <h1>BLOTINKER</h1>
            </div>
            <div className="footer-socials">
                <Link ><FaFacebookF className='footer-socials-space' /></Link>
                <Link><FaXTwitter className='footer-socials-space' /></Link>
                <Link><FaInstagram className='footer-socials-space' /></Link>
            </div>
            <div className="footer-copyright">
                <p>&#169; {date.getFullYear()} by BLOTINKER. Powered by LycanTech.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer