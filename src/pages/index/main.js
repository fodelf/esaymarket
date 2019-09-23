/*
 * @Description:主入口
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-12 22:23:05
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 08:34:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _global from './global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/dialog/style'
import '@/assets/iconfont/iconfont.css'
import VueClipboard from 'vue-clipboard2'
Vue.prototype._GLOBAL = _global
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
