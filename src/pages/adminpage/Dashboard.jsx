import React from 'react'
import DashboardCards from './dashboardcards/DashboardCards';


import logo1 from "../../assets/a1.png";
import logo2 from "../../assets/a2.png";
import logo3 from "../../assets/a3.png";
import logo4 from "../../assets/a4.png";
import logo5 from "../../assets/a5.png";


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

const Dashboard = () => {
  return (
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
  )
}

export default Dashboard