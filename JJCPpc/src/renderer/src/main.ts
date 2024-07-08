import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/stores/index'

import '@/scss/base/base.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
