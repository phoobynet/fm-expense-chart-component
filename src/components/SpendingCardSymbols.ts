import { WeeklySpend } from '@/lib/api/getWeeklySpending'
import { InjectionKey } from 'vue'

export const WeeklySpendKey = Symbol(
  'WeeklySpendKey',
) as InjectionKey<WeeklySpend>
