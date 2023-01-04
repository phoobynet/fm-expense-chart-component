<script lang="ts" setup>
import SpendingCardMainChart from '@/components/SpendingCardMainChart.vue'
import SpendingCardMainFooter from '@/components/SpendingCardMainFooter.vue'
import SpendingCardMainHeader from '@/components/SpendingCardMainHeader.vue'
</script>

<template>
  <div class="spending-chart-main">
    <SpendingCardMainHeader :period-in-days="7" />
    <SpendingCardMainChart />
    <SpendingCardMainFooter />
  </div>
</template>

<style lang="scss" scoped>
.spending-chart-main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 255px 2.2fr;
  background-color: #fffbf6;
  min-height: 421px;
  border-radius: 0.6rem;
  padding: 1rem;

  @media screen and (min-width: 1440px) {
    min-height: 511px;
  }
}
</style>
