import React from 'react'

import "./postcards.css"
import { Link } from 'react-router-dom';
import { dateFormat } from '../../util/dateFormat';


const PostCardMobile = ({
    img, postDate, postTime, title, slug, excerpt
}) => {
    
  return (
    <div className='postcards' >
        <div className="postcards-image">
            <img src={img} alt="posts" />
        </div>
        <div className="postcards-title-container">
        <div className="post-time postCard-spacing">
                <ul>
                    <li>{dateFormat(postDate)}</li>
                   <span><li></li></span> 
                    <li>{postTime}</li>
                </ul>
        </div>
        <div className="postcards-title">
        <Link className="text-decoration-none text-dark" to={`/posts/${slug}`}><h1>{title}</h1></Link>
        </div>
        <div className="popularcards-content">
                    <p className='truncate3'>{excerpt}</p>
                </div>
    </div>
    </div>
  )
}

export default PostCardMobile