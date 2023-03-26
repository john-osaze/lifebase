import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js/auto';

function Line() {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    if (!myChart) {
      const chartContext = chartRef.current.getContext('2d');
      const newChart = new Chart(chartContext, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              label: 'Haemoglobin Level',
              data: [75, 65, 80],
              fill: false,
              borderColor: '#00bfff',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
        },
      });
      setMyChart(newChart);
    }
  }, [myChart]);

  return (
    <div>
      <canvas id="myChart" ref={chartRef} style={{ width: '200px', height: '200px' }}/>
    </div>
  );
}

export default Line;
