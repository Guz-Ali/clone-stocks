import React, { useEffect, useState } from "react";
import "./LineGraph.css";
import 'chartjs-adapter-date-fns';
import './LineGraph.css'
import { enUS } from 'date-fns/locale';
import { Line as LineJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   ScatterController,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ScatterController,
//   Title,
//   Tooltip,
//   Legend,
// );



function LineGraph() {

  const [ graphData, setGraphData] = useState([]);

  const labels = graphData.map(dataVal => dataVal.x);

  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        data: graphData,
        backgroundColor: "#071106",
        borderColor: "#49B540",
        borderWidth:2,
        pointBorderColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'rgba(0,0,0,0)',
        // showLine: true,
        pointHoverBackgroundColor: "#49B540",
        pointHoverBorderColor: '#000000',
        pointHoverBorderWidth: 4,
        pointHoverRadius: 6,
      }
    ]
  }
  const options = {
    maintainAspectRatio: false,
    plugins:{
      legend: {
      display: false
      },
      tooltip:{
        mode: "index",
        intersect: false
      },
    },
    
    scales: { 
      x: {
        type: "time",
        adapters: {
          date: {
            locale: enUS
          }
        },
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "MMM dd, yyyy"
        },
        display: false,
      },
      y: {
        display: false,
      }
    }
  }

  const createMockData = () => {
    let data = [];
    let value = 50;
    for(var i=0; i< 365; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0 ) * Math.random() * 10);
      data.push({x: date, y:value})
    }
    setGraphData(data);
  }

  useEffect(() => {
    createMockData();

  }, [])

  return (
    <div className="linegraph">
      <Line data={data} options={options}/>
    </div>
  );
}

export default LineGraph;
