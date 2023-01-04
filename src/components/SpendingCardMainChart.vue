<script lang="ts" setup>
import { WeeklySpendKey } from '@/components/SpendingCardSymbols'
import { DailySpend } from '@/lib/api/getWeeklySpending'
import {
  BarElement,
  CategoryScale,
  ChartData,
  ChartEvent,
  Chart as ChartJS,
  ChartOptions,
  ChartTypeRegistry,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import numeral from 'numeral'
import { computed, inject } from 'vue'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const weeklySpend = inject(WeeklySpendKey)

const dailySpend = computed<DailySpend[]>(() => weeklySpend?.dailySpend ?? [])

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  onHover(event: ChartEvent) {
    ;(event.native?.target as HTMLElement).style.cursor = 'pointer'
  },
  layout: {
    padding: {
      top: 20,
      bottom: 20,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: 'hsl(28, 10%, 53%)',
      },
    },
  },
  plugins: {
    tooltip: {
      position: 'nearest',
      displayColors: false,
      yAlign: 'bottom',
      xAlign: 'center',
      bodyFont: {
        weight: 'bold',
      },
      caretSize: 0,
      callbacks: {
        title: function () {
          return ''
        },
        label: function (context) {
          return numeral(context.raw as number).format('$0,0.00')
        },
      },
    },
    legend: {
      display: false,
    },
  },
}

const chartData = computed<ChartData<'bar'>>(() => {
  const highest = dailySpend.value.reduce((p, c) => Math.max(p, c.amount), 0)

  return {
    labels: dailySpend.value.map((x) => x.day),
    datasets: [
      {
        borderRadius: 3,
        data: dailySpend.value.map((x) => x.amount),
        borderSkipped: false,
        backgroundColor: dailySpend.value.map((x) =>
          highest - x.amount < 0.00001
            ? 'hsl(186, 34%, 60%)'
            : 'hsl(10, 79%, 65%)',
        ),
        hoverBackgroundColor: dailySpend.value.map((x) =>
          highest - x.amount < 0.00001
            ? 'hsl(186, 49%, 80%)'
            : 'hsl(10, 100%, 76%)',
        ),
      },
    ],
  }
})
</script>

<template>
  <div>
    <Bar
      :data="chartData"
      :options="options"
    />
  </div>
</template>

<style lang="scss" scoped></style>
