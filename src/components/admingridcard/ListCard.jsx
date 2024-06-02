import React from 'react'

import "../adminlistcard/adminlistcard.css"

import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";


const ListCard = ({img, title, period, description }) => {
  return (
    <div className='adminlistcard'>
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
    </div>
  )
}

export default ListCard