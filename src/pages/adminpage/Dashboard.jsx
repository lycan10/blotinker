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
import { useGetData } from '../../components/hooks/useGetData';

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
  const { data: stats, isLoading, error } = useGetData(`/stats`);
  const labels = stats?.monthlyTraffic ? stats?.monthlyTraffic.map(entry => `${entry.month} ${entry.year}`) : [];

  const activeUsersList = stats?.monthlyTraffic ? stats?.monthlyTraffic.map(entry => Number(entry.activeUsers)) : [];



  const monthlyViews = {
    labels,
    datasets: [
      {
        label: 'Monthly views',
        data: activeUsersList,
        borderColor: '#F4CE14',
        backgroundColor: '#F4CE14',
      },
    ],
  };
  return (
    <div className="adminpage-right-content-dashboard">
      <div className="adminpage-right-content-dashboard-stats-top">
        <DashboardCards title={"Total users"} figures={stats?.totalUsers} percentage={stats?.comparisons.totalUsersChange + '%'} period={"From last week"} img={logo1} />
        <DashboardCards title={"Average time"} figures={stats?.averageSessionDuration + ' min'} percentage={stats?.comparisons.averageTimeChange} period={"From last week"} img={logo2} />
        <DashboardCards title={"Total likes"} figures={stats?.likes} percentage={stats?.comparisons.likesChange + "%"} period={"From last week"} img={logo3} />
        <DashboardCards title={"Total comments"} figures={stats?.comments} percentage={stats?.comparisons.commentsChange + "%"} period={"From last week"} img={logo4} />
        <DashboardCards title={"Total posts"} figures={stats?.posts} percentage={stats?.comparisons.postsChange + "%"} period={"From last week"} img={logo5} />
      </div>
      <div className="adminpage-right-content-dashboard-views-container">
        <div className="adminpage-right-content-dashboard-views" style={{ width: '100%' }}>
          <Line options={options} data={monthlyViews} width={100} />
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
                <div className="bottom-stats-figure" style={{ width: 80 }}>
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
                <div className="bottom-stats-figure" style={{ width: 50 }}>

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
                <div className="bottom-stats-figure" style={{ width: 90 }}>

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
            <Pie data={data2} />
          </div>
        </div>
        <div className="adminpage-right-content-dashboard-bottom">
          <div className="bottom-stats-title">
            <h3>Top location</h3>
          </div>
          <div className="bottom-stats-content-container">
            {
              stats?.topCountries && 
              stats?.topCountries.slice(0, 6).map((item, i)=>(
              <div key={i} className="bottom-stats-content">
                <div className="bottom-stats-content-title">
                  <h3>{item.country}</h3>
                </div>
                <div className="bottom-stats-figure-container">
                  <div className="bottom-stats-figure" style={{ width: 80 }}>

                  </div>
                </div>
                <div className="bottom-stats-content-title">
                  <p>{item.activeUsers}</p>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard