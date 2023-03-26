import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Bar() {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    if (!myChart) {
      const chartContext = chartRef.current.getContext('2d');
      const newChart = new Chart(chartContext, {
        type: 'bar',
        data: {
          labels: ['January', 'Febuary', 'March'],
          datasets: [
            {
              label: 'Blood Pressure',
              data: [12, 19, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      setMyChart(newChart);
    }
  }, [myChart]);

  return (
    <div>
      <canvas id="myChart" ref={chartRef}  style={{ width: '200px', height: '200px' }}/>
    </div>
  );
}

export default Bar;