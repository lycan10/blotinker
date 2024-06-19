import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import sub from "../../assets/sub3.jpg";
import { useCreate } from '../hooks/useCreate';

const SubscribeBTN = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { mutate, isLoading } = useCreate();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      mutate(
        { email, name: email, 'endpoint': '/subscribers' },
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
    <div className="navbar-subscribe">
      <p onClick={handleShow}>Subscribe</p>

      <Modal show={show} onHide={handleClose} animation={true} centered size="lg">
        <Modal.Body>
          <div className="sub">
            <div className="sub-image">
              <img src={sub} alt="" />
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
                <div className="sub-input">
                  <input type="text" placeholder='Your name' />
                </div>
                <div className="sub-input">
                  <input value={email} type="text" placeholder='your.email@example.com' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="sub-input-button" onClick={handleSubmit}>
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
              <div className="sub-footer">
                <p>We value your privacy and will never send irrelevant information.</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SubscribeBTN;
