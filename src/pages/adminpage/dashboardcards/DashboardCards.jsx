import React from 'react'

import "./dashboardcards.css"

const DashboardCards = ({title, figures, percentage, period, img}) => {
  return (
    <div className='dashboardcards'> 
    <div className="dashboardcards-title">
        <img src={img} alt="" />
        <p>{title}</p>
    </div>
       
        <h1>{figures}</h1>
        <p><span>{percentage}</span>{period}</p>
    </div>
  )
}

export default DashboardCards