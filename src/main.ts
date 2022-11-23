import { createApp, } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import '@/scss/main.css'

// const app=createApp({
//     provide:{
//       globalVariable:123
//     }
  
//   }).use('router').mount('#app')

const app = createApp(App).use(router);
app.provide('reloadPage', false)
app.mount("#app")


// app.provide('reloadPage', false)