import axios from 'axios'
import store from '../stores/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  return Promise.reject(error)
})
service.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error.response)
})

export default service
