<script lang="ts" setup>
import SpendingCard from '@/components/SpendingCard.vue'
import { WeeklySpend, getWeeklySpending } from '@/lib/api/getWeeklySpending'
import { onMounted, ref } from 'vue'

const weeklySpend = ref<WeeklySpend>()
const fetching = ref<boolean>(true)

onMounted(async () => {
  await getWeeklySpending().then((data) => {
    weeklySpend.value = data
    fetching.value = false
  })
})
</script>

<template>
  <div
    class="expenses"
    v-if="!fetching && weeklySpend"
  >
    <SpendingCard :weekly-spend="weeklySpend" />
  </div>
</template>

<style lang="scss" scoped>
.expenses {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
