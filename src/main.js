import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './stores/store'

// 绑定到全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
