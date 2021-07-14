import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store.js'

createApp(App).use(store).use(router).mount('#app')

