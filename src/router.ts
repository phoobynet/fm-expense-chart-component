import Expenses from '@/routes/Expenses.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Expenses,
      name: 'expenses',
    },
  ],
})
