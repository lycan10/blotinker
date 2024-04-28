import React from 'react'

import "./popularcards.css"

const popularCards = ({
    img, postDate, postTime, title, content
}) => {
  return (
    <div className='postcards'>
        <div className="popular-image">
            <img src={img} alt="posts" />
        </div>
        <div className="post-time postCard-spacing">
                <ul>
                    <li>{postDate}</li>
                   <span><li></li></span> 
                    <li>{postTime}</li>
                </ul>
            </div>
            <div className="postcards-title">
                <h1>{title}</h1>
            </div>
            <div className="popularcards-content">
                <p>{content}</p>
            </div>
    </div>
  )
}

export default popularCards