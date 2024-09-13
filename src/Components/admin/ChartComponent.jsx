import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

const ChartComponent = ({ type, data, options, id }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(...registerables);

    // Destroy the previous chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById(id).getContext('2d');
    chartRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options, type, id]);

  return <canvas id={id} width="400" height="200"></canvas>;
};

export default ChartComponent;
