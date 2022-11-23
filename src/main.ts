import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import '@/scss/main.css'

const app = createApp(App).use(router).mount('#app')
// App.config.globalProperties.$reloadPage = false
app.provide('reloadPage', false)