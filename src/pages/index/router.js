/*
 * @Description:路由控制
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 18:57:53
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 17:54:09
 */
import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/index/layout/main.vue'
import Login from '@/views/index/login/login.vue'
import Register from '@/views/index/register/register.vue'
const Home = () => import('@/views/index/home/home.vue')
const Control = () => import('@/views/index/control/control.vue')
const DashBoard = () => import('@/views/index/dashboard/dashboard.vue')
Vue.use(Router)
// 这是我的测试代码11
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: '主页',
          component: Home,
          meta: {
            title: 'Home',
            noCache: true
          }
        }
      ]
    },
    {
      path: '/control',
      name: '控制台',
      component: MainLayout,
      children: [
        {
          path: '',
          component: Control,
          name: '控制台'
        }
      ]
    },
    {
      path: '/dashBoard',
      name: '仪表盘',
      component: MainLayout,
      children: [
        {
          path: '',
          component: DashBoard,
          name: '仪表盘'
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    }
  ]
})
