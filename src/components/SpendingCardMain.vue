<script lang="ts" setup>
import SpendingCardMainChart from '@/components/SpendingCardMainChart.vue'
import SpendingCardMainFooter from '@/components/SpendingCardMainFooter.vue'
import SpendingCardMainHeader from '@/components/SpendingCardMainHeader.vue'
</script>

<template>
  <div class="spending-chart-main">
    <SpendingCardMainHeader :period-in-days="7" />
    <SpendingCardMainChart />
    <div class="separator"></div>
    <SpendingCardMainFooter />
  </div>
</template>

<style lang="scss" scoped>
.spending-chart-main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 255px auto 2.2fr;
  background-color: #fffbf6;
  min-height: 421px;
  border-radius: 0.6rem;
  padding: 1rem 0;

  .separator {
    background-color: var(--color-neutral-cream);
    height: 3px;
    margin: 0 1.3rem;
  }

  @media screen and (min-width: 1440px) {
    min-height: 511px;
    border-radius: 1.5rem;

    .separator {
      margin: 0 2.5rem;
    }
  }
}
</style>
