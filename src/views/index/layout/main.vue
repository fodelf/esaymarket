<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 17:47:38
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
        <el-menu-item index="" disabled>解决方案（暂未开放）</el-menu-item>
        <el-menu-item index="" disabled>研究院（暂未开放）</el-menu-item>
        <el-menu-item index="/control">控制台</el-menu-item>
      </el-menu>
      <p>
        <span>欢迎你！<em>{{userName}}</em></span>
        <i class='iconfont icon-tuichudenglu' title="退出登录" @click="logout()"></i>
      </p>
    </div>
    <el-main style="padding:0px"
             ref='main'>
      <router-view />
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      userName:"",
      activePath:"/"
    }
  },
  components: {
  },
  created () {

  },
  mounted () {

  },
  methods: {
     /**
     * @name: handleSelect
     * @description: 路由跳转
     */
    handleSelect(key,path){
      this.activePath = key;
      this.$router.push({
        path:key
      })
    },
    /**
     * @name: logout
     * @description: 退出登录
     */
    logout(){

    }
  },
  created(){
    this.$nextTick(()=>{
      this.userName = sessionStorage.getItem("userName");
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./main.scss";
</style>
