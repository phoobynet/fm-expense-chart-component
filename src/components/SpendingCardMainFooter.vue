<script lang="ts" setup>
import { WeeklySpendKey } from '@/components/SpendingCardSymbols'
import numeral from 'numeral'
import { computed, inject } from 'vue'

const weeklySpend = inject(WeeklySpendKey)

const totalThisMonth = computed(() =>
  numeral(weeklySpend?.totalThisMonth).format('$0,0.00'),
)

const differenceFromLastMonth = computed(() => {
  if (weeklySpend) {
    const r = numeral(weeklySpend.differenceFromLastMonth).format('0.0%')

    if (weeklySpend.differenceFromLastMonth > 0) {
      return `+${r}`
    }
  }
  return ''
})
</script>

<template>
  <div class="spending-chart-main-footer">
    <div>
      <div class="caption">Total this month</div>
      <div class="total-this-month">{{ totalThisMonth }}</div>
    </div>
    <div>
      <div class="difference-from-last-month">
        {{ differenceFromLastMonth }}
      </div>
      <div class="caption">from last month</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spending-chart-main-footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-top-color: var(--color-neutral-cream);
  border-top-style: solid;
  border-top-width: 3px;
  padding-bottom: 0.5rem;

  .caption {
    color: var(--color-neutral-medium-brown);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0;
  }

  .total-this-month {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 0;
    line-height: 30px;
    padding-top: 0.5rem;
  }

  .difference-from-last-month {
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0;
    text-align: right;
    line-height: 15px;
  }

  @media screen and (min-width: 1440px) {
    .caption {
      color: var(--color-neutral-medium-brown);
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0;
    }

    .total-this-month {
      font-weight: 700;
      font-size: 30px;
      letter-spacing: 0;
    }

    .difference-from-last-month {
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0;
      text-align: right;
    }
  }
}
</style>
