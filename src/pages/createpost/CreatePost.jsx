import React,{useState, useEffect, useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import off from "../../assets/slide.png"
import { IoAdd } from "react-icons/io5";

import "./createpost.css"
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

import { GiQuillInk } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

import { IoIosHome } from "react-icons/io";

const navigateToPeview = () => {
  const newUrl = "/preview"
  window.location.href = newUrl
}

const navigateToHme = () => {
  const newUrl = "/"
  window.location.href = newUrl
}

const CreatePost = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <div className='createpost'>
        <div className="createpost-container">
          <div className="createpost-navbar">
          <div className="createpost-navbar-left">
            <IoIosHome className='createpost-navbar-icon' onClick={navigateToHme} />
            </div>
            <div className="createpost-navbar-left">
              <h1>Create post</h1>
            </div>
            <div className="createpost-navbar-left">
              <p>Save draft</p>
              <div className="createpost-view"></div>
              <div className="createpost-publish">
                <p>Publish</p>
              </div>
              <div className="createpost-offcanvas-img" onClick={toggleOffcanvas}>
              <BsReverseLayoutSidebarReverse className='canvas-icon' />
              </div>
            </div>
          </div>
          <div className="createpost-body-container">
          <div className="createpost-body-input-container">
          <div className="createpost-body-input-title">
            <input type="text" placeholder='Add title' />
          </div>
          <div className="createpost-body-input">
            <textarea type="text" placeholder='Type / to choose a box' />
          </div>
            <div className="createpost-add-new-post">
              <div className="createpost-new-button">
                <IoAdd className='createpost-new-button-icon' />
              </div>
            </div>

            </div>
              <div className={`createpost-offcanvas ${showOffcanvas ? 'show' : ''}`}>
                <div className="offcanvas-container">
                  <div className="offcanvas-top">
                    <h3>Post</h3>
                    <IoCloseOutline className='offcanvas-icon' onClick={toggleOffcanvas} />
                  </div>

                  <div className="offcanvas-title-container">
                  <div className="offcanvas-title">
                    <GiQuillInk className='offcanvas-icon'  />
                    <h3>No Title</h3>
                  </div>
                    <p>Last edited 20 hours ago.</p>
                  </div>

                  <div className="offcanvas-summary">
                    <h3>Content</h3>
                    <div className="offcanvas-summary-image">
                      <p>Set featured image</p>
                    </div>
                    <div className="offcanvas-summary-body-container">
                    <div className="offcanvas-summary-body">
                      <p>Visibility</p>
                      <p><span>Public</span></p>
                    </div>
                    <div className="offcanvas-summary-body">
                      <p>Publish</p>
                      <p><span>Immediately</span></p>
                    </div>
                    <div className="offcanvas-summary-body">
                      <p>Category</p>
                      <p><span>Food</span></p>
                    </div>
                    <div className="offcanvas-summary-body">
                      <p>URL</p>
                      <p><span>Public</span></p>
                    </div>
                    <div className="offcanvas-summary-author">
                      <p>AUTHOR </p>
                      <p>Gbogboade</p>
                    </div>
                    
                    </div>
                  </div>
                  <div className="offcanvas-preview-container">
                  <div className="offcanvas-preview-button" onClick={navigateToPeview}>
                    <IoEyeSharp className='offcanvas-preview-icon '  />
                    <p>Preview</p>
                  </div>
                  </div>

                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CreatePost