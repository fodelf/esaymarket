/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-12 22:23:09
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-10-15 22:09:12
 */
import App from './App.vue'
import _global from './global'
import Vant from 'vant'
import 'vant/lib/index.css'
const install = function (Vue) {
  Vue.component('easy-counter', App)
  Vue.prototype._GLOBAL = _global
  Vue.use(Vant)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '2.12.0',
  install
}
