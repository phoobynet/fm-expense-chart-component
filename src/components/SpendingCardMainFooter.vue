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
    <div class="caption">Total this month</div>
    <div class="values">
      <div class="total-this-month">{{ totalThisMonth }}</div>
      <div class="diff-container">
        <div class="diff">
          {{ differenceFromLastMonth }}
        </div>
        <div class="caption">from last month</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spending-chart-main-footer {
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: space-between;
  margin: 0 1.3rem 0.6rem;
  align-self: end;

  .values {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

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
  }

  .diff {
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0;
    text-align: right;
  }

  .diff-container {
    text-align: right;
    line-height: 1.2rem;
    padding-bottom: 0.3rem;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 2.5rem 1.5rem;

    .caption {
      color: var(--color-neutral-medium-brown);
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0;
    }

    .total-this-month {
      font-weight: 700;
      font-size: 48px;
      letter-spacing: 0;
    }

    .diff-container {
      text-align: right;
      line-height: 1rem;
      padding-bottom: 1rem;
    }

    .diff {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0;
      text-align: right;
      line-height: 2rem;
    }
  }
}
</style>
