import React, {useState} from 'react'

import "./footer.css"

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import logo from "../../assets/Logo11.png"
import { Link } from 'react-router-dom';



const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigateToHome = () => {
        const newUrl = "/"
        window.location.href = newUrl
        setIsOpen(false)
    }
    const date = new Date()
  return (
    <div>
        <div className="footer-container">
        <div className="footer-title">
        <div className='footer-logo' onClick={navigateToHome}>
                      <img src={logo} alt="" />
                    </div>
            </div>
            <div className="footer-socials">
                <Link ><FaFacebookF className='footer-socials-space' /></Link>
                <Link><FaXTwitter className='footer-socials-space' /></Link>
                <Link><FaInstagram className='footer-socials-space' /></Link>
            </div>
            <div className="footer-copyright">
                <p>&#169; {date.getFullYear()} The Unburden. Powered by Vodzza.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer