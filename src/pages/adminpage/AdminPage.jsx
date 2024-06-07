import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo1 from "../../assets/a1.png";
import { useSignOut } from 'react-auth-kit';
import Dashboard from './Dashboard';
import Sidebar from './components/sidebar';
import Header from './components/header';

const AdminPage = () => {
  const signOut = useSignOut
  const [viewMode, setViewMode] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(true);
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
        {
          showOffcanvas &&
          <Sidebar
            showOffcanvas={showOffcanvas}
            handleViewChange={handleViewChange}
            navigateToHome={navigateToHome}
          />
        }
        <div className="adminpage-right">
          <Header toggleOffcanvas={toggleOffcanvas} />
          <div className="adminpage-right-content-container">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
