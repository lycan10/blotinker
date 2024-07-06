import React, { useState, useEffect } from 'react';
import './navbar.css'; // Custom CSS
import { FaFacebookF, FaRegCommentAlt, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { AiOutlineLink, AiOutlineClose } from "react-icons/ai";
import { toast } from 'react-toastify';
import { HashLink } from "react-router-hash-link";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCreate } from '../hooks/useCreate';
import { useGetUserInfo } from '../hooks/useGetUserInfo';
import SubscribeBTN from './SubscribeBTN';
import menuItems from './MenuItems';
import logo from "../../assets/Logo11.png";
import sub from "../../assets/sub3.jpg";
import close from "../../assets/close.png";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { token } = useGetUserInfo();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
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
        setIsOpen(prevState => !prevState);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            mutate(
                { email, name: email, endpoint: '/subscribers' },
                {
                    onSuccess: () => {
                        setEmail('');
                        setShow(false);
                        toast.success('Success');
                    },
                    onError: (err) => {
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
                    <div className='navbar-logo' onClick={() => handleNavigation('/')}>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="navbar-menu" onClick={toggleDropdown}>
                    <h3>MENU</h3>
                </div>
            </div>
            <div className={`navbar-dropdown ${isOpen ? 'is-active' : ''}`}>
                <div className="navbar-main-container">
                    <div className="navbar-header">
                        <h3 onClick={() => handleNavigation('/admin')}>{token ? "Dashboard" : "LOGIN"}</h3>
                        <div className='navbar-logo' onClick={() => handleNavigation('/')}>
                            <img src={logo} alt="Logo" />
                        </div>
                        <h3 onClick={toggleDropdown}>CLOSE</h3>
                    </div>
                    <div className="navbar-menus-container slide-top">
                        <div className="navbar-menus">
                            <NavLink className="links" onClick={() => handleNavigation('/travel')}>TRAVEL AND ADVENTURE</NavLink>
                            <NavLink className="links" onClick={() => handleNavigation('/health')}>HEALTH AND WELLNESS</NavLink>
                            <NavLink className="links" onClick={() => handleNavigation('/food')}>FOOD AND RECIPES</NavLink>
                            <NavLink className="links" onClick={() => handleNavigation('/all')}>ALL</NavLink>
                            <NavLink className="links" onClick={() => handleNavigation('/')}>HOME</NavLink>
                            <NavLink className="links" onClick={() => handleNavigation('/about')}>ABOUT</NavLink>
                            <NavLink className="links" onClick={() => handleNavigation('/contact')}>CONTACT</NavLink>
                            <div className="navbar-menu-socials">
                                <Link to={"https://www.facebook.com/profile.php?id=61561143368097"}><FaFacebookF className='footer-socials-space cta-socials' /></Link>
                                <Link to={"https://x.com/TUnburden"}><FaXTwitter className='footer-socials-space cta-socials' /></Link>
                                <Link to={"https://www.instagram.com/unburden_okay?igsh=MWxkOTFjbndpdmI2dA%3D%3D&utm_source=qr"}><FaInstagram className='footer-socials-space cta-socials' /></Link>
                                <Link to={"https://www.tiktok.com/@the.unburden?_t=8nOMw6g2oXB&_r=1"}><FaTiktok className='footer-socials-space cta-socials' /></Link>
                            </div>
                        </div>
                        <div className="navbar-menu-cta">
                            <h1 style={{ color: "white", marginBottom: "3rem", fontSize: "18px", fontWeight: "lighter" }}>Stay updated! Subscribe to our blog today.</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="home-cta-form-input">
                                    <div className="home-cta-input-button">
                                        <p>Email <span>*</span></p>
                                        <h3>{isLoading ? <><Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                            <span>Loading...</span></> : "SUBSCRIBE"}</h3>
                                    </div>
                                    <div className="home-cta-form-input-main">
                                        <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-copyright cta-copy">
                        <p>&#169; {new Date().getFullYear()} by BLOTINKER. Powered by LycanTech.</p>
                    </div>
                </div>
            </div>
            <nav className="navbar-mobile">
                <div className='navbar-logo2' onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {active ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </div>
                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <div className="navbar-menu-socials-mobile">
                        <Link to={"https://www.facebook.com/profile.php?id=61561143368097"} ><FaFacebookF className='footer-socials-space cta-socials cta-mobile' /></Link>
                        <Link to={"https://x.com/TUnburden"}><FaXTwitter className='footer-socials-space cta-socials cta-mobile' /></Link>
                        <Link to={"https://www.instagram.com/unburden_okay?igsh=MWxkOTFjbndpdmI2dA%3D%3D&utm_source=qr"}><FaInstagram className='footer-socials-space cta-socials cta-mobile' /></Link>
                        <Link to={"https://www.tiktok.com/@the.unburden?_t=8nOMw6g2oXB&_r=1"}><FaTiktok className='footer-socials-space cta-socials cta-mobile' /></Link>
                    </div>
                </ul>
            </nav>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='btn-title'>
                            <img src={sub} alt="" />
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='close'>
                        <img src={close} alt="" />
                    </div>
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <Button variant="primary" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                                </Button>
                            </div>
                            {isError && <div className="error-message">{error.message}</div>}
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Navbar;
