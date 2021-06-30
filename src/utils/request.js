// 请求响应相关
import Vue from 'vue'
import axios from 'axios'
import { VueAxios } from './axios'
import {Notification} from 'element-ui'
let router = import("@/router");
// 创建 axios 实例
const service = axios.create({
  baseURL: '',
  timeout: 90000 // 请求超时时间
})
// 错误处理
const err = (error) => {
  let msg = (value) => {
    let language = JSON.parse(window.localStorage.getItem('langList'))
    if (language) {
      for (let i in language) {
        if (language[i].key==value) {
          return language[i].value
        }
      }
      return value
    } else {
      return value
    }
  }
  if (error.response) {
    let data = error.response.data
    switch (error.response.status) {
      case 403:
        Notification.error({ title: msg('系统提示'), message: msg('拒绝访问'), duration: 4000 })
        router.then(lib => {
          if (lib.default.currentRoute.name === "Login") return;
            lib.default.push({
              name: "403"
            })
        })
        break
      case 400:
        Notification.error({ title: msg('系统提示'), message: msg('参数错误'), duration: 4000 })
        break
      case 401:
        Notification.error({ title: msg('系统提示'), message: msg('当前登录已失效，请重新登录'), duration: 4000 })
          router.then(lib => {
            if (lib.default.currentRoute.name === "Login") return;
              lib.default.push({
                name: "login"
              })
          })
        break
      case 404:
        Notification.error({ title: msg('系统提示'), message: msg('很抱歉，资源未找到'), duration: 4000 })
        break
      case 500:
        Notification.error({ title: msg('系统提示'), message: msg('系统错误'), duration: 4000 })
        break
      default:
        Notification.error({
          message: msg('系统提示'),
          description: msg(data.msg),
          duration: 4
        })
        break
    }
  }
  return Promise.reject(error)
};

// request interceptor
service.interceptors.request.use(config => {
  const token = window.localStorage.getItem('ACCESS_TOKEN')
  if (token) {
    config.headers[ 'X-Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
},(error) => {
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue, router = {}) {
    Vue.use(VueAxios, router, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}