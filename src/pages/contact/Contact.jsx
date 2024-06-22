import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";
import axios from "axios";
import { toast } from 'react-toastify';
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await axios.post('http://localhost:3000/send-email', {
        to: email,
        fName,
        lName,
        company,
        budget,
        message
      });
      setEmail('');
      setFName('');
      setLName('');
      setCompany('');
      setBudget('');
      setMessage('');

      toast.success('Email sent successfully!');
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
            <form onSubmit={handleSubmit} className="cta-form-container">
              <div className="form-left">
                <div className="form-left-input">
                  <input type="text" placeholder='First Name' value={fName} onChange={(e) => setFName(e.target.value)} />
                </div>
                <div className="form-left-input">
                  <input type="text" placeholder='Last Name' value={lName} onChange={(e) => setLName(e.target.value)} />
                </div>
                <div className="form-left-input stuff">
                  <AiOutlineMail className='form-icon' />
                  <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-left-input stuff">
                  <BsFillBuildingsFill className='form-icon' />
                  <input type="text" placeholder='Company name' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className="form-left-input stuff">
                  <TbTransactionDollar className='form-icon' />
                  <input type="text" placeholder='Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
                </div>
              </div>
              <div className="form-right">
                <div className="form-left-textarea">
                  <textarea type="text" placeholder='Tell us about your brand....' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
              </div>
              <div className="cta-footer-container">
                <h1>By continuing you agree to our <span>Privacy Policy</span></h1>
                <div type="submit" className="cta-footer-button" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit"}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
