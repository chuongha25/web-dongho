<template>
  <div class="dashboard-home">
    <Line id="my-chart-id" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})

import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
)

const chartData = ref({
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Số lượng truy cập',
      data: [500, 700, 900, 1200, 1000, 1500, 1300, 1100, 950, 800, 600, 400],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 3,
      pointRadius: 6,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgb(54, 162, 235)',
      pointBorderWidth: 2,
      fill: true,
    },
  ],
})

const chartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      ticks: {
        color: 'rgba(0, 0, 0, 0.6)',
        stepSize: 600,
      },
    },
  },
}

const chartRef = 'myChart'
</script>
