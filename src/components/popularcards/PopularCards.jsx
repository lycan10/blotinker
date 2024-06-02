import React from 'react'

import "./popularcards.css"
import { dateFormat } from '../../util/dateFormat';
import { Link } from 'react-router-dom';

const popularCards = ({
    data=[]
}) => {
  return (
    <>
    { 
    data.length > 0 && data.map(({imageUrl, title, createdAt, excerpt, views, slug})=>(
        <div className='postcards'>
            <div className="popular-image">
                <img src={imageUrl} alt="posts" />
            </div>
            <div className="popularcards-title">
                <div className="post-time postCard-spacing">
                    <ul>
                        <li>{dateFormat(createdAt)}</li>
                    <span><li></li></span> 
                        <li>{views}</li>
                    </ul>
                </div>
                <div className="postcards-title">
                <Link className="text-decoration-none text-dark" to={`/posts/${slug}`}><h1 className='truncate2'>{title}</h1></Link>
                </div>
                <div className="popularcards-content">
                    <p className='truncate3'>{excerpt}</p>
                </div>
            </div>
        </div>
    ))  
    }
    </>
  )
}

export default popularCards