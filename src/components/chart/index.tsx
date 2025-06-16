import {
  type ChartOptions,
  type ChartData,
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Filler,
  CategoryScale,
  Chart,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

import { addWeeks, isBefore } from 'date-fns';

const underLineGridPlugin = {
  id: 'underLineGridPlugin',
  afterDatasetsDraw(chart) {
    const { ctx, scales } = chart;
    const xScale = scales.x;
    const yScale = scales.y;
    const dataset = chart.getDatasetMeta(0);
    const points = dataset.data;

    const minDate = xScale.min; // timestamp
    const maxDate = xScale.max;

    ctx.save();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#2f2f2f';
    ctx.lineWidth = 1;

    let currentDate = new Date(minDate);

    while (currentDate <= new Date(maxDate)) {
      const x = xScale.getPixelForValue(currentDate);

      // Find 2 chart points surrounding this x
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        if (p1.x <= x && x <= p2.x) {
          const ratio = (x - p1.x) / (p2.x - p1.x);
          const y = p1.y + ratio * (p2.y - p1.y);

          ctx.beginPath();
          ctx.moveTo(x, yScale.bottom);
          ctx.lineTo(x, y);
          ctx.stroke();
          break;
        }
      }

      currentDate = addWeeks(currentDate, 1);
    }

    ctx.restore();
  },
};

// Register components
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip,
  Filler,
  underLineGridPlugin
);

// 👉 Custom plugin to draw vertical line on hover
// const activeElements = chart.getActiveElements();

const verticalLinePlugin = {
  id: 'verticalLinePlugin',
  afterDatasetsDraw: (chart: Chart) => {
    const activeElements = chart.getActiveElements();

    if (activeElements.length > 0) {
      const { ctx } = chart;
      const x = activeElements[0].element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#666';
      ctx.setLineDash([4, 4]); // dashed line
      ctx.stroke();
      ctx.restore();
    }
  },
};

const data: ChartData<'line'> = {
  labels: [
    '2024-01-20',
    '2024-04-01',
    '2024-05-20',
    '2024-06-15',
    '2024-07-01',
    '2024-07-20',
    '2024-08-01',
    '2024-09-01',
    '2024-09-20',
    '2024-11-01',
    '2024-12-01',
  ],
  datasets: [
    {
      label: 'Revenue',
      data: [45000, 20000, 50000, 44000, 90000, 60000, 60000, 30000, 50000, 58000, 64000],
      borderColor: '#C8E972',
      borderWidth: 2,
      tension: 0,
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'month',
        displayFormats: { month: 'MMM' },
      },
      grid: {
        drawOnChartArea: false, // hide default full grid lines
      },
      ticks: {
        color: '#ccc',
        maxTicksLimit: 6,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (val: any) => `$${val / 1000}K`,
        color: '#ccc',
      },
      grid: {
        color: '#333',
      },
    },
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (ctx) {
          const val: any = ctx.raw;
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

ChartJS.register(verticalLinePlugin);

export default function CustomLineChart() {
  return (
    <div className="text-white w-full h-[300px] p-4 rounded-md">
      <Line data={data} options={options} />
    </div>
  );
}
