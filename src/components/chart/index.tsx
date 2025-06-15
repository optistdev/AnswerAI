// src/components/CustomLineChart.tsx
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   TimeScale,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
import { Line } from 'react-chartjs-2';

// ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, TimeScale, Tooltip, Filler, Legend);

const data = {
  labels: [
    '2024-04-01',
    '2024-05-01',
    '2024-05-20',
    '2024-06-15',
    '2024-07-01',
    '2024-07-20',
    '2024-08-01',
    '2024-09-01',
    '2024-09-20',
    '2024-10-01',
  ],
  datasets: [
    {
      label: 'Revenue',
      data: [45000, 20000, 50000, 44000, 90000, 60000, 60000, 30000, 50000, 58000],
      borderColor: '#C8E972',
      pointBackgroundColor: '#0e0d0d',
      pointBorderColor: '#C8E972',
      pointBorderWidth: 2,
      borderWidth: 2,
      tension: 0, // straight lines
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'time' as const,
      time: {
        unit: 'month',
        displayFormats: { month: 'MMM' },
      },
      grid: {
        color: (ctx: any) =>
          ctx.tick?.label === 'Jul' ? '#C8E972' : '#222',
        borderDash: (ctx: any) =>
          ctx.tick?.label === 'Jul' ? [4, 4] : [],
        drawTicks: true,
        drawOnChartArea: true,
      },
      ticks: {
        color: '#ccc',
        autoSkip: true,
        maxTicksLimit: 6,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (val: number) => `$${val / 1000}K`,
        color: '#ccc',
      },
      grid: {
        color: '#333',
        drawTicks: false,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (ctx: any) {
          const val = ctx.raw;
          return `$${(val / 1000).toFixed(1)}K`;
        },
      },
      backgroundColor: '#161618',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#333',
      borderWidth: 1,
    },
    legend: { display: false },
  },
};

export default function CustomLineChart() {
  return (
    <div className="bg-[#0e0d0d] text-white w-full h-[350px] p-4 rounded-md">
      <Line data={data} />
    </div>
  );
}
