import { createApp } from 'vue'
import App from './index.vue'
import './styles/index.css'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
