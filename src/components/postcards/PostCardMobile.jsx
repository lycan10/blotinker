import React from 'react'

import "./postcards.css"

const PostCardMobile = ({
    img, postDate, postTime, title
}) => {
    
  return (
    <div className='postcards' >
        <div className="postcards-image">
            <img src={img} alt="posts" />
        </div>
        <div className="postcards-title-container">
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
    </div>
  )
}

export default PostCardMobile