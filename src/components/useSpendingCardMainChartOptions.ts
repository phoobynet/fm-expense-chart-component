import { useWindowSize } from '@vueuse/core'
import { ChartEvent, ChartOptions } from 'chart.js/dist/types'
import deepMerge from 'deepmerge'
import numeral from 'numeral'
import { ref, watch } from 'vue'

const defaultOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  onHover(event: ChartEvent) {
    ;(event.native?.target as HTMLElement).style.cursor = 'pointer'
  },
  layout: {
    padding: {
      top: 20,
      bottom: 20,
      left: 16,
      right: 16,
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

const desktopLayout: Partial<ChartOptions<'bar'>> = {
  layout: {
    padding: {
      left: 32,
      right: 32,
    },
  },
  plugins: {
    tooltip: {
      bodyFont: {
        size: 18,
      },
    },
  },
}

const mobileLayout: Partial<ChartOptions<'bar'>> = {
  layout: {
    padding: {
      left: 16,
      right: 16,
    },
  },
  plugins: {
    tooltip: {
      bodyFont: {
        size: 13,
      },
    },
  },
}

/**
 * Granular control of chart configuration based on window size
 * @param {number} desktopSize - the min-width of a desktop view
 */
export const useSpendingCardMainChartOptions = (desktopSize = 1440) => {
  const { width } = useWindowSize()

  const chartOptions = ref<ChartOptions<'bar'>>({ ...defaultOptions })

  watch(
    width,
    (newWidth) => {
      if (newWidth < desktopSize) {
        chartOptions.value = deepMerge(defaultOptions, mobileLayout)
      } else {
        chartOptions.value = deepMerge(defaultOptions, desktopLayout)
      }
    },
    {
      immediate: true,
    },
  )

  return {
    chartOptions,
  }
}
