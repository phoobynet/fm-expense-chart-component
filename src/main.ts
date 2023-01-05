import App from '@/App.vue'
import '@/lib/chart/registerComponents'
import { router } from '@/router'
import '@/styles/index.scss'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
