import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const CreatePost = () => {
  return (
    <div className='createpost'>
        <div className="createpost-container">
          <div className="createpost-navbar">
            <div className="createpost-navbar-left"></div>
            <div className="createpost-navbar-left">
              <p>Save draft</p>
              <div className="createpost-view"></div>
              <div className="createpost-publish">
                <p>Publish</p>
              </div>
              <div className="createpost-offcanvas"></div>
            </div>
          </div>
          <div className="createpost-body">

          </div>
        </div>
    </div>
  )
}

export default CreatePost