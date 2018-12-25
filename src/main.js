import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import router from './router'
import store from './stores/store'
import 'font-awesome/css/font-awesome.min.css'
import { getToken } from './utils/auth'

Vue.use(Vant);
// 绑定到全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false
 const Vm = new Vue({
  router,
  store,
  mounted() {
    this.interceptors()
  },
  methods: {
    interceptors() {
      this.$axios.interceptors.request.use(
        config => {
          if ( getToken()) {
            config.headers["Token"] = getToken()
          }
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );
      this.$axios.interceptors.response.use(
        response => {
          return response.data;
        },
        error => {
          return Promise.reject(error.response);
        }
      );
    }
  },
  render: h => h(App)
}).$mount('#app')
