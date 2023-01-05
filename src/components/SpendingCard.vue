<script lang="ts" setup>
import SpendingCardHeader from '@/components/SpendingCardHeader.vue'
import SpendingCardMain from '@/components/SpendingCardMain.vue'
import { WeeklySpendKey } from '@/components/SpendingCardSymbols'
import { WeeklySpend } from '@/lib/api/getWeeklySpending'
import { provide } from 'vue'

const props = defineProps<{ weeklySpend: WeeklySpend }>()

provide(WeeklySpendKey, props.weeklySpend)
</script>

<template>
  <div
    class="spending-card"
    v-if="props.weeklySpend"
  >
    <SpendingCardHeader />
    <SpendingCardMain />
  </div>
</template>

<style lang="scss" scoped>
.spending-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 343px;
  min-height: 534px;

  @media screen and (min-width: 1440px) {
    width: 540px;
    min-height: 660px;
    gap: 2rem;
  }
}
</style>
