import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";
import axios from "axios";
import { toast } from 'react-toastify';
import "./contact.css";
import { BASE_URL } from '../../environment';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    fName: '',
    lName: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
  
    try {
      const response = await axios.post(`${BASE_URL}/contact-mail/send-email`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      console.log('Email sent successfully:', response.data);
  
      toast.success('Email sent successfully!');
      setFormData({
        email: '',
        fName: '',
        lName: '',
        company: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email', error);
      toast.error('Error sending email');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className='contact'>
      <Navbar />
      <div className="contact-container">
        <div className='cta'>
          <div className="cta-container">
            <div className="cta-contact-title">
              <h1>Looking to connect your brand with a passionate and engaged audience? </h1>
              <p style={{ color: "white" }} className='cta-title'>The Unburden offers a unique platform to reach individuals seeking to enrich their lives through travel, delicious food, and healthy living practices. Our audience is highly engaged and receptive to brands that align with their values of exploration, well-being, and a balanced lifestyle.</p>
            </div>
            <form className="cta-form-container">
              <div className="form-left">
                <div className="form-left-input">
                  <input type="text" name="fName" placeholder='First Name' value={formData.fName} onChange={handleChange} required />
                </div>
                <div className="form-left-input">
                  <input type="text" name="lName" placeholder='Last Name' value={formData.lName} onChange={handleChange} required />
                </div>
                <div className="form-left-input stuff">
                  <AiOutlineMail className='form-icon' />
                  <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-left-input stuff">
                  <BsFillBuildingsFill className='form-icon' />
                  <input type="text" name="company" placeholder='Company name' value={formData.company} onChange={handleChange} />
                </div>
                <div className="form-left-input stuff">
                  <TbTransactionDollar className='form-icon' />
                  <input type="text" name="budget" placeholder='Budget' value={formData.budget} onChange={handleChange} />
                </div>
              </div>
              <div className="form-right">
                <div className="form-left-textarea">
                  <textarea name="message" placeholder='Tell us about your brand....' value={formData.message} onChange={handleChange} />
                </div>
              </div>
              <div className="cta-footer-container">
                <h1>By continuing you agree to our <span>Privacy Policy</span></h1>
                <button type="submit" onClick={()=>handleSubmit()} className="cta-footer-button" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
