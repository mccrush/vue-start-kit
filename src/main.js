import './scss/styles.scss'
//import { Dropdown, Offcanvas } from 'bootstrap'
//import { dataModels } from './data/dataModels'

import { createApp } from 'vue'
//import router from './router'
import store from './store'
import App from './App.vue'

let app

if (!app) {
  app = createApp(App).use(store).mount('#app')
}

console.log('main.js: App is run')