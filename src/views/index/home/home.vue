<!--
 * @Description:主页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 10:30:33
 -->
<template>
  <div id="mainHome">
    <div class='logoNav clearfix'>
      <p class='logoTit'>
        <span>易推广</span>
      </p>
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1">产品特性</el-menu-item>
        <el-menu-item index="2">我的站点</el-menu-item>
        <el-menu-item index="3">数据统计</el-menu-item>
      </el-menu>
    </div>
    <div class='startCon clearfix'>
      <div class='leftDiv'>
        <span class='line1'></span>
        <p>十分钟完成<br />智能营销页搭建</p>
        <span class='line2'></span>
        <button class='startBtn'
                @click="startOnce()">立即开始</button>
      </div>
      <div class='rightDiv'>

      </div>
      <el-form :label-position="labelPosition"
               label-width="80px"
               :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-button @click="login"> 登陆</el-button>
      </el-form>

    </div>
  </div>
</template>

<script>
import { login } from '@/api/index/login.js'
import { setToken } from '@/utils/auth'
export default {
  name: 'Main',
  data () {
    return {
      activeIndex: '1',
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 立即开始
    startOnce () {
      this.$router.push({
        path: '/control'
      })
    },
    handleSelect (key, keyPath) {
      if (key === 2) {
        this.$router.push({ path: '/control' })
      } else if (key === 3) {
        this.$router.push({ path: '/dashBoard' })
      }
    },
    /**
     * @name: login
     * @description: 登陆方法
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    login () {
      login(this.form).then((res) => {
        setToken(res.token)
      }).catch(() => {

      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./home.scss";
</style>
