import { createApp } from 'vue'
import App from './App.vue'

import CSVueVite from './index'

const options = {
    baseURL: '/Livelink100/livelink.exe',
    img: '/img/',
    username: 'Admin',
    password: 'livelink',
    datelong: 'MM/DD/YYYY HH:mm',
    dateshort: 'MM/DD/YYYY',
}

const app = createApp(App)

app.use(CSVueVite, options).mount('#app')
