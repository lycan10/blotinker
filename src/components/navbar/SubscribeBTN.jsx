import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import sub from "../../assets/sub3.jpg";
import axios from 'axios';

const SubscribeBTN = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/send-email', {
        to: email,
        name,
      });
      setEmail('');
      setName('');
      setShow(false);
      toast.success('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email', error);
      toast.error('Error sending email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="navbar-subscribe">
      <p onClick={handleShow}>Subscribe</p>

      <Modal show={show} onHide={handleClose} animation={true} centered size="lg">
        <Modal.Body>
          <div className="sub">
            <div className="sub-image">
              <img src={sub} alt="Subscription" />
            </div>
            <div className="sub-text-container">
              <div className="sub-button-container">
                <div className="sub-button">
                  <IoMdClose onClick={handleClose} className='sub-button2' />
                </div>
              </div>
              <div className="sub-text">
                <h1>Subscribe</h1>
                <p>For all the latest travel destinations, recipes and wellness tips.</p>
              </div>
              <div className="sub-form">
                <form onSubmit={handleSubmit}>
                  <div className="sub-input">
                    <input 
                      type="text" 
                      placeholder='Your name' 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="sub-input">
                    <input 
                      type="email" 
                      placeholder='your.email@example.com' 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="sub-input-button">
                    <div type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span>Loading...</span>
                        </>
                      ) : (
                        "SUBSCRIBE"
                      )}
                    </div>
                  </div>
                </form>
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
};

export default SubscribeBTN;
