<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import dayjs from 'dayjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive<{
  labels: string[]
  datasets: { label: string; backgroundColor: string; data: number[] }[]
}>({
  labels: [],
  datasets: [],
})

const chartOptions = {
  responsive: true,
}

const listData = ref<number[]>([])

const fetchData = async () => {
  try {
    const { data } = await useCustomFetch<number[]>('/api/statistical')
    if (!data.value) return
    listData.value = data.value
  } catch (error: any) {
    console.log(error)
  }
}

await fetchData()

chartData.labels = Object.keys(listData.value || {}).map((monthNumber) =>
  dayjs().month(parseInt(monthNumber)).format('MMMM'),
)
chartData.datasets = [
  {
    label: 'Tổng Doanh Thu Theo Tháng',
    backgroundColor: '#f87979',
    data: Object.values(listData.value || {}),
  },
]
</script>
