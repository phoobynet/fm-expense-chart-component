<script lang="ts" setup>
import { WeeklySpendKey } from '@/components/SpendingCardSymbols'
import { useSpendingCardMainChartOptions } from '@/components/useSpendingCardMainChartOptions'
import { DailySpend } from '@/lib/api/getWeeklySpending'
import { useWindowSize } from '@vueuse/core'
import { ChartData } from 'chart.js'
import { computed, inject } from 'vue'
import { Bar } from 'vue-chartjs'

const weeklySpend = inject(WeeklySpendKey)

const dailySpend = computed<DailySpend[]>(() => weeklySpend?.dailySpend ?? [])

const { width } = useWindowSize()

const barBorderRadius = computed<number>(() => {
  if (width.value < 1440) {
    return 3
  }

  return 6
})

const chartData = computed<ChartData<'bar'>>(() => {
  const highest = dailySpend.value.reduce((p, c) => Math.max(p, c.amount), 0)

  return {
    labels: dailySpend.value.map((x) => x.day),
    datasets: [
      {
        borderRadius: barBorderRadius.value,
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

const { chartOptions } = useSpendingCardMainChartOptions()
</script>

<template>
  <div class="spending-card-main-chart">
    <Bar
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<style lang="scss" scoped>
.spending-card-main-chart {
}
</style>
