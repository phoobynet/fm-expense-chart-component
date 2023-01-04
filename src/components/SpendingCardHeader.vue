<script lang="ts" setup>
import { WeeklySpendKey } from '@/components/SpendingCardSymbols'
import numeral from 'numeral'
import { computed, inject } from 'vue'

const weeklySpend = inject(WeeklySpendKey)

const balance = computed(() => numeral(weeklySpend?.balance).format('$0,0.00'))
</script>

<template>
  <header class="spending-card-header">
    <div>
      <div class="caption">My balance</div>
      <div class="balance">{{ balance }}</div>
    </div>
    <img
      class="logo"
      src="@/assets/images/logo.svg"
      alt=""
    />
  </header>
</template>

<style lang="scss" scoped>
.spending-card-header {
  color: var(--color-neutral-cream);
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary-soft-red);
  height: 97px;
  border-radius: 0.6rem;
  padding: 1rem;

  .caption {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0;
  }

  .balance {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .logo {
    width: 60px;
    height: 40px;
    object-fit: contain;
    align-self: center;
  }
}

@media screen and (min-width: 1440px) {
  .spending-card-header {
    .logo {
      width: 72px;
      height: 48px;
    }

    .caption {
      font-size: 18px;
    }

    .balance {
      font-size: 2rem;
    }
  }
}
</style>
