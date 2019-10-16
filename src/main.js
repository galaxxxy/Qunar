import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './sotre/index.js'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$ajax = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
