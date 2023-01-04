export interface DailySpend {
  day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
  amount: number
}

export interface WeeklySpend {
  dailySpend: DailySpend[]
  totalThisMonth: number
  differenceFromLastMonth: number
  balance: number
}

const weeklySpend: WeeklySpend = {
  dailySpend: [
    {
      day: 'mon',
      amount: 17.45,
    },
    {
      day: 'tue',
      amount: 34.91,
    },
    {
      day: 'wed',
      amount: 52.36,
    },
    {
      day: 'thu',
      amount: 31.07,
    },
    {
      day: 'fri',
      amount: 23.39,
    },
    {
      day: 'sat',
      amount: 43.28,
    },
    {
      day: 'sun',
      amount: 25.48,
    },
  ],
  totalThisMonth: 478.33,
  differenceFromLastMonth: 0.024,
  balance: 921.48,
}

export const getWeeklySpending = async (): Promise<WeeklySpend> => {
  return {
    ...weeklySpend,
  }
}
