import React from 'react'

import "./postcards.css"
import { Link } from 'react-router-dom';

const PostCardMobile = ({
    img, postDate, postTime, title, slug
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
        <Link className="text-decoration-none text-dark" to={`/posts/${slug}`}><h1>{title}</h1></Link>
        </div>
    </div>
    </div>
  )
}

export default PostCardMobile