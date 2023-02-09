import { createApp } from 'vue'
import App from './App.vue'
import CSVueVite from './index'

import './assets/tailwind.css'

/**
 * This file isn't part of the build and is just used for testing.
 *
 * yarn dev
 */

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
