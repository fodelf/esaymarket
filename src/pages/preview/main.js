/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-12 22:23:09
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 08:34:46
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _global from './global'
Vue.prototype._GLOBAL = _global
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
