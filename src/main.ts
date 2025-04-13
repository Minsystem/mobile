import './assets/main.css'
import { createApp } from 'vue'
import uiPlugin from '@nuxt/ui/vue-plugin'
import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(uiPlugin)
app.use(router)

app.mount('#app')
