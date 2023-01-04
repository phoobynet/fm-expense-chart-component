<script lang="ts" setup>
const props = defineProps<{ periodInDays: number }>()
</script>

<template>
  <div class="spending-card-main-header">
    <h1>Spending - Last {{ props.periodInDays }} days</h1>
  </div>
</template>

<style lang="scss" scoped>
.spending-card-main-header {
  align-self: end;
  margin: 0 1.3rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>
