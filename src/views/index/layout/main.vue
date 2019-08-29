<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-28 18:59:43
 -->
<template>
  <div style="height:100%"
       id='contentMain'>
    <div class='header'>
      <span class='logoTit'>易推广</span>
      <el-menu :default-active="activePath"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="/">产品</el-menu-item>
        <el-menu-item index=""
                      disabled>解决方案（暂未开放）</el-menu-item>
        <el-menu-item index=""
                      disabled>研究院（暂未开放）</el-menu-item>
        <el-menu-item index="/control">控制台</el-menu-item>
      </el-menu>
      <p v-if="userName">
        <span>欢迎你！<em>{{userName}}</em></span>
        <i class='iconfont icon-tuichudenglu'
           title="退出登录"
           @click="logout()"></i>
      </p>
      <p v-else>
        <span class='toLogin' @click="toLogin()">登陆</span>
        <span @click="toRegister()">注册</span>
      </p>
    </div>
    <div class='main'
         style="padding:0px"
         ref='main'>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      userName: '',
      activePath: '/'
    }
  },
  components: {
  },
  mounted () {

  },
  methods: {
    /**
    * @name: handleSelect
    * @description: 路由跳转
    */
    handleSelect (key, path) {
      this.activePath = key;
      console.log(key);
      this.$router.push({
        path: key
      })
    },
    /**
     * @name: logout
     * @description: 退出登录
     */
    logout () {

    },
    /**
     * @name: toLogin
     * @description: 去登录页
     */
    toLogin(){
      this.$router.push({
        path:"/login"
      })
    },
    /**
     * @name: toLogin
     * @description: 去注册页
     */
    toRegister(){
      this.$router.push({
        path:"/register"
      })
    },
  },
  // computed: {
  //   activePath() {
  //     const route = this.$route;
  //     console.log(route);
  //     // path =
  //     return path;
  //   }
  // },
  created () {
    this.$nextTick(() => {
      this.userName = localStorage.getItem('userName')
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./main.scss";
</style>
