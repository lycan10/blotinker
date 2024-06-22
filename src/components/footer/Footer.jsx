import React, {useState} from 'react'

import "./footer.css"

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

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
                <Link to={"https://www.facebook.com/profile.php?id=61561143368097"}><FaFacebookF className='footer-socials-space' /></Link>
                <Link to={"https://x.com/TUnburden"}><FaXTwitter className='footer-socials-space' /></Link>
                <Link to={"https://www.instagram.com/unburden_okay?igsh=MWxkOTFjbndpdmI2dA%3D%3D&utm_source=qr"}><FaInstagram className='footer-socials-space' /></Link>
                <Link to={"https://www.tiktok.com/@the.unburden?_t=8nOMw6g2oXB&_r=1"}><FaTiktok className='footer-socials-space' /></Link>
            </div>
            <div className="footer-copyright">
                <p>&#169; {date.getFullYear()} The Unburden. Powered by Vodzza.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer