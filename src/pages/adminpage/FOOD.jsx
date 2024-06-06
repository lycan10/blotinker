import React from 'react'

import AdminListCard from '../../components/adminlistcard/AdminListCard'

import image1 from "../../assets/3.jpg";

const Food = () => {
  return (
    <div className="admin-page-right-posts-container">
    <div className="admin-page-right-posts-top">
      <h1>Food & recipes</h1>
    </div>
    <div className="admin-page-right-posts-content-container">
      <div className="admin-page-right-posts-list-container">
        <div className="admin-page-right-posts-list">
          <AdminListCard
            img={image1}
            title={"The best brands to run Magnolia Software"}
            period={"7 April 2019"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "}
          />
          <AdminListCard
            img={image1}
            title={"The best brands to run Magnolia Software"}
            period={"7 April 2019"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "}
          />
          <AdminListCard
            img={image1}
            title={"The best brands to run Magnolia Software"}
            period={"7 April 2019"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "}
          />
          <AdminListCard
            img={image1}
            title={"The best brands to run Magnolia Software"}
            period={"7 April 2019"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Food