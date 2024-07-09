import React from 'react'
import DashboardCards from './dashboardcards/DashboardCards';
import Chart from "react-apexcharts";

import logo1 from "../../assets/a1.png";
import logo2 from "../../assets/a2.png";
import logo3 from "../../assets/a3.png";
import logo4 from "../../assets/a4.png";
import logo5 from "../../assets/a5.png";
import { useGetData } from '../../components/hooks/useGetData';


const Dashboard = () => {
  const { data: stats, isLoading, error } = useGetData(`/stats`);
  const labels = stats?.monthlyTraffic ? stats?.monthlyTraffic.map(entry => `${entry.month} ${entry.year}`) : [];
  const totalViews = stats?.monthlyTraffic ? stats?.monthlyTraffic.map(entry => Number(entry.totalViews)) : [];

  const categoryLabels = stats?.top_categories ? stats?.top_categories.map(entry => `${entry.name}`) : [];
  const categoryValues = stats?.top_categories ? stats?.top_categories.map(entry => Number(entry.viewCount)) : [];

  const monthlyViewsOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center'
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#F4CE14","#4669FA", "#ffb300"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      colors: ["#F4CE14", "#4669FA", "#ffb300"],
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  const monthlyViews = [
    {
      "name":"Views",
      data: totalViews,
    }
  ];

  

  const DeviceLabels = stats?.devices ? stats?.devices.map(entry => `${entry.deviceType}`) : [];
  const DeviceValue = stats?.devices ? stats?.devices.map(entry => parseFloat(entry.activeUsers)) : [];

  const locationLabels = stats?.topCountries ? stats?.topCountries.map(entry => `${entry.country}`) : [];
  const locationValue = stats?.topCountries ? stats?.topCountries.map(entry => Number(entry.activeUsers)) : [];


  const categories = [
    {
      "name":"Views",
      data: categoryValues.slice(0, 5),
    }
  ];

  const locations = [
    {
      "name":"Views",
      data: locationValue.slice(0, 5),
    }
  ];

  const barOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#222222",
          fontFamily: "Inter",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    xaxis: {
      categories: categoryLabels.slice(0,5),
      labels: {
        style: {
          colors: "#222222",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: ["#F4CE14"],
  };


  const deviceOptions = {
    labels: DeviceLabels,
    dataLabels: {
      enabled: true,
    },

    colors: ["#F4CE14", "#444444", "#F1595C", "#0CE7FA", "#FA916B"],
    legend: {
      position: "bottom",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
  }


  const locationOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#222222",
          fontFamily: "Inter",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    xaxis: {
      categories: locationLabels.slice(0,5),
      labels: {
        style: {
          colors: "#222222",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: ["#F4CE14"],
  }
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
          <Chart options={monthlyViewsOptions} series={monthlyViews} type="area" height={350} />
        </div>
      </div>
      <div className="adminpage-right-content-dashboard-bottom-container">
        {/*<div className="adminpage-right-content-dashboard-bottom">
          <div className="bottom-stats-title">
            <h3>Top category</h3>
          </div>
          <div className="bottom-stats-content-container">
            <Chart  options={barOptions} series={categories}  type="bar" height="300" />
          </div>
        </div>*/}
        <div className="adminpage-right-content-dashboard-bottom">
          <div className="bottom-stats-title">
            <h3>Top demography</h3>
          </div>
          <div className="bottom-stats-content-container pie-chart-data">
            <Chart options={deviceOptions} series={DeviceValue} type="pie" height="300" />
          </div>
        </div>
        <div className="adminpage-right-content-dashboard-bottom">
          <div className="bottom-stats-title">
            <h3>Top location</h3>
          </div>
          <div className="bottom-stats-content-container">
            <Chart options={locationOptions} series={locations} type="bar" height="300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard