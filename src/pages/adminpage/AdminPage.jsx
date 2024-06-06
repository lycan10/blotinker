import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./adminpage.css";

import { RxHamburgerMenu } from "react-icons/rx";
import logo1 from "../../assets/a1.png";
import image1 from "../../assets/3.jpg";

import CreatePost from '../createpost/CreatePost';

import { MdPostAdd } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";

import { useSignOut } from 'react-auth-kit';



import Travel from './Travel';
import Food from "./FOOD";
import Health from "./Health"
import SOTW from "./SOTW";
import FeaturedPost from "./FeaturedPost";
import SavedDraft from './SavedDraft';
import PublishedPost from './PublishedPost';
import Dashboard from './Dashboard';



const AdminPage = () => {
  const signOut = useSignOut
  const [viewMode, setViewMode] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  const handleViewChange = (mode) => {
    setViewMode(mode);
    setShowOffcanvas(!showOffcanvas)
  };

  const navigateToHome = () => {
    const newUrl = "/"
    window.location.href = newUrl
    setIsOpen(false)
}
const navigateToCreatePost = () => {
  const newUrl = "/createpost"
    window.location.href = newUrl
    setIsOpen(false)
};

  return (
    <div className='adminpage'> 
      <div className="adminpage-container">
        <div className= {`adminpage-left ${showOffcanvas ? 'open' : ''}`} >
          <div className="adminpage-logo" onClick={navigateToHome}>
            <h1>Blotink</h1>
          </div>
          <div className="adminpage-analytics" onClick={() => handleViewChange("dashboard")}>
            <h3>Dashboard</h3>
          </div>
          <div className="adminpage-general">
            <div className="adminpage-home" onClick={navigateToHome}>
            <IoIosHome className='admin-home-icon' />
              <h3>Home</h3>
            </div>
            <div className="adminpage-categories">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="adminpage-accordion-title">
                    <MdPostAdd />
                      <p>Posts</p>
                    </div>
                  
                    </Accordion.Header>
                  <Accordion.Body>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("drafts")}>
                      <p >Saved drafts</p>
                    </div>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("published")}>
                      <p >Published posts</p>
                    </div>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("createpost")}>
                      <p>Create post</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  <div className="adminpage-accordion-title">
                  <TbCategoryPlus />
                      <p>Categories</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("featuredpost")}>
                      <p>Featured post</p>
                    </div>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("sotw")}>
                      <p>Story of the week</p>
                    </div>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("travel")}>
                      <p>Travel</p>
                    </div>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("food")}>
                      <p>Food</p>
                    </div>
                    <div className="adminpage-categories-accordion" onClick={() => handleViewChange("health")}>
                      <p>Health</p>
                    </div>
                    <div className="adminpage-categories-accordion">
                      <p>Create new category</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="adminpage-right">
          <div className="adminpage-right-navbar">
            <div className="adminpage-right-hamburger" onClick={toggleOffcanvas}>
              <RxHamburgerMenu />
            </div>
            <div className="adminpage-right-user-container">
              <div className="adminpage-right-user">
                <img src={logo1} alt="" />
              </div>
              <h3>Admin</h3>
              <div role="button" className="ps-4" onClick={()=>signOut()}>
              <p className='text-danger'>Logout</p>
            </div>
            </div>
          </div>
          <div className="adminpage-right-content-container">
            {viewMode === "dashboard" && (
             <Dashboard />
            )}
            {viewMode === "drafts" && (
            <SavedDraft />
            )}
              {viewMode === "published" && (
            <PublishedPost />
            )}
            {viewMode === "travel" && (
              <Travel />
            )}
              {viewMode === "health" && (
              <Health />
            )}
              {viewMode === "food" && (
              <Food />
            )}
              {viewMode === "sotw" && (
              <SOTW />
            )}
             {viewMode === "featuredpost" && (
              <FeaturedPost />
            )}
            {
              viewMode === "createpost" && (
                <div className="createpost">
                  <CreatePost />
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
