import React from 'react'

import "./adminlistcard.css"
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDelete } from '../hooks/useDelete';
import { QUERY_KEY_FOR_DATA } from "../hooks/useGetData";


const AdminListCard = ({id, img, title, period, description, slug }) => {

    const deleteEndPointUrl="posts";

  const { removeData } = useDelete({
    queryKey: QUERY_KEY_FOR_DATA,
    deleteEndPointUrl,
  });

  return (
    <div className='adminlistcard'>
        <div className="adminlistcard-image">
            <img src={img} alt="" />
        </div>
        <div className="adminlistcard-container">
            <div className="adminlistcard-title">
                <h3>{title}</h3>
                <p>{period}</p>
            </div>
            <div className="adminlistcard-content">
                <p>{description}</p>
            </div>
            <div className="adminlistcard-content-container">
                <div className="adminlistcard-content-delete">
                    <RiEditFill className='listcard-icon' />
                    <Link className='text-decoration-none' to={`/admin/createpost?post=${slug}`}>
                        <p>Edit Post</p>
                    </Link>
                </div>
                <div className="adminlistcard-content-delete" onClick={()=>removeData(id)}>
                    <MdDelete className='listcard-icon'/>
                    <p>Delete</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminListCard