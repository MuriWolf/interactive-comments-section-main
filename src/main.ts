import { createApp, } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import '@/scss/main.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import store from './store/index'

const app = createApp(App).use(store).use(router);
app.mount("#app")
