import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (!navigator.geolocation) {
  alert('tu navegador no soporta el GeoLocation')
  throw new Error('tu navegador no soporta el GeoLocation :/')
}

createApp(App).use(store).use(router).mount('#app')
