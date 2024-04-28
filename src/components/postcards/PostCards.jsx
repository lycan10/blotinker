import React from 'react'

import "./postcards.css"

const PostCards = ({
    img, postDate, postTime, title, height
}) => {
    const cardStyle = {
        height: `${height}px`,
      };
  return (
    <div className='postcards' style={cardStyle}>
        <div className="postcards-image">
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
    </div>
  )
}

export default PostCards