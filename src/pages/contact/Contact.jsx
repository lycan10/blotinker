import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import "./contact.css"
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";

const Contact = () => {
  return (
    <div className='contact'>
        <Navbar />
        <div className="contact-container">
        <div className='cta'>
        <div className="cta-container">
        <div className="cta-contact-title">
                <h1>Looking to connect your brand with a passionate and engaged audience? </h1>
                <p style={{color: "white"}} className='cta-title'>The Unburden offers a unique platform to reach individuals seeking to enrich their lives through travel, delicious food, and healthy living practices. Our audience is highly engaged and receptive to brands that align with their values of exploration, well-being, and a balanced lifestyle.</p>
            </div>
            <div className="cta-form-container">
            <div className="form-left">
                    <div className="form-left-input">
                        <input type="text" placeholder='First Name'/>
                    </div>
                    <div className="form-left-input">
                        <input type="text" placeholder='Last Name'/>
                    </div>
                    <div className="form-left-input stuff">
                    <AiOutlineMail className='form-icon' />
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="form-left-input stuff">
                    <BsFillBuildingsFill className='form-icon' />
                        <input type="text" placeholder='Company name'/>
                    </div>
                    <div className="form-left-input stuff">
                    <TbTransactionDollar className='form-icon' />
                        <input type="text" placeholder='Budget'/>
                    </div>
                </div>
                <div className="form-right">
                <div className="form-left-textarea">
                        <textarea type="text" placeholder='Tell us about your brand....'/>
                    </div>
                </div>
            </div>
            <div className="cta-footer-container">
                <h1>By continuing you agree to our <span>Privacy Policy</span></h1>
                <div className="cta-footer-button">
                    <p>Submit</p>
                </div>
            </div>
        </div>
    </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact