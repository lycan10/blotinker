import React, { useState } from 'react';
import AdminListCard from '../../components/adminlistcard/AdminListCard';
import image1 from "../../assets/3.jpg";
import Sidebar from './components/sidebar';
import Header from './components/header';
import { useGetData, QUERY_KEY_FOR_DATA } from '../../components/hooks/useGetData';
import { dateFormat } from '../../util/dateFormat';

const PublishedPosts = () => {
  const [viewMode, setViewMode] = useState("dashboard");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { data, isLoading, error } = useGetData('/posts?perPage=15');
  const toggleOffcanvas = (event) => {
    event.preventDefault();
    setShowOffcanvas(!showOffcanvas);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
    setShowOffcanvas(false);
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className='adminpage'>
      <div className="adminpage-container">
        <Sidebar
          showOffcanvas={showOffcanvas}
          handleViewChange={handleViewChange}
          navigateToHome={navigateToHome}
        />
        <div className="adminpage-right">
          <Header toggleOffcanvas={toggleOffcanvas} />
          <div className="admin-page-right-posts-container">
            <div className="admin-page-right-posts-top">
              <h1>Published Post</h1>
            </div>
            <div className="admin-page-right-posts-content-container">
              <div className="admin-page-right-posts-list-container">
                <div className="admin-page-right-posts-list">
    
                {data && data.posts.length > 0 && data.posts.map((item, i) => (
                  <div key={i}>
                  <AdminListCard
                    id={item.id}
                    img={item.imageUrl}
                    title={item.title}
                    period={dateFormat(data?.createdAt)}
                    description={item.excerpt}
                    slug={item.slug}
                  />
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishedPosts;
