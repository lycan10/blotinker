import React from 'react'
import "./listcard.css"
import { Link } from 'react-router-dom';
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";


const ListCard = ({ img, title, description, slug }) => {

  return (
    <Link className="text-decoration-none text-dark adminlistcard" to={`/posts/${slug}`}>
        <div className="adminlistcard-image">
            <img src={img} alt="" />
        </div>
        <div className="adminlistcard-container">
            <div className="adminlistcard-title">
                <h3>{title}</h3>
            </div>
            <div className="adminlistcard-content">
                <p>{description}</p>
            </div>
        </div>
    </Link>
  )
}

export default ListCard