import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Accordion from 'react-bootstrap/Accordion';
import "./adminpage.css";
import DashboardCards from './dashboardcards/DashboardCards';
import { RxHamburgerMenu } from "react-icons/rx";
import logo1 from "../../assets/a1.png";
import logo2 from "../../assets/a2.png";
import logo3 from "../../assets/a3.png";
import logo4 from "../../assets/a4.png";
import logo5 from "../../assets/a5.png";
import image1 from "../../assets/3.jpg";
import { FaList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import AdminListCard from '../../components/adminlistcard/AdminListCard';

import CreatePost from '../createpost/CreatePost';

import { MdPostAdd } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";

import { useSignOut } from 'react-auth-kit';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  maintainAspectRatio: false 
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Monthly views',
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      borderColor: '#F4CE14',
      backgroundColor: '#F4CE14',
    },
  ],
};

export const data2 = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: '',
      data: [12, 19],
      backgroundColor: [
        '#F4CE14',
        'rgba(54, 162, 233, 0.2)',
      ],
      borderColor: [
        '#F4CE14',
        'rgba(54, 162, 233, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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
                    <div className="adminpage-categories-accordion">
                      <p>Featured post</p>
                    </div>
                    <div className="adminpage-categories-accordion">
                      <p>Story of the week</p>
                    </div>
                    <div className="adminpage-categories-accordion">
                      <p>Travel</p>
                    </div>
                    <div className="adminpage-categories-accordion">
                      <p>Food</p>
                    </div>
                    <div className="adminpage-categories-accordion">
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
              <div className="adminpage-right-content-dashboard">
                <div className="adminpage-right-content-dashboard-stats-top">
                  <DashboardCards title={"Total users"} figures={"2500"} percentage={"4%"} period={"From last week"} img={logo1} />
                  <DashboardCards title={"Average time"} figures={"2500"} percentage={"4%"} period={"From last week"} img={logo2} />
                  <DashboardCards title={"Total likes"} figures={"2500"} percentage={"4%"} period={"From last week"} img={logo3} />
                  <DashboardCards title={"Total comments"} figures={"2500"} percentage={"4%"} period={"From last week"} img={logo4} />
                  <DashboardCards title={"Total posts"} figures={"2500"} percentage={"4%"} period={"From last week"} img={logo5} />
                </div>
                <div className="adminpage-right-content-dashboard-views-container">
                  <div className="adminpage-right-content-dashboard-views" style={{ width: '100%' }}>
                    <Line options={options} data={data} width={100} />
                  </div>
                </div>
                <div className="adminpage-right-content-dashboard-bottom-container">
                  <div className="adminpage-right-content-dashboard-bottom">
                    <div className="bottom-stats-title">
                      <h3>Top category</h3>
                    </div>
                    <div className="bottom-stats-content-container">
                      <div className="bottom-stats-content">
                      <div className="bottom-stats-content-title">
                        <h3>Travel</h3>
                        </div>
                        <div className="bottom-stats-figure-container">
                          <div className="bottom-stats-figure" style={{width:80}}>

                            </div>
                        </div>
                        <div className="bottom-stats-content-title">
                        <p>123K</p>
                        </div>
                      </div>
                      <div className="bottom-stats-content">
                      <div className="bottom-stats-content-title">
                        <h3>Health</h3>
                        </div>
                        <div className="bottom-stats-figure-container">
                          <div className="bottom-stats-figure" style={{width: 50}}>

                            </div>
                        </div>
                        <div className="bottom-stats-content-title">
                          <p>100K</p>
                        </div>
                      </div>
                      <div className="bottom-stats-content">
                      <div className="bottom-stats-content-title">
                        <h3>Food</h3>
                        </div>
                        <div className="bottom-stats-figure-container">
                          <div className="bottom-stats-figure" style={{width:90}}>

                            </div>
                        </div>
                        <div className="bottom-stats-content-title">
                          <p>80k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="adminpage-right-content-dashboard-bottom">
                    <div className="bottom-stats-title">
                      <h3>Top demography</h3>
                    </div>
                    <div className="bottom-stats-content-container pie-chart-data">
                      <Pie  data={data2}  />
                    </div>
                  </div>
                  <div className="adminpage-right-content-dashboard-bottom">
                    <div className="bottom-stats-title">
                      <h3>Top location</h3>
                    </div>
                    <div className="bottom-stats-content-container">
                      <div className="bottom-stats-content">
                      <div className="bottom-stats-content-title">
                        <h3>Usa</h3>
                        </div>
                        <div className="bottom-stats-figure-container">
                          <div className="bottom-stats-figure" style={{width:80}}>

                            </div>
                        </div>
                        <div className="bottom-stats-content-title">
                        <p>123K</p>
                        </div>
                      </div>
                      <div className="bottom-stats-content">
                      <div className="bottom-stats-content-title">
                        <h3>Nigeria</h3>
                        </div>
                        <div className="bottom-stats-figure-container">
                          <div className="bottom-stats-figure" style={{width: 40}}>

                            </div>
                        </div>
                        <div className="bottom-stats-content-title">
                          <p>100K</p>
                        </div>
                      </div>
                      <div className="bottom-stats-content">
                      <div className="bottom-stats-content-title">
                        <h3>Canada</h3>
                        </div>
                        <div className="bottom-stats-figure-container">
                          <div className="bottom-stats-figure" style={{width:30}}>

                            </div>
                        </div>
                        <div className="bottom-stats-content-title">
                          <p>80k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {viewMode === "drafts" && (
              <div className="admin-page-right-posts-container">
                <div className="admin-page-right-posts-top">
                  <h1>Saved Drafts</h1>
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
