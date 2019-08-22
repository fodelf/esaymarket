<!--
 * @Description:主页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 17:48:02
 -->
<template>
  <div id="mainHome">
    <div class='logoNav clearfix'>
      <p class='logoTit'>
        <span>易推广</span>
      </p>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">产品特性</el-menu-item>
        <el-menu-item index="2">我的站点</el-menu-item>
        <el-menu-item index="3">数据统计</el-menu-item>
      </el-menu>
    </div>
    <div class='startCon clearfix'>
      <div class='leftDiv'> 
        <span class='line1'></span>
        <p>十分钟完成<br/>智能营销页搭建</p>
        <span class='line2'></span>
        <button class='startBtn' @click="startOnce()">立即开始</button>
      </div>
      <div class='rightDiv'>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      activeIndex:"1"
    }
  },
  components: {
  },
  created () {

  },
  mounted () {

  },
  methods: {
    //立即开始
    startOnce(){
      this.$router.push({
       path: '/control'
      })
    },
    handleSelect(key, keyPath){
      if(key == 2){
        this.$router.push({path: '/control'})
      }else if(key == 3){
        this.$router.push({path: '/dashBoard'})
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./home.scss";
</style>
